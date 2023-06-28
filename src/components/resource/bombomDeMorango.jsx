import '../resource/acessos.css';
import minhaImagem from '../img/bombom de morango.jpg';
export default function bombomDeMorango() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Bombom de morango</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 lata de leite condensado</li>
          <li>1 colher (sopa) de manteiga</li>
          <li>1/2 xícara (chá) de leite</li>
          <li>1/2 xícara (chá) de leite em pó</li>
          <li>1 caixa de morangos limpos</li>
          <li>1 xícara (chá) de chocolate ao leite picado</li>
          <li>1/2 xícara (chá) de chocolate branco picado</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, coloque o leite condensado, a manteiga, o leite e o leite em pó e leve ao fogo médio, mexendo até engrossar e soltar do fundo da panela. Deixe esfriar e reserve.
          Pegue pequenas porções de massa, abra na palma da mão e recheie com um morango. Feche, modelando um bombom. Repita o procedimento até acabar a massa e os morangos.
          Derreta os chocolates em banho-maria ou no micro-ondas e banhe os bombons. Coloque sobre uma superfície forrada com papel-manteiga e leve à geladeira por 30 minutos. Sirva.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}