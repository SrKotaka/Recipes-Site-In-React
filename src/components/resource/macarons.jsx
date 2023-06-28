import '../resource/acessos.css';
import minhaImagem from '../img/macarons.jpg';
export default function macarons() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Macarons</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara de farinha de amêndoas</li>
          <li>1 1/2 xícara de açúcar de confeiteiro</li>
          <li>3 claras</li>
          <li>1/2 xícara de açúcar</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>1 colher de chá de corante alimentício</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela, misture a farinha de amêndoas e o açúcar de confeiteiro.
          Em outra tigela, bata as claras em neve e acrescente o açúcar, a essência de baunilha e o corante alimentício.
          Misture as duas tigelas delicadamente.
          Coloque em uma forma untada e leve ao forno preaquecido a 180ºC por 15 minutos.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}