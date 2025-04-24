export function initAOSAndObservers() {
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
}