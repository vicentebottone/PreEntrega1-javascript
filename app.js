let aviso = prompt("¿Es usted mayor de 18 años?");

if (aviso.toLowerCase() === "si") {
  let promociones = [
    { nombre: "Fernet con Coca y hielo", precio: 3200 },
    { nombre: "Gin con Tónica y hielo", precio: 3500 },
    { nombre: "Vodka con jugo y hielo", precio: 2000 }
  ];

  let totalCompra = 0;
  let seguirComprando = false;

  do {
    let mensaje = "Promociones en descuento:\n\n";

    promociones.forEach((promocion, index) => {
      mensaje += `${index + 1}. ${promocion.nombre}: $${promocion.precio}\n`;
    });

    alert(mensaje);

    let opcion = parseInt(prompt("Seleccione el número de la promoción que desea:"));

    let seleccion = promociones.find((promocion, index) => index + 1 === opcion);

    if (seleccion) {
      totalCompra += seleccion.precio;
      alert(`Usted ha seleccionado la promoción: ${seleccion.nombre}`);
    } else {
      console.log("Opción inválida. No puede ingresar. Lo sentimos.");
    }

    let respuesta = prompt("¿Desea comprar algo más? (si/no)");
    seguirComprando = respuesta.toLowerCase() === "si";
  } while (seguirComprando);

  alert(`El total de su compra es: $${totalCompra}`);
  alert("¡Gracias por comprar en el bar de Vicente!");
} else {
  alert("No puede ingresar. Lo sentimos.");
}

