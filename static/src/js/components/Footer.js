const { Component, xml } = owl;
import { translations } from "../i18n/translations.js";

export class Footer extends Component {
    static template = xml`
    <footer class="bg-gray-100 text-center text-gray-600 py-10 mt-16 border-t border-gray-300 shadow-inner animate-fadeIn">
        <div class="container mx-auto px-4 space-y-6">
            <!-- Textos -->
            <div>
                <p class="mb-2 text-base sm:text-lg">
                    <span t-esc="this.translations[this.props.appState.lang].footerText"></span>
                </p>
                <p class="text-sm sm:text-base">
                    &#169; 2025 <span class="text-indigo-600 font-semibold">JorgeDev</span>.
                    <span t-esc="this.translations[this.props.appState.lang].rightsReserved"></span>
                </p>
            </div>

            <!-- Tecnologías -->
            <div class="flex flex-wrap justify-center gap-6 text-sm sm:text-base mt-4">
                <a href="https://www.python.org" target="_blank" class="hover:text-indigo-600 transition">
                    🐍 Python
                </a>
                <a href="https://www.odoo.com" target="_blank" class="hover:text-purple-600 transition">
                    💼 Odoo
                </a>
                <a href="https://github.com/odoo/owl" target="_blank" class="hover:text-blue-600 transition">
                    🦉 OWL
                </a>
                <a href="https://tailwindcss.com" target="_blank" class="hover:text-teal-600 transition">
                    💨 Tailwind CSS
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="hover:text-yellow-500 transition">
                    🟨 JavaScript
                </a>
            </div>
        </div>
    </footer>
    `;

    static props = {
        appState: String,
    };

    setup() {
        this.translations = translations;
    }
}