import "./main.css";
import icone from "../../assets/facebook 1.png";
export default function Main() {
  return (
    <main>
      <div className="text">
        <div className="page">
          <img src={icone} alt="icone do facebok" />
          <h1>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </h1>
        </div>
        <div className="access">
          <input type="email" placeholder="Email ou telefone" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
          <div className="link">
            <a href="">Esqueci a senha?</a>
          </div>
          <div id="line"></div>
          <div className="color">
            <button>Criar nova conta</button>
          </div>
          <div id="indent">
          <p>
            <a href="">Criar uma Página</a> para uma celebridade, uma marca ou
            uma empresa.
          </p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
