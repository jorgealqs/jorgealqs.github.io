function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "es",
            includedLanguages: "en",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
    )
}

document.getElementById('descargar').addEventListener('click', function () {
    window.jsPDF = window.jspdf.jsPDF
    // Crea un objeto jsPDF
    var doc = new jsPDF()

    // Agrega el contenido de la página web al PDF
    doc.html(document.body, {
        callback: function () {
            // Descarga el PDF
            doc.save('pagina-web.pdf')
        }
    })
})