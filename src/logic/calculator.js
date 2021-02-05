function fabOperador(medidas) {
  let equipos = [...medidas];

  const objLiteral = () => equipos;

  const obtenerRangos = () =>
    equipos.map((medicion) => {
      return redondear(Math.max(...medicion) - Math.min(...medicion));
    });

  const obtenerPromedios = () => equipos.map((medicion) => promedio(medicion));

  return { objLiteral, obtenerPromedios, obtenerRangos };
}

function promedio(arreglo) {
  return arreglo.reduce((a, b) => a + b, 0) / arreglo.length;
}

function obtenerRR({ T, N, R, K1, K2, operadores }) {
  const RANGOS = promedio(
    operadores.map((operador) => promedio(operador.obtenerRangos()))
  );

  let promedios = operadores.map((operador) =>
    promedio(operador.obtenerPromedios())
  );

  const XD = redondear(Math.max(...promedios) - Math.min(...promedios), 2);

  const repetitibilidad = redondear((K1 * RANGOS) / T);

  const cocientes = (K2 * XD) ** 2 - (K1 * RANGOS) ** 2 / (N * R);

  const reproducibilidad = cocientes > 0 ? Math.sqrt(cocientes) / T : 0;

  const RR = Math.sqrt(repetitibilidad ** 2 + reproducibilidad ** 2);

  return { RR, repetitibilidad, reproducibilidad, x: promedios };
}

function redondear(n, decimales = 4) {
  return Math.round(n * 10 ** decimales) / 10 ** decimales;
}

export { fabOperador, obtenerRR, redondear };
