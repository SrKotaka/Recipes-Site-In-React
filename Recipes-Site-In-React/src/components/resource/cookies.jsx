import '../resource/acessos.css';
import minhaImagem from '../img/cookies.jpg';
export default function cookies() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Cookies</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1/2 xícara de açúcar</li>
          <li>1/2 xícara de açúcar mascavo</li>
          <li>1/2 xícara de manteiga</li>
          <li>1 ovo</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>1 1/2 xícara de farinha de trigo</li>
          <li>1 colher de chá de fermento em pó</li>
          <li>1/2 colher de chá de sal</li>
          <li>1 xícara de chocolate meio amargo picado</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela, misture o açúcar, o açúcar mascavo e a manteiga.
          Acrescente o ovo e a essência de baunilha e misture bem.
          Acrescente a farinha de trigo, o fermento em pó, o sal e o chocolate meio amargo picado e misture bem.
          Coloque em uma forma untada e leve ao forno preaquecido a 180ºC por 20 minutos.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}