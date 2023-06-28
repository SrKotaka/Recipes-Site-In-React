import '../resource/acessos.css';
import minhaImagem from '../img/cinnamon.jpg';
export default function cinnamon() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Cinnamon</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1/2 xícara de açúcar</li>
          <li>1 colher de sopa de canela em pó</li>
          <li>1/2 xícara de manteiga</li>
          <li>1 xícara de açúcar</li>
          <li>2 ovos</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>1 1/2 xícara de farinha de trigo</li>
          <li>1 colher de chá de fermento em pó</li>
          <li>1/2 colher de chá de sal</li>
          <li>1/2 xícara de leite</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela, misture o açúcar e a canela em pó.
          Em outra tigela, misture a manteiga e o açúcar.
          Acrescente os ovos e a essência de baunilha e misture bem.
          Acrescente a farinha de trigo, o fermento em pó, o sal e o leite e misture bem.
          Coloque em uma forma untada e leve ao forno preaquecido a 180ºC por 40 minutos.
          Desenforme e polvilhe a mistura de açúcar e canela em pó.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}