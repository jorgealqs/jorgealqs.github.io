const { Component, xml, useState, onMounted } = owl;

import { Navbar } from "./js/components/Navbar.js";
import { FloatingButtons } from "./js/components/FloatingButtons.js";
import { Footer } from "./js/components/Footer.js";
import { getLang } from "./utils/lang.js";
import { Home } from "./js/components/Home.js";
import { AboutMe } from "./js/components/AboutMe.js";
import { ProjectsSection } from "./js/components/Project.js";

export class App extends Component {

    static components = { Navbar, Footer, Home, AboutMe, FloatingButtons, ProjectsSection };

    setup() {
        this.appState = useState({ lang: getLang() || "es" });
        onMounted(() => {
            if (window.AOS) {
                AOS.init({
                    duration: 400,
                    once: true,
                });
            } else {
                console.warn("AOS not loaded");
            }
            const sections = ['home', 'about', 'projects'];
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.classList.add('highlight');
                        setTimeout(() => el.classList.remove('highlight'), 1500);
                    }
                });
            }, { threshold: 0.5 });

            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });

        });
    }

    static template = xml`
        <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-slate-100">
            <FloatingButtons />
            <Navbar appState="appState"/>
            <div class="flex-grow pt-16">
                <Home appState="appState"/>
                <AboutMe appState="appState"/>
                <ProjectsSection appState="appState"/>
            </div>
            <Footer appState="appState"/>
        </div>
    `;

}
