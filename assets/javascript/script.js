// Arreglo de objetos para agregar los proyectos al html
const proyectos = [
    {
        "titulo": "HTML5",
        "descripcion": "Primer trabajo del bootcamp: Gracias a la explicación detallada del profesor y a la guía accesible en la plataforma, he podido enfrentar este desafío con mucha más confianza y eficacia.",
        "imagen": "assets/imgs/htmlCV.jpg"
    },
    {
        "titulo": "CSS",
        "descripcion": "Uno de los trabajos de CSS me llevó a profundizar nuevamente en el tema, revisando la nomenclatura de 'clases' e 'id'. La principal dificultad en este desafío fue ajustar las casillas con HTML5 para que se alinearan perfectamente con el diseño de la imagen de referencia.",
        "imagen": "assets/imgs/htmlTablas.jpg"
    },
    {
        "titulo": "Responsividad",
        "descripcion": "El mayor desafío fue ajustar los colores. Considerando mi experiencia, se podían emplear tres métodos diferentes con CSS para lograr esto. Sin embargo, desde mi perspectiva, la opción más intuitiva y eficiente fue utilizar 'Grid CSS'.",
        "imagen": "assets/imgs/css.jpg"
    },
    {
        "titulo": "Bootstrap",
        "descripcion": "Debíamos replicar una web utilizando Bootstrap. Uno de los mayores desafíos fue navegar por la web de Bootstrap para encontrar todos los componentes necesarios para lograr el resultado final, especialmente considerando que la documentación está en inglés.",
        "imagen": "assets/imgs/bootstrap.jpg"
    },
    {
        "titulo": "Javascript",
        "descripcion": "Crear un menú fue un gran desafío. Transitar de HTML5 y CSS a utilizar un lenguaje de programación completo implica una curva de aprendizaje mucho más pronunciada, lo que puede llevar a momentos de frustración. Sin embargo, es importante tomar un respiro y persistir en el intento.",
        "imagen": "assets/imgs/js.jpg"
    },
    {
        "titulo": "Git",
        "descripcion": "Aprender a utilizar la consola fue un gran desafío debido a la extensa lista de comandos. Sin embargo, anoté los comandos más importantes en un cuaderno. Escribirlos me ayudó a memorizarlos, y con el tiempo, recordar los comandos se volvió mucho más fácil.",
        "imagen": "assets/imgs/git.jpg"
    }
]

// Elemento del DOM
let indice = 0;
let imgProyecto = document.getElementById("proyectos");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let comentario = document.getElementById("comentario");
let enviarBtn = document.getElementById("enviar")

enviarBtn.addEventListener("click", () => {
    if (nombre.value === "" || apellido.value === "" || correo.value === "" || comentario.value === "") {
        console.log("Hay campos sin rellenar")
    } else {
        alert(`Gracias ${nombre.value} ${apellido.value}, pronto me pondre en contacto. \nEnviare un mensaje a este correo "${correo.value}"`)
        nombre.value = ""
        apellido.value = ""
        correo.value = ""
        comentario.value = ""
    }
})

const mostrarProyectos = () => {
    const proyectosHTML = proyectos.map((proyecto) => {
        return `
                <div class="card">
                    <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${proyecto.titulo}</h5>
                        <div class="card-description">
                            <p>${proyecto.descripcion}</p>
                        </div>
                    </div>
                </div>
        `;
    }).join('');

    document.getElementById('proyectos').innerHTML = proyectosHTML;

    document.querySelectorAll('.card').forEach(card => {
        let clicked = false;

        card.addEventListener('click', () => {
            const description = card.querySelector('.card-description');
            const title = card.querySelector('.card-title');

            if (clicked) {
                description.classList.remove('active');
                title.style.opacity = '1'; // Mostrar el título
                clicked = false;
            } else {
                document.querySelectorAll('.card-description.active').forEach(desc => {
                    desc.classList.remove('active');
                    desc.previousElementSibling.style.opacity = '1';
                });
                description.classList.add('active');
                title.style.opacity = '0'; // Ocultar el título
                clicked = true;
            }
        });

        card.addEventListener('mouseleave', () => {
            if (clicked) {
                const description = card.querySelector('.card-description');
                const title = card.querySelector('.card-title');

                description.classList.remove('active');
                title.style.opacity = '1'; // Mostrar el título
                clicked = false;
            }
        });
    });
}

mostrarProyectos();