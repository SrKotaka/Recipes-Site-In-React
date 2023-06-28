import '../resource/acessos.css';
import minhaImagem from '../img/bife acebolado.jpg';
export default function bifeAcebolado() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Bife Acebolado</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 kg de bife de alcatra</li>
          <li>1 colher (sopa) de sal</li>
          <li>1 colher (sopa) de alho picado</li>
          <li>1 colher (sopa) de pimenta-do-reino</li>
          <li>1 colher (sopa) de óleo</li>
          <li>2 cebolas grandes cortadas em rodelas</li>
          <li>1/2 xícara (chá) de água</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Tempere os bifes com o sal, o alho e a pimenta-do-reino. Em uma frigideira grande, aqueça o óleo e frite os bifes até dourarem. Retire os bifes e reserve. Na mesma frigideira, frite as cebolas até dourarem. Junte a água e deixe ferver por 3 minutos. Coloque os bifes reservados e deixe cozinhar por 5 minutos. Sirva em seguida.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}