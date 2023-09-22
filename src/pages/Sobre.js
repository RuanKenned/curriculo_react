import eu from '../images/Eu.jpg';
import nuvem from '../images/nuvem.ico';
import pendrive from '../images/pendrive.ico';
import wifi from '../images/wifi.ico';
import ferramenta from '../images/ferramenta.ico';

function Sobre() {

  return (
    <div class="card" id="container">
      <div class="card-body">
        <h1 class="card-title">Sobre</h1>
        <div class="top-divider"></div>
        <div class="row content">

          <div class="col-3">
            <a href={eu} target="_blank" rel="noreferrer">
              <img src={eu} alt="Eu"/>
            </a>
          </div>

          <div class="about col-9">
            <h2>Meu nome é Ruan Kenned Martins Alves</h2>
            <p>Sou natural do Brasil, moro no estado de Minas Gerais, na região Sudeste.
              Nasci e resido na cidadde de Coronel Fabriciano, no centro do Vale do Aço.
              Cursei o ensino médio no CEFET-Timóteo, onde também fiz o curso técnico de Informática
              Indústrial. Atualmente curso o 10º período da Engenharia de Computação, também no CEFET-Timóteo.
            </p>

            <div class="row">
              <div class="col-3">
                <img src={nuvem} alt="Nuvem" />
              </div>

              <div class="col-3">
                <img src={pendrive} alt="pendrive" />
              </div>

              <div class="col-3">
                <img src={wifi} alt="wifi" />
              </div>

              <div class="col-3">
                <img src={ferramenta} alt="ferramenta" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sobre