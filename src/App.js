import { useState } from 'react';
import { fabOperador, obtenerRR, redondear } from './logic/calculator';

export default function App() {
  //Data de las mediciones // 1 operador con 1 equipo con 1 medida
  let [datos, setDatos] = useState([[[0]]]);

  //Cuantos arreglos hay
  let [currentR, setCurrentR] = useState(1);
  //Longitud d
  let [currentEquipos, setCurrentEquipos] = useState(1);
  //Ensayos
  let [currentN, setCurrentN] = useState(1);

  let [currentT, setCurrentT] = useState(15);
  let [currentK1, setCurrentK1] = useState(2.21);
  let [currentK2, setCurrentK2] = useState(2.7);

  let [currentRR, setCurrentRR] = useState({
    RR: 0,
    repetitibilidad: 0,
    reproducibilidad: 0,
  });

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
      K1: currentK1,
      K2: currentK2,
      operadores,
    });

    setCurrentRR(newRR);
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
          <div className="rr-rating-title">Good enough.</div>
          <div className="rr-rating-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            fugit ratione modi, amet possimus atque. Dolorum commodi similique
            maiores quas unde dolores, quasi itaque et recusandae architecto
            totam voluptatem odit?
          </div>
        </div>
      </div>

      <div className="app-controls">
        <button className="btn btn-warning" onClick={addOperador}>
          Añadir operador
        </button>
        <button className="btn btn-warning" onClick={addEquipo}>
          Añadir equipo
        </button>
        <button className="btn btn-warning" onClick={addEnsayo}>
          Añadir ensayo
        </button>
        <button className="btn btn-success" onClick={calcularRR}>
          Calcular R&R
        </button>
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
