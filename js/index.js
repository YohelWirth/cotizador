let moneda1 = prompt("Desea comprar dólares, euros o reales?").toLowerCase();

if (moneda1 === "dolar" || moneda1 === "dolares" || moneda1 === "euro" || moneda1 === "euros" || moneda1 === "real" || moneda1 === "reales") {
    let cantidadVeces = parseInt(prompt("¿Cuántas veces desea cotizar " + moneda1 + "?"));

    if (!isNaN(cantidadVeces)) {
        for (let i = 1; i <= cantidadVeces; i++) {
            let cantidadMoneda = parseInt(prompt("Cuantos " + moneda1 + " desea comprar (cotización " + i + "):"));

            if (!isNaN(cantidadMoneda)) {
                let conversion;
                if (moneda1 === "dolar" || moneda1 === "dolares") {
                    conversion = cantidadMoneda * 41;
                } else if (moneda1 === "euro" || moneda1 === "euros") {
                    conversion = cantidadMoneda * 47;
                } else if (moneda1 === "real" || moneda1 === "reales") {
                    conversion = cantidadMoneda * 8;
                }
                alert(cantidadMoneda + " " + moneda1 + " serían UYU$" + conversion);
            } else {
                alert("Cantidad no válida en la cotización " + i);
            }
        }
    } else {
        alert("Cantidad de cotizaciones no válida");
    }
} else {
    alert(moneda1 + " no es una moneda válida");
}