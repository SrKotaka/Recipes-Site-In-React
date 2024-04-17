import '../resource/acessos.css';
import minhaImagem from '../img/torta de morango.jpg';
export default function tortaDeMorango() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Torta de morango </h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 pacote de biscoito maisena</li>
          <li>1 lata de leite condensado</li>
          <li>1 lata de creme de leite</li>
          <li>1 lata de leite (a mesma medida da lata de leite condensado)</li>
          <li>1 lata de leite em pó (a mesma medida da lata de leite condensado)</li>
          <li>1 caixa de morangos</li>
          <li>1 xícara de leite</li>
          <li>1 colher de sopa de amido de milho</li>
          <li>1 colher de sopa de açúcar</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, coloque o leite condensado, o creme de leite, o leite e o leite em pó.
          Leve ao fogo baixo, mexendo sempre até engrossar.
          Em um refratário, coloque uma camada de biscoitos umedecidos no leite.
          Por cima, coloque uma camada de creme e uma camada de morangos picados.
          Repita as camadas até terminarem os ingredientes, finalizando com o creme.
          Leve à geladeira por 2 horas.
          Em uma panela, coloque o leite, o amido de milho e o açúcar.
          Leve ao fogo baixo, mexendo sempre até engrossar.
          Deixe esfriar e coloque por cima do pavê.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}