import { fabOperador, obtenerRR, redondear } from './calculator';

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
      N: 5,
      R: 3,
      K1: 2.21,
      K2: 2.7,
      operadores: [operadorA, operadorB, operadorC],
    }).repetitibilidad * 100
  ).toEqual(167.66);
});

it('funciona reproducibilidad', () => {
  expect(
    obtenerRR({
      T: 2.9,
      N: 5,
      R: 3,
      K1: 2.21,
      K2: 2.7,
      operadores: [operadorA, operadorB, operadorC],
    }).reproducibilidad * 100
  ).toEqual(0);
});

it('funciona RR', () => {
  expect(
    redondear(
      obtenerRR({
        T: 2.9,
        N: 5,
        R: 3,
        K1: 2.21,
        K2: 2.7,
        operadores: [operadorA, operadorB, operadorC],
      }).RR * 100,
      2
    )
  ).toEqual(167.66);
});

//Ancho <-> Numero de equipos, Cada arreglo es un equipo
let operador2A = fabOperador([
  [570.7, 570.7, 570.7, 570.8, 570.8],
  [570.5, 570.6, 570.5, 570.6, 570.5],
  [570.7, 570.8, 570.7, 570.8, 570.7],
]);

let operador2B = fabOperador([
  [570.8, 570.7, 570.8, 570.8, 570.7],
  [570.6, 570.6, 570.6, 570.7, 570.7],
  [570.8, 570.8, 570.9, 570.8, 570.9],
]);

let operador2C = fabOperador([
  [570.7, 570.8, 570.8, 570.8, 570.8],
  [570.6, 570.7, 570.7, 570.6, 570.7],
  [570.8, 570.8, 570.9, 570.9, 570.8],
]);

it('funciona repetitibilidad', () => {
  expect(
    (obtenerRR({
      T: 11.7,
      N: 5,
      R: 3,
      K1: 2.21,
      K2: 2.7,
      operadores: [operador2A, operador2B, operador2C],
    }).repetitibilidad *
      10000) /
      100
  ).toEqual(1.89);
});

it('funciona reproducibilidad', () => {
  expect(
    redondear(
      obtenerRR({
        T: 11.7,
        N: 5,
        R: 3,
        K1: 2.21,
        K2: 2.7,
        operadores: [operador2A, operador2B, operador2C],
      }).reproducibilidad * 100,
      2
    )
  ).toEqual(2.02);
});

it('funciona RR', () => {
  expect(
    redondear(
      obtenerRR({
        T: 11.7,
        N: 5,
        R: 3,
        K1: 2.21,
        K2: 2.7,
        operadores: [operador2A, operador2B, operador2C],
      }).RR * 100,
      2
    )
  ).toEqual(2.77);
});

//Ancho <-> Numero de equipos, Cada arreglo es un equipo
let operador3A = fabOperador([
  [12, 42],
  [42, 12],
]);

let operador3B = fabOperador([
  [32, 45],
  [45, 32],
]);

it('funciona repetitibilidad', () => {
  expect(
    redondear(
      obtenerRR({
        T: 15,
        N: 2,
        R: 2,
        K1: 4.56,
        K2: 3.65,
        operadores: [operador3A, operador3B],
      }).RR * 100,
      2
    )
  ).toEqual(653.6);
});
