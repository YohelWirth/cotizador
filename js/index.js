function TipoMoneda() {
    let moneda = prompt("Desea comprar dólares, euros o reales?").toLowerCase();
    return moneda;
}

function CantidadVeces() {
    let cantidadVeces = parseInt(prompt("¿Cuántas veces desea cotizar " + moneda + "?"));
    return cantidadVeces;
}

function CantidadMoneda(cotizacion) {
    let cantidadMoneda = parseInt(prompt("Cuantos " + moneda + " desea comprar (cotización " + cotizacion + "):"));
    return cantidadMoneda;
}

function convertirMoneda(cantidad, tipoMoneda) {
    let conversion;
    switch (tipoMoneda) {
        case "dolar":
        case "dolares":
            conversion = cantidad * 41;
            break;
        case "euro":
        case "euros":
            conversion = cantidad * 47;
            break;
        case "real":
        case "reales":
            conversion = cantidad * 8;
            break;
        default:
            conversion = 0;
            break;
    }
    return conversion;
}

function mostrarResultado(cantidad, tipoMoneda, conversion) {
    alert(cantidad + " " + tipoMoneda + " serían UYU$" + conversion);
}

let moneda = obtenerTipoMoneda();

if (moneda === "dolar" || moneda === "dolares" || moneda === "euro" || moneda === "euros" || moneda === "real" || moneda === "reales") {
    let cantidadVeces = obtenerCantidadVeces();

    if (!isNaN(cantidadVeces)) {
        for (let i = 1; i <= cantidadVeces; i++) {
            let cantidadMoneda = obtenerCantidadMoneda(i);

            if (!isNaN(cantidadMoneda)) {
                let conversion = convertirMoneda(cantidadMoneda, moneda);
                mostrarResultado(cantidadMoneda, moneda, conversion);
            } else {
                alert("Cantidad no válida en la cotización " + i);
            }
        }
    } else {
        alert("Cantidad de cotizaciones no válida");
    }
} else {
    alert(moneda + " no es una moneda válida");
}