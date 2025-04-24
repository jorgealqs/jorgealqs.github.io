const { Component, xml } = owl;
import { translations } from "../i18n/translations.js";

export class AboutMe extends Component {
    static template = xml`
    <section class="flex flex-col items-center justify-center py-16 lg:py-14 px-6 gap-12 indigo-70" id="about" data-aos="zoom-in">
        <div class="max-w-3xl text-center space-y-10">
            <!-- FRASE DESTACADA -->
            <p class="text-indigo-600 text-xl font-semibold tracking-wide">
                <t t-esc="this.translations[this.props.appState.lang].about_quote"/>
            </p>

            <!-- TÍTULO -->
            <h2 class="text-4xl font-extrabold text-indigo-700" data-aos="fade-up" data-aos-delay="100">
                <t t-esc="this.translations[this.props.appState.lang].about_title"/>
            </h2>

            <!-- BIOGRAFÍA -->
            <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                <t t-esc="this.translations[this.props.appState.lang].about_bio_extended"/>
            </p>

            <!-- TÍTULO TECNOLOGÍAS -->
            <h3 class="text-2xl font-bold text-indigo-600 mt-6" data-aos="fade-up" data-aos-delay="250">
                <t t-esc="this.translations[this.props.appState.lang].about_stack_title"/>
            </h3>

            <!-- ICONOS DE TECNOLOGÍAS -->
            <div class="flex justify-center" data-aos="fade-up" data-aos-delay="300">
                <img
                    src="https://skillicons.dev/icons?i=python,postgres,tailwind,docker,javascript,git,linux,postman,vscode&amp;perline=5"
                    alt="Stack tecnológico"
                    class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                />
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