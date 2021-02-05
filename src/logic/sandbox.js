function factoryOperator(medidas) {
  let mediciones = [...medidas];

  const obtenerRangos = () =>
    mediciones.map((medicion) => {
      return (Math.max(...medicion) * 10 - Math.min(...medicion) * 10) / 100;
    });

  const obtenerPromedios = () =>
    mediciones.map(
      (medicion) => medicion.reduce((a, b) => a + b, 0) / medicion.length
    );

  return { obtenerPromedios, obtenerRangos };
}

let operador1 = factoryOperator([
  [35.8, 35.6, 30.4, 30.2, 31.1],
  [35.0, 35.1, 28.9, 29.9, 31.7],
]);

console.log(operador1.obtenerRangos());
