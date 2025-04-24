const { Component, xml } = owl;
import { translations } from "../../i18n/translations.js";

export class Home extends Component {
    static template = xml`
    <section class="flex flex-col-reverse lg:flex-row items-center justify-center py-16 lg:py-34 px-6 gap-10" id="home">
        <div class="text-center lg:text-left max-w-xl space-y-6">
            <div data-aos="fade-up" data-aos-delay="100">
                <h1 class="text-4xl sm:text-5xl font-bold text-gray-800">
                    <span t-esc="this.translations[this.props.appState.lang].name"></span>
                </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <p class="text-lg sm:text-xl text-gray-600">
                    <span t-esc="this.translations[this.props.appState.lang].introText"></span>
                </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <a href="#projects" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300">
                    <span t-esc="this.translations[this.props.appState.lang].viewProjects"></span>
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
        appState: String,
    };

    setup() {
        this.translations = translations;
    }
}