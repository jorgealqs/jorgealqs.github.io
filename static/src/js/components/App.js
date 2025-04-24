const { Component, xml, useState, onMounted } = owl;

import { Navbar } from "./Navbar.js";
import { FloatingButtons } from "./FloatingButtons.js";
import { Footer } from "./Footer.js";
import { getLang } from "../../utils/lang.js";
import { getPage } from "../../utils/page.js";
import { Home } from "./pages/Home.js";
import { AboutMe } from "./pages/AboutMe.js";
import { ProjectsSection } from "./pages/Project.js";
import { initAOSAndObservers } from "../../utils/initAOSAndObservers.js";
import { BlogsSection } from "./pages/Blogs.js";


export class App extends Component {

    static components = { Navbar, Footer, Home, AboutMe, FloatingButtons, ProjectsSection, BlogsSection };

    setup() {
        this.appState = useState({
            lang: getLang() || "es",
            page: getPage() || "home",
        });
        onMounted(() => {
            initAOSAndObservers();
        });
    }

    static template = xml`
        <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-slate-100">
            <FloatingButtons />
            <Navbar appState="appState"/>
            <div class="flex-grow pt-16" t-if="appState.page === 'home'">
                <Home appState="appState"/>
                <AboutMe appState="appState"/>
                <ProjectsSection appState="appState"/>
            </div>
            <div class="flex-grow pt-16" t-if="appState.page === 'blogs'">
                <BlogsSection appState="appState"/>
            </div>
            <Footer appState="appState"/>
        </div>
    `;

}
