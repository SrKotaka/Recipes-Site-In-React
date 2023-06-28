import '../resource/acessos.css';
import minhaImagem from '../img/donuts.jpg';
export default function donuts() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Donuts</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara de leite</li>
          <li>1/4 xícara de açúcar</li>
          <li>1 colher de sopa de fermento biológico seco</li>
          <li>1/2 colher de chá de sal</li>
          <li>1/4 xícara de manteiga</li>
          <li>1 ovo</li>
          <li>3 1/2 xícaras de farinha de trigo</li>
          <li>1/2 xícara de açúcar</li>
          <li>1 colher de sopa de canela em pó</li>
          <li>1/2 xícara de manteiga</li>
          <li>1/2 xícara de açúcar</li>
          <li>1 colher de sopa de leite</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>corante alimentício rosa</li>
          <li>granulado colorido</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, misture o leite, o açúcar, o fermento biológico seco, o sal e a manteiga.
          Em uma tigela, misture o ovo e a farinha de trigo.
          Acrescente a mistura de leite e misture bem.
          Cubra com um pano e deixe descansar por 1 hora.
          Em uma superfície enfarinhada, sove a massa.
          Abra a massa com um rolo e corte com um cortador de donuts.
          Coloque em uma forma untada e deixe descansar por 1 hora.
          Em uma panela, misture o açúcar e a canela em pó.
          Frite os donuts em óleo quente.
          Passe os donuts na mistura de açúcar e canela em pó.
          Em uma tigela, misture a manteiga, o açúcar, o leite, a essência de baunilha e o corante alimentício rosa.
          Coloque em um saco de confeitar e recheie os donuts.
          Decore com granulado colorido.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}