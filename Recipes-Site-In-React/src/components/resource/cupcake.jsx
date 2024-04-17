import '../resource/acessos.css';
import minhaImagem from '../img/cupcake.jpg';
export default function cupcake() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Cupcake</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara de farinha de trigo</li>
          <li>1 xícara de açúcar</li>
          <li>1/2 xícara de manteiga</li>
          <li>1/2 xícara de leite</li>
          <li>1 ovo</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>1 colher de chá de fermento<br></br> em pó</li>
          <li>1/2 colher de chá de sal</li>
          <li>1/2 xícara de açúcar</li>
          <li>1 colher de sopa de canela em pó</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela, misture a farinha de trigo, o açúcar, a manteiga, o leite, o ovo, a essência de baunilha, o fermento em pó e o sal.
          Coloque em uma forma untada e leve ao forno preaquecido a 180ºC por 40 minutos.
          Em uma tigela, misture o açúcar e a canela em pó.
          Desenforme e polvilhe a mistura de açúcar e canela em pó.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}