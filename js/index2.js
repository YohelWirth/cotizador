const frm = document.querySelector("form")
const cambio = document.querySelector("h2")
frm.addEventListener("submit", (e) => {


    const moneda = frm.moneda.value
    const costo = frm.importe.value

    const tasaBRL = 9.2;  // Reales
    const tasaUSD = 40.5;  // Dólares estadounidenses
    const tasaEUR = 47.3; // Euros

    switch (moneda) {
        case 'Dólares estadounidenses (USD)':
            total = costo * tasaUSD;
            break;
        case 'Euros (EUR)':
            total = costo * tasaEUR;
            break;
        case 'Reales(R$)':
            total = costo * tasaBRL;
            break;
        default:
            total = 0;
    }

    let resultado = total
    cambio.innerText = "En total seria $" + resultado + " uruguayos"

    e.preventDefault()
})
