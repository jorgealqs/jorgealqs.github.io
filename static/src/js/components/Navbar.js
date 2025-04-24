const { Component, xml, useState } = owl;

import { translations } from "../i18n/translations.js";
import { setLang } from "../../utils/lang.js";
import { setPage } from "../../utils/page.js";

export class Navbar extends Component {
    static template = xml`
    <nav class="bg-gradient-to-r from-blue-100 via-white to-blue-100 fixed top-3 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl max-w-none w-[98.8%] px-4 py-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="text-indigo-600 font-bold text-2xl tracking-wide drop-shadow-sm hover:drop-shadow-lg transition duration-300">
                    Jorge<span class="text-gray-800">Dev</span>
                </div>

                <!-- Center Links -->
                <div class="hidden md:flex justify-center flex-1 space-x-10">
                    <a href="#home" class="relative group flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]" t-on-click="openHome">
                        <i class="fas fa-house-user"></i>
                        <span t-esc="this.translations[this.props.appState.lang].home"></span>
                        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
                    </a>
                    <t t-if="this.props.appState.page === 'home'">
                        <a href="#about" class="relative group flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition duration-300 hover:scale-105 hover:translate-y-[-2px]" t-on-click="openHome">
                            <i class="fas fa-user"></i>
                            <span t-esc="this.translations[this.props.appState.lang].about_title"></span>
                            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
                        </a>
                        <a href="#projects" class="relative group flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]" t-on-click="openHome">
                            <i class="fas fa-project-diagram"></i>
                            <span t-esc="this.translations[this.props.appState.lang].project_title"></span>
                            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
                        </a>
                    </t>
                </div>

                <!-- Contact & Language -->
                <div class="hidden md:flex items-center gap-6">
                    <a href="#blogs" class="relative group flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition hover:scale-105 hover:translate-y-[-2px]" t-on-click="openBlogs">
                        <i class="fas fa-blog text-lg"></i>
                        <span t-esc="this.translations[this.props.appState.lang].blogs"></span>
                        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
                    </a>
                    <a href="#crypto" class="relative group flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition hover:scale-105 hover:translate-y-[-2px]" t-on-click="openCrypto">
                        <i class="fas fa-coins text-lg"></i>
                        <span t-esc="this.translations[this.props.appState.lang].crypto_title"></span>
                        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
                    </a>
                    <div class="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 shadow">
                        <button
                            t-on-click="toggleLangToES"
                            class="cursor-pointer transition-transform"
                            title="Español">
                            <img
                                src="https://flagcdn.com/w40/co.png"
                                alt="ES"
                                t-att-class="{
                                    'h-auto': true,
                                    'w-8 ring-2 ring-indigo-400 rounded-full scale-110': this.props.appState.lang === 'es',
                                    'w-6 opacity-70 hover:rotate-[10deg] hover:scale-110': this.props.appState.lang !== 'es'
                                }" />
                        </button>
                        <span class="text-gray-400">|</span>
                        <button
                            t-on-click="toggleLangToEN"
                            class="cursor-pointer transition-transform"
                            title="English">
                            <img
                                src="https://flagcdn.com/w40/us.png"
                                alt="EN"
                                t-att-class="{
                                    'h-auto': true,
                                    'w-8 ring-2 ring-indigo-400 rounded-full scale-110': this.props.appState.lang === 'en',
                                    'w-6 opacity-70 hover:rotate-[10deg] hover:scale-110': this.props.appState.lang !== 'en'
                                }" />
                        </button>
                    </div>
                </div>

                <!-- Mobile Toggle -->
                <div class="md:hidden">
                    <button t-on-click="toggleMenu" class="text-gray-700 hover:text-indigo-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div t-if="state.menuOpen" class="md:hidden px-4 pb-4 pt-2 space-y-3 text-center bg-white shadow-md rounded-b-xl">
            <a href="#home" class="block text-gray-700 hover:text-indigo-600 font-medium transition" t-on-click="closeMenu">
                <i class="fas fa-house-user mr-2"></i>
                <span t-esc="this.translations[this.props.appState.lang].home"></span>
            </a>
            <t t-if="this.props.appState.page === 'home'">
                <a href="#about" class="block text-gray-700 hover:text-indigo-600 font-medium transition" t-on-click="closeMenu">
                    <i class="fas fa-user"></i>
                    <span t-esc="this.translations[this.props.appState.lang].about_title"></span>
                    <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
                </a>
                <a href="#projects" class="block text-gray-700 hover:text-indigo-600 font-medium transition" t-on-click="closeMenu">
                    <i class="fas fa-project-diagram mr-2"></i>
                    <span t-esc="this.translations[this.props.appState.lang].project_title"></span>
                </a>
            </t>
            <a href="#crypto" class="block text-gray-700 hover:text-indigo-600 font-medium transition" t-on-click="openCrypto">
                <i class="fas fa-coins text-lg"></i>
                <span t-esc="this.translations[this.props.appState.lang].crypto_title"></span>
                <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
            </a>
            <a href="#contacto" class="block text-gray-700 hover:text-indigo-600 font-medium transition" t-on-click="openBlogs">
                <i class="fas fa-blog text-lg"></i>
                <span t-esc="this.translations[this.props.appState.lang].blogs"></span>
                <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded"></span>
            </a>
            <div class="flex items-center justify-center gap-3 mt-2">
                <button
                    t-on-click="toggleLangToES"
                    class="cursor-pointer transition-transform"
                    title="Español">
                    <img
                        src="https://flagcdn.com/w40/co.png"
                        alt="ES"
                        t-att-class="{
                            'h-auto': true,
                            'w-8 ring-2 ring-indigo-400 rounded-full scale-110': this.props.appState.lang === 'es',
                            'w-6 opacity-70 hover:rotate-[10deg] hover:scale-110': this.props.appState.lang !== 'es'
                        }" />
                </button>
                <span class="text-gray-400">|</span>
                <button
                    t-on-click="toggleLangToEN"
                    class="cursor-pointer transition-transform"
                    title="English">
                    <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="EN"
                        t-att-class="{
                            'h-auto': true,
                            'w-8 ring-2 ring-indigo-400 rounded-full scale-110': this.props.appState.lang === 'en',
                            'w-6 opacity-70 hover:rotate-[10deg] hover:scale-110': this.props.appState.lang !== 'en'
                        }" />
                </button>
            </div>
        </div>
    </nav>
    `;

    static props = {
        appState: String,
    };

    setup() {
        this.translations = translations;
        this.state = useState({
            menuOpen: false,
        });

        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('backdrop-blur-md', 'bg-white/80', 'shadow-xl');
            } else {
                nav.classList.remove('backdrop-blur-md', 'bg-white/80', 'shadow-xl');
            }
        });
    }

    toggleMenu() {
        this.state.menuOpen = !this.state.menuOpen;
    }

    closeMenu() {
        this.state.menuOpen = false;
        this.openHome()
    }

    toggleLangToES() {
        this.props.appState.lang = "es";
        setLang("es");
    }

    toggleLangToEN() {
        this.props.appState.lang = "en";
        setLang("en");
    }

    openHome() {
        this.props.appState.page = "home";
        setPage("home")
    }

    openBlogs() {
        this.state.menuOpen = false;
        this.props.appState.page = "blogs";
        setPage("blogs")
    }

    openCrypto() {
        this.state.menuOpen = false;
        this.props.appState.page = "crypto";
        setPage("crypto")
    }

}
