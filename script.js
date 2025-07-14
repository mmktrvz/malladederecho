function habilitar(elemento) {
    if (elemento.classList.contains('no-habilitada')) return;
    elemento.classList.add('tachado');
    elemento.removeAttribute('onclick');
    const next = elemento.dataset.siguiente;
    if (next) {
        const siguienteElemento = document.getElementById(next);
        if (siguienteElemento) {
            siguienteElemento.classList.remove('no-habilitada');
            siguienteElemento.classList.add('habilitada');
            siguienteElemento.setAttribute('onclick', 'habilitar(this)');
        }
    }
}

function tachar(elemento) {
    if (!elemento.classList.contains('no-habilitada')) {
        elemento.classList.toggle('tachado');
    }
}

document.querySelectorAll('.materia').forEach(materia => {
    if (!materia.dataset.siguiente && !materia.classList.contains('habilitada') && !materia.classList.contains('no-habilitada')) {
        materia.setAttribute('onclick', 'tachar(this)');
    }
});

function seleccionarItinerario(numero) {
    const materias = {
        1: ["Políticas y Ética Pública", "Contratación Pública", "Normas de Responsabilidad y Control", "Técnicas de Evaluación de Impacto"],
        2: ["Gobierno Corporativo", "Derecho de Competencia", "Derechos y Nuevas Tecnologías", "Compliance"],
        3: ["Estudios de Paz y Justicia Transnacional", "Security and Conflict", "Violence and Human Rights", "Métodos Alternativos de Solución de Conflictos Internacionales"]
    };
    const asignaturas = materias[numero];
    document.getElementById('m50').textContent = asignaturas[0];
    document.getElementById('m51').textContent = asignaturas[1];
    document.getElementById('m52').textContent = asignaturas[2];
    document.getElementById('m53').textContent = asignaturas[3];
}