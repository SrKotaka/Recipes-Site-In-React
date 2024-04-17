import '../resource/acessos.css';
import minhaImagem from '../img/macarrao.jpg';
export default function macarrao() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Macarrão</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 pacote de macarrão</li>
          <li>1 lata de molho de tomate</li>
          <li>1 lata de creme de leite</li>
          <li>1 lata de milho verde</li>
          <li>1 lata de ervilha</li>
          <li>1 lata de seleta de legumes</li>
          <li>1 lata de atum</li>
          <li>1 lata de sardinha</li>
          <li>1 lata de palmito</li>
          <li>1 lata de azeitona</li>
          <li>1 lata de molho de tomate</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Cozinhe o macarrão e reserve. Em uma panela, coloque o molho de tomate, o creme de leite, o milho verde, a ervilha, a seleta de legumes, o atum, a sardinha, o palmito e a azeitona. Deixe ferver por 5 minutos. Em um refratário, coloque o macarrão por cima do molho. Sirva quente.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}