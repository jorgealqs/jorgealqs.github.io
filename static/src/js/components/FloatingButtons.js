const { Component, xml } = owl;

export class FloatingButtons extends Component {
    static template = xml`
        <div class="fixed bottom-4 right-4 flex flex-col gap-3 z-50 md:bottom-6 md:right-8">
            <a href="https://wa.me/573193662738" target="_blank"
                class="floating-btn bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-800">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://github.com/jorgealqs" target="_blank"
                class="floating-btn bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-black">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jorgealqs" target="_blank"
                class="floating-btn bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:joralquisi@hotmail.com"
                class="floating-btn bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    `;
}