const { Component, xml, onMounted } = owl;
import { translations } from "../../i18n/translations.js";

export class ProjectsSection extends Component {
    static template = xml`
    <section class="py-16 lg:py-14 px-6 text-center indigo-100" id="projects">
        <h2 class="text-4xl font-extrabold text-indigo-700 mb-10" data-aos="fade-up">
            <t t-esc="this.translations[this.props.state.lang].project_title" />
        </h2>

        <div id="splide" class="splide max-w-5xl mx-auto" data-aos="fade-up">
            <div class="splide__track">
                <ul class="splide__list">
                    <t t-foreach="this.projects" t-as="project" t-key="project.id">
                        <li class="splide__slide h-full">
                            <div class="bg-indigo-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
                            <img t-att-src="project.image" alt="project screenshot"
                            t-on-click="() => this.showImageModal(project.image)"
                            class="rounded-lg mb-4 h-48 w-full object-contain bg-white p-2 cursor-pointer hover:scale-105 transition-transform"/>
                                <h3 class="text-2xl font-semibold text-indigo-800 mb-2">
                                    <t t-esc="project.name"/>
                                </h3>
                                <p class="text-gray-700 text-sm mb-4">
                                    <t t-esc="project.description"/>
                                </p>
                                <div class="text-sm text-gray-600 mb-4">
                                    <strong><t t-esc="this.translations[this.props.state.lang].projects_technologies_title"/>:</strong> <t t-esc="project.technologies"/>
                                </div>
                                <div class="flex justify-center gap-4 mt-auto">
                                    <a t-if="project.demo" t-att-href="project.demo" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm shadow transition-transform hover:scale-105">
                                        <t t-esc="this.translations[this.props.state.lang].projects_demo_title"/>
                                    </a>
                                    <a t-if="project.code" t-att-href="project.code" target="_blank" class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow transition-transform hover:scale-105">
                                        <t t-esc="this.translations[this.props.state.lang].projects_code_title"/>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </t>
                </ul>
            </div>
        </div>
    </section>
    `;

    static props = {
        state: String,
    };

    setup() {
        this.translations = translations;
        onMounted(() => {
            if (window.Splide) {
                new Splide('#splide', {
                    type: 'loop',
                    perPage: 3,
                    gap: '1rem',
                    breakpoints: {
                        1024: { perPage: 2 },
                        640: { perPage: 1 }
                    },
                    autoplay: true,
                    pauseOnHover: true,
                    resetProgress: false,
                }).mount();
            } else {
                console.warn("Splide.js no está cargado.");
            }
        });
    }

    get projects() {
        return this.translations[this.props.state.lang].projects;
    }

    showImageModal(url) {
        basicLightbox.create(`<img src="${url}" style="max-width: 90vw; max-height: 90vh;">`).show();
    }
}