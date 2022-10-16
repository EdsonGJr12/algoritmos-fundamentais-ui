// Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n

/**
 * para testar: isPrimo(5)
 */

function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (numeroAtual = 2; numeroAtual < numero; numeroAtual++) {
        if (numero % numeroAtual === 0) {
            return false;
        }
    }
    return true;
}


//Somatório: Soma de um conjunto de números.

/**
 * para testar: somar(1, 10, 13)
 */

function somar(...numeros) {
    return numeros.reduce((numeroAnterior, numeroAtual) => numeroAnterior + numeroAtual, 0);
}

//Fibonacci: onde N > 1. Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …. Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos
//let arrayFibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
let arrayFibonacci = [];
function aplicarFibonacci(...array) {
    const ultimosDoisTermos = array.slice(-2);
    const somatorioUltimosTermos = somar(...ultimosDoisTermos);
    array.push(somatorioUltimosTermos);
    return array;
}


//Máximo divisor comum: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.
function maximoDivisorComum(numero1, numero2) {
    let resto;

    do {
        resto = numero1 % numero2;

        numero1 = numero2;
        numero2 = resto;

    } while (resto != 0);

    return numero1;
}

//Ordenação: Ordenar um array usando o método Quicksort
// let arrayParaOrdenar = [5, 1, 4, 2, 3];
function quicksort(start, end) {
    if (start >= end) return;

    let pivot = partition(start, end);

    quicksort(start, pivot - 1);
    quicksort(pivot + 1, end);
}
function partition(start, end) {
    let i = start;

    for (var j = start; j < end; j++) {
        if (arrayParaOrdenar[j] <= arrayParaOrdenar[end]) {
            swap(i++, j);
        }
    }
    swap(i, end);

    return i;
}
function swap(i, j) {
    let k = arrayParaOrdenar[i];
    arrayParaOrdenar[i] = arrayParaOrdenar[j];
    arrayParaOrdenar[j] = k;
}


//Contagem: Dado um valor N, conte quantos valores inteiros existem entre 1 (inclusive) e N (inclusive).
let N = -20;
let arrayParaContagem = [1, 2, 5.5, -2, 10, -85];
function contar() {
    let quantidade = 0;
    for (const elemento of arrayParaContagem) {
        const parteDecimal = Math.trunc(elemento) - elemento;
        if (N > 0 && parteDecimal === 0 && elemento >= 1 && elemento <= N) {
            quantidade += 1;
        }

        if (N < 0 && parteDecimal === 0 && elemento <= 1 && elemento >= N) {
            quantidade += 1;
        }
    }

    return quantidade;
}