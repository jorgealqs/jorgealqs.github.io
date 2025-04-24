const { Component, xml } = owl;

import { translationsBlogPosts } from "../../i18n/translations_blogs.js";

export class BlogsSection extends Component {
    static template = xml`
        <section class="flex flex-col py-16 px-6 gap-10 bg-gradient-to-b from-blue-100 to-slate-100" id="blogs">
            <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-800">
                <t t-esc="this.translations[this.props.appState.lang].title_blog" />
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <t t-foreach="this.blogs" t-as="blog" t-key="blog.id">
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
                        <div class="relative p-6 flex flex-col justify-between h-full">
                            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500 to-transparent opacity-20"></div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-4 z-10">
                                <t t-esc="blog.title"/>
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 z-10">
                                <t t-esc="blog.summary"/>
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4 z-10">
                                <t t-foreach="blog.tags" t-as="tag" t-key="tag">
                                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                        <t t-esc="tag"/>
                                    </span>
                                </t>
                            </div>
                            <div class="text-xs text-gray-400 z-10">
                                <t t-esc="blog.date"/>
                            </div>
                        </div>
                    </div>
                </t>
            </div>
        </section>
    `;

    static props = {
        appState: Object,
    };

    setup() {
        try {
            this.translations = translationsBlogPosts;
        } catch (error) {
            console.error("Error en la inicialización:", error);
        }
    }

    get blogs() {
        const lang = this.props.appState?.lang || "es";
        return this.translations[lang]?.blogs || [];
    }
}