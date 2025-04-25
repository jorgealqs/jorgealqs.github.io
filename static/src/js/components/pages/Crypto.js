const { Component, useState, onWillStart, onMounted, onWillUnmount, xml } = owl;
import { translations } from "../../i18n/translations.js";

export class CryptoPrices extends Component {
    static template = xml`
        <section class="flex flex-col py-16 px-6 gap-10" id="crypto">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">
                    🪙
                    <t t-esc="this.translations[this.props.state.lang].top_crypto" />
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <t t-foreach="state.cryptos" t-as="coin" t-key="coin.id">
                        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all border border-gray-200">
                            <div class="flex items-center gap-4 mb-3">
                                <img t-att-src="coin.image" alt="logo" class="w-10 h-10 rounded-full border" />
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800"><t t-esc="coin.name" /></h3>
                                    <p class="text-sm text-gray-500 uppercase"><t t-esc="coin.symbol" /></p>
                                </div>
                            </div>

                            <div class="text-sm text-gray-700 space-y-1">
                                <p>💰 <b>Price:</b> $<t t-esc="coin.current_price.toLocaleString('es-CO')" /></p>
                                <p>📊 <b>24h Change:</b>
                                    <span t-att-class="{
                                        'text-green-600': coin.price_change_percentage_24h &gt;= 0,
                                        'text-red-600': coin.price_change_percentage_24h &lt; 0
                                    }">
                                        <t t-esc="coin.price_change_percentage_24h.toFixed(2)" />%
                                    </span>
                                </p>
                                <p>📈 <b>ATH:</b> $<t t-esc="coin.ath.toLocaleString('es-CO')" /></p>
                                <p>📉 <b>ATL:</b> $<t t-esc="coin.atl.toLocaleString('es-CO')" /></p>
                                <p>🏦 <b>Market Cap:</b> $<t t-esc="coin.market_cap.toLocaleString('es-CO')" /></p>
                                <p>📦 <b>Volume (24h):</b> $<t t-esc="coin.total_volume.toLocaleString('es-CO')" /></p>
                                <p>🔄 <b>Supply:</b> <t t-esc="coin.circulating_supply.toLocaleString('es-CO')" /></p>
                            </div>

                            <p class="text-xs text-gray-400 mt-3">🔁 Last update:
                                <t t-esc="new Date(coin.last_updated).toLocaleString('es-CO')" />
                            </p>
                        </div>
                    </t>
                </div>
            </div>
        </section>
    `;

    static props = {
        state: Object,
    };

    setup() {
        const state = useState({ cryptos: [] });
        this.translations = translations;

        const fetchPrices = async () => {
            try {
                const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
                const data = await res.json();
                // Ordenar manualmente por market_cap_rank para mayor seguridad
                state.cryptos = data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
            } catch (error) {
                console.error("❌ Error fetching crypto prices:", error);
            }
        };

        onWillStart(fetchPrices);
        onMounted(() => {
            this.intervalId = setInterval(fetchPrices, 60000);
        });
        onWillUnmount(() => {
            clearInterval(this.intervalId);
        });

        this.state = state;
    }
}