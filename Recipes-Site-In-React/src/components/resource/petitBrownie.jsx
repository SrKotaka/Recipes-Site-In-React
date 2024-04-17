import '../resource/acessos.css';
import minhaImagem from '../img/petit brownie.jpg';
export default function petitBrownie() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Petit de brownie</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>200 g de manteiga</li>
          <li>200 g de chocolate meio amargo</li>
          <li>1 xícara de açúcar</li>
          <li>1 xícara de farinha de trigo</li>
          <li>3 ovos</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>1 pitada de sal</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, derreta a manteiga e o chocolate.
          Em uma tigela, misture o açúcar, a farinha, os ovos, a essência de baunilha e o sal.
          Acrescente o chocolate derretido e misture bem.
          Coloque em uma forma untada e leve ao forno preaquecido a 180ºC por 20 minutos.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}