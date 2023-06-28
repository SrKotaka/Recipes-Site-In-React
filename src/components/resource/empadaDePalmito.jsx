import '../resource/acessos.css';
import minhaImagem from '../img/empadinha de palmito.jpg';
export default function empadaDePalmito() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Empada de palmito</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara (chá) de farinha de trigo</li>
          <li>1/2 xícara (chá) de manteiga</li>
          <li>1 gema</li>
          <li>1 colher (chá) de sal</li>
          <li>1 colher (sopa) de água gelada</li>
          <li>1 colher (sopa) de azeite</li>
          <li>1 cebola picada</li>
          <li>1 tomate picado</li>
          <li>1 vidro de palmito picado</li>
          <li>1/2 xícara (chá) de azeitona verde picada</li>
          <li>1/2 xícara (chá) de cheiro-verde picado</li>
          <li>Sal e pimenta-do-reino a gosto</li>
          <li>1 xícara (chá) de requeijão <br></br>cremoso</li>
          <li>1 gema para pincelar</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela, misture a farinha, a manteiga, a gema, o sal e a água até formar uma massa homogênea. Se necessário, adicione mais água. Embrulhe em filme plástico e leve à geladeira por 30 minutos.
          Em uma panela, em fogo médio, aqueça o azeite e refogue a cebola e o tomate por 3 minutos. Adicione o palmito, a azeitona, o cheiro-verde, sal, pimenta e refogue por 5 minutos. Desligue e misture o requeijão. Deixe esfriar.
          Abra a massa com um rolo e corte círculos com um cortador ou um copo. Forre forminhas de empada untadas com a massa, coloque o recheio e cubra com a massa restante. Pincele com a gema e leve ao forno médio, preaquecido, por 30 minutos ou até dourar. Sirva.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}