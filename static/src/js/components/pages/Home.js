const { Component, xml } = owl;
import { translations } from "../../i18n/translations.js";

export class Home extends Component {
    static template = xml`
    <section class="flex flex-col-reverse lg:flex-row items-center justify-center py-16 lg:py-34 px-6 gap-10" id="home">
        <div class="text-center lg:text-left max-w-xl space-y-6">
            <div data-aos="fade-up" data-aos-delay="100">
                <h1 class="text-4xl sm:text-5xl font-bold text-gray-800">
                    <span t-esc="this.translations[this.props.state.lang].name"></span>
                </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <p class="text-lg sm:text-xl text-gray-600">
                    <span t-esc="this.translations[this.props.state.lang].introText"></span>
                </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" class="flex flex-wrap justify-center gap-4">
                <!-- Ver Proyectos -->
                <a href="#projects"
                class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out">
                    <i class="fas fa-folder-open text-lg"></i>
                    <span t-esc="this.translations[this.props.state.lang].viewProjects"></span>
                </a>

                <!-- Descargar CV -->
                <a t-att-href="this.translations[this.props.state.lang].url_download_resume"
                class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out">
                    <i class="fas fa-download text-lg"></i>
                    <span t-esc="this.translations[this.props.state.lang].download_resume"></span>
                </a>
            </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="400">
            <div class="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-indigo-300 shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out">
                <img src="static/src/image/foto.jpg" alt="JorgeDev" class="object-cover w-full h-full" />
            </div>
        </div>
    </section>
    `;

    static props = {
        state: String,
    };

    setup() {
        this.translations = translations;
    }
}