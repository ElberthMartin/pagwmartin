document.addEventListener('DOMContentLoaded', function () {
    const text = "Descubre la tecnología de vanguardia y servicios de seguridad . Tu experiencia tecnológica comienza ahora.";
    const typedTextElement = document.getElementById('typed-text');

    function typeText(text, index) {
        if (index < text.length) {
            typedTextElement.innerHTML += "<strong>" + text.charAt(index) + "</strong>";
            index++;
            setTimeout(function () {
                typeText(text, index);
            }, 50); 
        } else {
            setTimeout(function () {
                typedTextElement.innerHTML = "";
                typeText(text, 0);
            }, 2000);
            
        }
    }

    typeText(text, 0);
});
