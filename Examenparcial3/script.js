document.getElementById("formularioPropina").addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Obtener los valores del formulario
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const porcentajePropina = parseFloat(document.getElementById("porcentajePropina").value);

    // Validar que los valores sean positivos
    if (isNaN(subtotal) || subtotal <= 0 || isNaN(porcentajePropina) || porcentajePropina <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcular la propina
    const montoPropina = (subtotal * porcentajePropina) / 100;

    // Calcular el total a pagar
    const montoTotal = subtotal + montoPropina;

    // Mostrar los resultados
    document.getElementById("montoPropina").textContent = `$${montoPropina.toFixed(2)}`;
    document.getElementById("montoTotal").textContent = `$${montoTotal.toFixed(2)}`;
});
