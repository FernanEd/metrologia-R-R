function fabOperador(medidas) {
  let equipos = [...medidas];

  const obtenerRangos = () =>
    equipos.map((medicion) => {
      return redondear(Math.max(...medicion) - Math.min(...medicion));
    });

  const obtenerPromedios = () => equipos.map((medicion) => promedio(medicion));

  return { obtenerPromedios, obtenerRangos };
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

  const XD = redondear(Math.max(...promedios) - Math.min(...promedios));

  const repetitibilidad = redondear((K1 * RANGOS) / T);

  const reproducibilidad = (K2 * XD) ** 2 - (K1 * RANGOS) ** 2 / (N * R);

  return { repetitibilidad, reproducibilidad };
}

function redondear(n) {
  return Math.round(n * 10000) / 10000;
}

export { fabOperador, obtenerRR };
