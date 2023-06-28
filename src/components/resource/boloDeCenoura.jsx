import '../resource/acessos.css';
import minhaImagem from '../img/bolo de cenoura.jpg';
export default function boloDeCenoura() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Bolo De Cenoura</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>3 cenouras médias raspadas e picadas</li>
          <li>4 ovos</li>
          <li>1 xícara de óleo</li>
          <li>2 xícaras de açúcar</li>
          <li>2 e 1/2 xícaras de farinha de trigo</li>
          <li>1 colher de sopa de fermento em pó</li>
          <li>1 pitada de sal</li>
          <li>1 lata de leite condensado</li>
          <li>1 colher de sopa de manteiga</li>
          <li>3 colheres de sopa de chocolate em pó</li>
          <li>1 xícara de leite</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Bata no liquidificador as cenouras, os ovos e o óleo.
          Em uma tigela, misture o açúcar, a farinha de trigo, o fermento e o sal.
          Despeje a mistura do liquidificador e misture bem.
          Coloque em uma forma untada e enfarinhada.
          Asse em forno médio, pré-aquecido, por cerca de 40 minutos.
          Para a cobertura, misture o leite condensado, a manteiga e o chocolate.
          Leve ao fogo baixo, mexendo sempre até dar ponto de brigadeiro mole.
          Retire do fogo e misture o creme de leite.
          Cubra o bolo ainda quente.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}