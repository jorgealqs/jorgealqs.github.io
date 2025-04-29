const { Component, xml } = owl;
import { translations } from "../../i18n/translations.js";

export class AboutMe extends Component {
    static template = xml`
    <section class="flex flex-col items-center justify-center py-16 lg:py-14 px-6 gap-12 indigo-70" id="about" data-aos="zoom-in">
        <div class="max-w-3xl text-center space-y-10">
            <!-- FRASE DESTACADA -->
            <p class="text-indigo-600 text-xl font-semibold tracking-wide">
                <t t-esc="this.translations[this.props.state.lang].about_quote"/>
            </p>

            <!-- TÍTULO -->
            <h2 class="text-4xl font-extrabold text-indigo-700" data-aos="fade-up" data-aos-delay="100">
                <t t-esc="this.translations[this.props.state.lang].about_title"/>
            </h2>

            <!-- BIOGRAFÍA -->
            <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                <t t-esc="this.translations[this.props.state.lang].about_bio_extended"/>
            </p>

            <!-- TÍTULO TECNOLOGÍAS -->
            <h3 class="text-2xl font-bold text-indigo-600 mt-6" data-aos="fade-up" data-aos-delay="250">
                <t t-esc="this.translations[this.props.state.lang].about_stack_title"/>
            </h3>

            <!-- ICONOS DE TECNOLOGÍAS -->
            <div class="flex justify-center" data-aos="fade-up" data-aos-delay="300">
                <div class="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Python</span>
                        <img src="https://skillicons.dev/icons?i=python" alt="Python" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">PostgreSQL</span>
                        <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Tailwind</span>
                        <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Docker</span>
                        <img src="https://skillicons.dev/icons?i=docker" alt="Docker" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Javascript</span>
                        <img src="https://skillicons.dev/icons?i=javascript" alt="Javascript" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Git</span>
                        <img src="https://skillicons.dev/icons?i=git" alt="Git" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Linux</span>
                        <img src="https://skillicons.dev/icons?i=linux" alt="Linux" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Postman</span>
                        <img src="https://skillicons.dev/icons?i=postman" alt="Postman" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Vscode</span>
                        <img src="https://skillicons.dev/icons?i=vscode" alt="Vscode" class="w-12 h-12" />
                    </div>
                </div>
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