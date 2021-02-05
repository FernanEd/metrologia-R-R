import { useState } from 'react';
import { fabOperador, obtenerRR, redondear } from './logic/calculator';

export default function App() {
  //Data de las mediciones // 1 operador con 1 equipo con 1 medida
  let [datos, setDatos] = useState([[[0, 0]], [[0, 0]]]);
  //Cuantos operadores hay
  let [currentR, setCurrentR] = useState(2);

  //Cuantos equipos hay
  let [currentEquipos, setCurrentEquipos] = useState(1);

  //Cuantos ensayos hay
  let [currentN, setCurrentN] = useState(2);

  let [currentT, setCurrentT] = useState(1);

  let [currentRR, setCurrentRR] = useState({
    RR: 0,
    repetitibilidad: 0,
    reproducibilidad: 0,
  });

  let [isCalculated, setIsCalculated] = useState(false);

  function addOperador() {
    let newR = currentR;
    setCurrentR(newR + 1);

    //Añadiendo un equipo default
    let newDatos = datos;
    let newOperador = [];

    for (let i of Array(currentEquipos)) {
      let newEquipo = [];
      for (let i of Array(currentN)) {
        newEquipo.push(0);
      }
      newOperador.push(newEquipo);
    }

    newDatos.push(newOperador);
    setDatos(newDatos);
  }

  function addEquipo() {
    let newEquipos = currentEquipos;
    setCurrentEquipos(newEquipos + 1);

    //Añadiendo un espacio para medida default
    let newDatos = datos;
    newDatos.forEach((equipo) => equipo.push([0]));
    setDatos(newDatos);
  }

  function addEnsayo(operador) {
    let newN = currentN;
    setCurrentN(newN + 1);

    //Añadiendo una medida default
    let newDatos = datos;
    newDatos.forEach((equipo) => equipo.forEach((medida) => medida.push(0)));
    setDatos(newDatos);
  }

  function handleInput(valor, operador, equipo, medida) {
    let newDatos = datos;
    newDatos[operador][equipo][medida] = Number(valor);
    setDatos(newDatos);

    console.log(datos);
  }

  function calcularRR() {
    let operadores = datos.map((medidas) => fabOperador(medidas));

    let newRR = obtenerRR({
      T: currentT,
      N: currentN,
      R: currentR,
      K1: obtenerK1(),
      K2: obtenerK2(),
      operadores,
    });

    setCurrentRR(newRR);
    setIsCalculated(true);
  }

  function obtenerK1() {
    switch (currentN) {
      case 5:
        return 2.21;
      case 4:
        return 2.5;
      case 3:
        return 3.05;
      case 2:
        return 4.56;
    }
  }

  function obtenerK2() {
    switch (currentR) {
      case 5:
        return 2.08;
      case 4:
        return 2.3;
      case 3:
        return 2.7;
      case 2:
        return 3.65;
    }
  }

  return (
    <div>
      <div className="app-resultados">
        <div className="resultados-wrapper">
          <div className="resultado">
            <div className="resultado-label">RR</div>
            <div className="resultado-content">
              {currentRR.RR != undefined &&
                `${redondear(currentRR.RR * 100, 2)}%`}
            </div>
          </div>
          <div className="resultado">
            <div className="resultado-label">Repetitibilidad</div>
            <div className="resultado-content">
              {currentRR.RR != undefined &&
                `${redondear(currentRR.repetitibilidad * 100, 2)}%`}
            </div>
          </div>
          <div className="resultado">
            <div className="resultado-label">Reproducibilidad</div>
            <div className="resultado-content">
              {currentRR.RR != undefined &&
                `${redondear(currentRR.reproducibilidad * 100, 2)}%`}
            </div>
          </div>
        </div>
        <div className="rr-rating">
          <div className="rr-rating-title"></div>
          <div className="rr-rating-desc">
            {isCalculated && currentRR.RR * 100 < 10
              ? 'El sistema de medición es aceptable.'
              : currentRR.RR * 100 >= 10 && currentRR.RR * 100 < 30
              ? 'El sistema de medición es aceptable según su uso, aplicación o costo del instrumento de medición.'
              : currentRR.RR * 100 >= 30
              ? 'El sistema de medicion no es aceptable.'
              : 'Resultados.'}
          </div>
        </div>
      </div>
      <div className="app-controls">
        <div className="app-controls-inputs">
          <div className="control-input">
            <label htmlFor="">Tolerancia</label>
            <input onChange={(e) => setCurrentT(e.target.value)} />
          </div>
        </div>
        <div className="app-controls-buttons">
          <button
            className="btn btn-warning"
            onClick={currentR < 5 ? addOperador : null}
          >
            Añadir operador
          </button>
          <button className="btn btn-warning" onClick={addEquipo}>
            Añadir equipo
          </button>
          <button
            className="btn btn-warning"
            onClick={currentN < 5 ? addEnsayo : null}
          >
            Añadir ensayo
          </button>
          <button className="btn btn-success" onClick={calcularRR}>
            Calcular R&R
          </button>
        </div>
      </div>

      <div className="app-content">
        <table className="main-table">
          <tbody>
            <tr>
              <td className="equipo-td"></td>
              {[...Array(currentEquipos)].map((equipo, i) => (
                <td className="equipo-td" key={i}>
                  <div>Equipo {i + 1}</div>
                </td>
              ))}
            </tr>

            {[...Array(currentR)].map((operador, operadorIndx) => (
              <tr className="operador-tr" key={operadorIndx}>
                <td className="operador-td">
                  <div>Operador {operadorIndx + 1}</div>
                </td>

                {[...Array(currentEquipos)].map((equipo, i) => (
                  <td className="medidas-td" key={i}>
                    <div className="medidas-container">
                      {[...Array(currentN)].map((medida, j) => (
                        <td key={j}>
                          <input
                            onChange={(e) =>
                              handleInput(e.target.value, operadorIndx, i, j)
                            }
                          />
                        </td>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*
      <div className="operador-wrapper">
        <div className="operador-equipos">
          {[...Array(currentEquipos)].map((equipo, i) => {
            return (
              <div className="operador-equipo" key={i}>
                <div className="operador-equipo-title">Equipo {i + 1}</div>
              </div>
            );
          })}
        </div>

        {[...Array(currentR)].map((operador, operadorIndx) => {
          return (
            <div className="operador-card" key={operadorIndx}>
              <div className="operador-title">Operador {operadorIndx + 1}</div>

              {[...Array(currentEquipos)].map((equipo, i) => {
                return (
                  <div className="operador-medidas" key={i}>
                    {[...Array(currentN)].map((medida, j) => {
                      return (
                        <div key={j}>
                          <input
                            onChange={(e) =>
                              handleInput(e.target.value, operadorIndx, i, j)
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      */}
    </div>
  );
}