

function getPriceAndDiscount() {
    const precioOriginal = parseFloat(prompt("Introduce el precio original del producto:"));
    const porcentajeDescuento = parseFloat(prompt("Introduce el porcentaje de descuento:"));
    return { precioOriginal, porcentajeDescuento };
}

function calculateDiscountedPrice(precioOriginal, porcentajeDescuento) {
    const descuento = (precioOriginal * porcentajeDescuento) / 100;
    const precioFinal = precioOriginal - descuento;
    return precioFinal;
}

function showFinalPrice(precioFinal) {
    alert(`Precio final con descuento es: ${precioFinal}`);
}

function calculofinal() {
    const { precioOriginal, porcentajeDescuento } = getPriceAndDiscount();

    if ((precioOriginal) && (porcentajeDescuento)) {
        const precioFinal = calculateDiscountedPrice(precioOriginal, porcentajeDescuento);
        showFinalPrice(precioFinal);
    } else {
        alert("Introduzca valores numéricos válidos.");
    }
}

calculofinal();
