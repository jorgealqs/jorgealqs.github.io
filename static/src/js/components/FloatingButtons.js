const { Component, xml } = owl;

export class FloatingButtons extends Component {
    static template = xml`
        <div class="fixed bottom-4 right-4 flex flex-col gap-3 z-50 md:bottom-6 md:right-8">
            <!-- WhatsApp -->
            <a href="https://wa.me/573193662738" target="_blank"
                class="text-green-600 hover:text-green-800 text-3xl transition-transform hover:scale-125">
                <i class="fab fa-whatsapp"></i>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/jorgealqs" target="_blank"
                class="text-gray-800 hover:text-black text-3xl transition-transform hover:scale-125">
                <i class="fab fa-github"></i>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/jorgealqs" target="_blank"
                class="text-blue-700 hover:text-blue-900 text-3xl transition-transform hover:scale-125">
                <i class="fab fa-linkedin-in"></i>
            </a>

            <!-- Email -->
            <a href="mailto:joralquisi@hotmail.com"
                class="text-indigo-600 hover:text-indigo-800 text-3xl transition-transform hover:scale-125">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    `;
}