const box1 = document.getElementById(0);
const box2 = document.getElementById(1);
const box3 = document.getElementById(2);
const box4 = document.getElementById(3);
const box5 = document.getElementById(4);
const box6 = document.getElementById(5);
const box7 = document.getElementById(6);
const box8 = document.getElementById(7);
const box9 = document.getElementById(8);

function crearNumerosAleatorios() {
    let array = [];
    for (let i = 0; i < 8; i++) {
        let randomNumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        while (array.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        }
        array.push(randomNumber);
    }
    return array;
}

function creadorDeTablaAleatoria() {
    let numerosAleatorios = crearNumerosAleatorios();
    for (let i = 0; i < 8; i++) {
        let box = document.getElementById(i);
        box.textContent = numerosAleatorios[i];
    }
}

function obtenerCajaVacia() {
    let cajaVacia = "";
    for (let i = 0; i < 9; i++) {
        let box = document.getElementById(i);
        if (box.textContent === "") {
            cajaVacia = i;
            break;
        }
    }
    return cajaVacia;
}

function chequearMovimientoValido(caja, cajaVacia) {
    if (caja === 0) {
        if (cajaVacia === 1 || cajaVacia === 3) {
            return true;
        }
    } else if (caja === 1) {
        if (cajaVacia === 0 || cajaVacia === 2 || cajaVacia === 4) {
            return true;
        }
    } else if (caja === 2) {
        if (cajaVacia === 1 || cajaVacia === 5) {
            return true;
        }
    } else if (caja === 3) {
        if (cajaVacia === 0 || cajaVacia === 4 || cajaVacia === 6) {
            return true;
        }
    } else if (caja === 4) {
        if (
            cajaVacia === 1 ||
            cajaVacia === 3 ||
            cajaVacia === 5 ||
            cajaVacia === 7
        ) {
            return true;
        }
    } else if (caja === 5) {
        if (cajaVacia === 2 || cajaVacia === 4 || cajaVacia === 8) {
            return true;
        }
    } else if (caja === 6) {
        if (cajaVacia === 3 || cajaVacia === 7) {
            return true;
        }
    } else if (caja === 7) {
        if (cajaVacia === 4 || cajaVacia === 6 || cajaVacia === 8) {
            return true;
        }
    } else if (caja === 8) {
        if (cajaVacia === 5 || cajaVacia === 7) {
            return true;
        }
    } else {
        return false;
    }
}

function moverNumero(id) {
    let box = document.getElementById(id);
    let cajaVacia = document.getElementById(obtenerCajaVacia());

    if (chequearMovimientoValido(id, obtenerCajaVacia())) {
        cajaVacia.textContent = box.textContent;
        box.textContent = "";
    }
}

creadorDeTablaAleatoria();
