import { App } from "./js/components/App.js";
import { applyInitialDarkMode } from "./utils/dark_mode.js";

const { mount } = owl;

applyInitialDarkMode();

mount(App, document.body);