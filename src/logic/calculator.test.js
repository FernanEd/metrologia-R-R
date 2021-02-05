import { fabOperador, obtenerRR } from './calculator';

let operador1 = fabOperador([
  [35.8, 35.6, 30.4, 30.2, 31.1],
  [35.0, 35.1, 28.9, 29.9, 31.7],
]);

it('funciona promedios', () => {
  expect(operador1.obtenerPromedios()).toEqual([32.62, 32.12]);
});

it('funciona rangos', () => {
  expect(operador1.obtenerRangos()).toEqual([5.6, 6.2]);
});

let operador2 = fabOperador([
  [36.1, 35.3, 30.8, 29.8, 32],
  [36.3, 35, 30.6, 29.6, 31.7],
]);

it('funciona promedios', () => {
  expect(operador2.obtenerPromedios()).toEqual([32.8, 32.64]);
});

it('funciona rangos', () => {
  expect(operador2.obtenerRangos()).toEqual([6.3, 6.7]);
});

it('funciona repetitibilidad', () => {
  expect(
    obtenerRR({
      T: 15,
      N: 5,
      R: 2,
      K1: 2.21,
      K2: 3.65,
      operadores: [operador1, operador2],
    }).repetitibilidad
  ).toEqual(0.9135);
});

//Ancho <-> Numero de equipos, Cada arreglo es un equipo
let operadorA = fabOperador([
  [300.4, 305.6, 300.8, 306.1, 305.0],
  [300.1, 299.9, 300.0, 300.0, 299.9],
  [300.5, 300.4, 300.4, 300.5, 300.6],
]);

let operadorB = fabOperador([
  [306.6, 300.9, 304.5, 306.4, 300.1],
  [300.0, 300.1, 300.0, 299.9, 300.0],
  [300.4, 300.6, 300.4, 300.6, 300.5],
]);

let operadorC = fabOperador([
  [300.9, 305.4, 303.1, 300.6, 307.0],
  [300.1, 299.9, 300.0, 300.0, 300.1],
  [300.4, 300.5, 300.6, 300.5, 300.4],
]);

it('funciona promedios', () => {
  expect(operadorB.obtenerRangos()).toEqual([6.5, 0.2, 0.2]);
});

it('funciona repetitibilidad', () => {
  expect(
    obtenerRR({
      T: 2.9,
      N: 3,
      R: 3,
      K1: 2.21,
      K2: 2.7,
      operadores: [operadorA, operadorB, operadorC],
    }).repetitibilidad * 100
  ).toEqual(167.66);
});
