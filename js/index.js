// Para que el header se cree en un doc y se muestre en todos los archivos html

fetch('./components/header.html')
    .then(data => data.text())
    .then(html => {
        document.querySelector('header').innerHTML = html
        let openMenu = document.getElementById('openMenu')
        let closeMenu = document.getElementById('closeMenu')
        let overlay = document.querySelector('.overlay')

        console.log(document.getElementById('openMenu')); 
        console.log(document.getElementById('closeMenu'));
        console.log(document.querySelector('.overlay'));


        openMenu.addEventListener('click', () => {
            overlay.classList.toggle('hidden')
        })

        closeMenu.addEventListener('click', () => {
            overlay.classList.toggle('hidden')
        })
    })

fetch('./components/footer.html')
    .then(data => data.text())
    .then(html => document.querySelector('footer').innerHTML = html)


// Para el efecto typing text

const typing = document.querySelector(".type-efect");
const texto = "Rodante, la única agencia de viajes en movimiento.";

function efectoTyping(elemento, texto, index = 0, eliminando = false) {
    if (!eliminando) {
        // Fase de escribir: vamos añadiendo las letras una a una
        elemento.textContent = texto.slice(0, index + 1);

        if (index < texto.length - 1) {
            setTimeout(() => efectoTyping(elemento, texto, index + 1, false), 100);
        } else {
            // Cambiamos al modo "eliminar" tras terminar de escribir
            setTimeout(() => efectoTyping(elemento, texto, texto.length - 1, true), 1000);
        }
    } else {
        // Fase de eliminar: vamos eliminando las letras una a una
        elemento.textContent = texto.slice(0, index);

        if (index > 0) {
            setTimeout(() => efectoTyping(elemento, texto, index - 1, true), 100);
        } else {
            // Reiniciamos el ciclo volviendo a escribir
            setTimeout(() => efectoTyping(elemento, texto, 0, false), 1000);
        }
    }
}

efectoTyping(typing, texto);
