import '../resource/acessos.css';
import minhaImagem from '../img/pao de mel.jpg';
export default function paoDeMel() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Pão de mel</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara de mel</li>
          <li>1 xícara de açúcar mascavo</li>
          <li>1 xícara de leite</li>
          <li>1/2 xícara de manteiga</li>
          <li>1 colher de chá de essência <br></br>de baunilha</li>
          <li>1 colher de chá de canela em pó</li>
          <li>1 colher de chá de cravo em pó</li>
          <li>1 colher de chá de noz-moscada</li>
          <li>1 colher de chá de<br></br> bicarbonato de sódio</li>
          <li>1 colher de chá de fermento em pó</li>
          <li>1/2 colher de chá de sal</li>
          <li>2 xícaras de farinha de trigo</li>
          <li>1 xícara de chocolate meio amargo picado</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela, misture o mel, o açúcar mascavo, o leite, a manteiga, a essência de baunilha, a canela em pó, o cravo em pó, a noz-moscada, o bicarbonato de sódio, o fermento em pó e o sal.
          Acrescente a farinha de trigo e o chocolate meio amargo picado e misture bem.
          Coloque em uma forma untada e leve ao forno preaquecido a 180ºC por 20 minutos.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}