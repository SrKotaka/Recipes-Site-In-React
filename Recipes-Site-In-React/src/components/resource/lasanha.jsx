import '../resource/acessos.css';
import minhaImagem from '../img/lasanha.jpg';
export default function lasanha() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Lasanha de carne,presunto e quiejo</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 pacote de massa para lasanha</li>
          <li>500 g de presunto</li>
          <li>500 g de queijo mussarela</li>
          <li>500 g de carne moída</li>
          <li>1 massa de tomate pronta</li>
          <li>1 cebola</li>
          <li>2 dentes de alho</li>
          <li>1 caixa de creme de leite</li>
          <li>1 copo de requeijão</li>
          <li>1 pacote de queijo ralado</li>
          <li>Sal a gosto</li>
          <li>Azeite a gosto</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, coloque o azeite, a cebola, o alho e deixe dourar. Acrescente o molho de tomate, sal a gosto e deixe cozinhar por 5 minutos. Desligue o fogo e acrescente o creme de leite e reserve. Em um refratário grande, coloque um pouco do molho no fundo. Faça camadas na seguinte ordem: massa, presunto, queijo mussarela e carne moída. Vá repetindo as camadas até encher o refratário. Na última camada, termine com molho e acrescente o queijo ralado por cima. Leve ao forno por aproximadamente 20 minutos. Sirva quente.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}