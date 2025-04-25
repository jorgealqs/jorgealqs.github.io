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
import { CryptoPrices } from "./pages/Crypto.js";


export class App extends Component {

    static components = {
        FloatingButtons,
        Navbar,
        Footer,
        Home,
        AboutMe,
        ProjectsSection,
        BlogsSection,
        CryptoPrices
    };

    setup() {
        this.state = useState({
            lang: getLang() || "es",
            page: getPage() || "home"
        });
        onMounted(() => {
            initAOSAndObservers();
        });
    }

    static template = xml`
        <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-slate-100">
            <FloatingButtons />
            <Navbar state="state"/>
            <div class="flex-grow pt-16" t-if="state.page === 'home'">
                <Home state="state"/>
                <AboutMe state="state"/>
                <ProjectsSection state="state"/>
            </div>
            <div class="flex-grow pt-16" t-if="state.page === 'blogs'">
                <BlogsSection state="state"/>
            </div>
            <div class="flex-grow pt-16" t-if="state.page === 'crypto'">
                <CryptoPrices state="state"/>
            </div>
            <Footer state="state"/>
        </div>
    `;

}
