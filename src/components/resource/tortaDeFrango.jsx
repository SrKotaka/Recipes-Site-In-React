import '../resource/acessos.css';
import minhaImagem from '../img/torta de frango.jpg';
export default function tortaDeFrango() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Torta De Frango</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara de leite</li>
          <li>1/2 xícara de óleo</li>
          <li>2 xícaras de farinha de trigo</li>
          <li>1 colher de sopa de fermento em pó</li>
          <li>1 colher de chá de sal</li>
          <li>3 ovos</li>
          <li>1 peito de frango cozido e desfiado</li>
          <li>1 lata de milho verde</li>
          <li>1 lata de ervilha</li>
          <li>1 lata de molho de tomate</li>
          <li>1 cebola picada</li>
          <li>1 tomate picado</li>
          <li>1/2 xícara de azeitonas picadas</li>
          <li>1/2 xícara de cheiro verde picado</li>
          <li>1 copo de requeijão</li>
          <li>1 xícara de queijo mussarela ralado</li>
          <li>1/2 xícara de queijo parmesão ralado</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Bata no liquidificador o leite, o óleo, a farinha de trigo, o fermento em pó, o sal e os ovos.
          Em uma tigela, misture o frango, o milho, a ervilha, o molho de tomate, a cebola, o tomate, as azeitonas e o cheiro verde.
          Em uma forma untada e enfarinhada, coloque metade da massa, o recheio e o requeijão.
          Cubra com o restante da massa e polvilhe com os queijos ralados.
          Leve ao forno médio, pré-aquecido, por cerca de 40 minutos.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}