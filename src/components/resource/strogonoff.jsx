import '../resource/acessos.css';
import minhaImagem from '../img/strogonoff.jpg';
export default function Strogonoff() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Strogonoff de frango</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 kg de peito de frango sem pele</li>
          <li>1 cebola picada</li>
          <li>2 dentes de alho picados</li>
          <li>1/2 colher (sopa) de sal</li>
          <li>1/2 colher (sopa) de pimenta-do-reino</li>
          <li>1 colher (sopa) de mostarda</li>
          <li>1 colher (sopa) de ketchup</li>
          <li>1 colher (sopa) de molho inglês</li>
          <li>1 lata de creme de leite</li>
          <li>1 colher (sopa) de azeite</li>
          <li>1 colher (sopa) de manteiga</li>
          <li>1 xícara (chá) de champignon</li>
          <li>1/2 xícara (chá) de água</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, coloque o azeite e a manteiga e leve ao fogo médio. Quando a manteiga derreter, acrescente o frango e refogue até dourar.
          Adicione a cebola e o alho e refogue por mais 3 minutos. Acrescente o sal, a pimenta-do-reino, a mostarda, o ketchup, o molho inglês e o champignon e refogue por 5 minutos.
          Adicione a água e deixe cozinhar por 5 minutos. Desligue o fogo, acrescente o creme de leite e misture bem. Sirva em seguida.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}