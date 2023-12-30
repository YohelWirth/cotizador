const frm = document.querySelector("form");
const cambio = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    const moneda = frm.moneda.value;
    const costo = frm.importe.value;

    const tasasDeCambio = {
        'Dólares estadounidenses (USD)': { tasa: 40.5, nombre: 'Dólares estadounidenses' },
        'Euros (EUR)': { tasa: 47.3, nombre: 'Euros' },
        'Reales(R$)': { tasa: 9.2, nombre: 'Reales' }
    };


    if (moneda in tasasDeCambio) {
        const { tasa, nombre } = tasasDeCambio[moneda];
        const total = costo * tasa;
        cambio.innerText = `En total serían $${total.toFixed(2)} uruguayos en ${nombre}`;
    } else {
        cambio.innerText = "Moneda no válida";
    }

    e.preventDefault();
});