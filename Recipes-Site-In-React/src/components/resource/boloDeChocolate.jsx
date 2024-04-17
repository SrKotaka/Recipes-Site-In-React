import '../resource/acessos.css';
import minhaImagem from '../img/bolo de chocolate.jpg';
export default function boloDeChocolate() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Bolo De Chocolate</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>3 ovos</li>
          <li>1 xícara de leite</li>
          <li>1/2 xícara de óleo</li>
          <li>2 xícaras de açúcar</li>
          <li>2 xícaras de farinha de trigo</li>
          <li>1 xícara de chocolate em pó</li>
          <li>1 colher de sopa de fermento em pó</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Bata no liquidificador os ovos, o leite, o óleo e o açúcar.
          Em uma tigela, misture a farinha de trigo, o chocolate em pó e o fermento.
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