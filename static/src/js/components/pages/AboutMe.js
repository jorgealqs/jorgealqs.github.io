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
                        <span class="text-sm mb-2 text-gray-700">Odoo</span>
                        <a href="https://www.odoo.com/documentation/17.0/developer.html" target="_blank">
                            <img src="https://www.odoo.com/web/image/website/1/favicon/" alt="Odoo"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Django Rest Framework</span>
                        <a href="https://www.django-rest-framework.org/" target="_blank">
                            <img src="https://static.djangoproject.com/img/icon-touch.e4872c4da341.png" alt="Django Rest Framework"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Python</span>
                        <a href="https://www.python.org" target="_blank">
                            <img src="https://skillicons.dev/icons?i=python" alt="Python"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">PostgreSQL</span>
                        <a href="https://www.postgresql.org" target="_blank">
                            <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Tailwind</span>
                        <a href="https://tailwindcss.com" target="_blank">
                            <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Bootstrap5</span>
                        <a href="https://getbootstrap.com/" target="_blank">
                            <img src="https://getbootstrap.com/docs/5.0/assets/img/favicons/favicon-32x32.png" alt="Tailwind"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Docker</span>
                        <a href="https://www.docker.com" target="_blank">
                            <img src="https://skillicons.dev/icons?i=docker" alt="Docker"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Javascript</span>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src="https://skillicons.dev/icons?i=javascript" alt="Javascript"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">TypeScript</span>
                        <a href="https://www.typescriptlang.org" target="_blank">
                            <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Git</span>
                        <a href="https://git-scm.com" target="_blank">
                            <img src="https://skillicons.dev/icons?i=git" alt="Git"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Linux</span>
                        <a href="https://www.linux.org" target="_blank">
                            <img src="https://skillicons.dev/icons?i=linux" alt="Linux"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Postman</span>
                        <a href="https://www.postman.com" target="_blank">
                            <img src="https://skillicons.dev/icons?i=postman" alt="Postman"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Vscode</span>
                        <a href="https://code.visualstudio.com" target="_blank">
                            <img src="https://skillicons.dev/icons?i=vscode" alt="Vscode"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-sm mb-2 text-gray-700">Api-Football</span>
                        <a href="https://dashboard.api-football.com/" target="_blank">
                            <img src="https://dashboard.api-football.com/public/img/api-sports-small-logo.png" alt="Vscode"  class="w-12 h-12 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg" />
                        </a>
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