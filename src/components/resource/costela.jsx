import '../resource/acessos.css';
import minhaImagem from '../img/costela.jpg';
export default function costela() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Costela</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>2 kg de costela de porco</li>
          <li>2 colheres de sopa de açúcar mascavo</li>
          <li>2 colheres de sopa de páprica defumada</li>
          <li>1 colher de sopa de alho em pó</li>
          <li>1 colher de sopa de cebola em pó</li>
          <li>1 colher de sopa de sal</li>
          <li>1 colher de chá de pimenta-do-reino</li>
          <li>1 xícara de molho de tomate</li>
          <li>1/2 xícara de vinagre de maçã</li>
          <li>1/4 xícara de mel</li>
          <li>2 colheres de sopa de molho Worcestershire</li>
          <li>1 colher de sopa de mostarda Dijon</li>
          <li>1/2 colher de chá de fumaça líquida (opcional)</li>
          <li>1/2 xícara de água</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela pequena, misture o açúcar mascavo, a páprica defumada, o alho em pó, a cebola em pó, o sal e a pimenta-do-reino.
          Tempere as costelas com a mistura de temperos, esfregando bem em toda a carne.
          Coloque as costelas em uma assadeira grande, cubra com papel alumínio e leve ao forno preaquecido a 150°C por cerca de 3 horas, ou até que estejam macias.
          Enquanto as costelas assam, prepare o molho barbecue: em uma panela média, misture o molho de tomate, o vinagre de maçã, o mel, o molho Worcestershire, a mostarda Dijon, a fumaça líquida (se estiver usando) e a água. Leve a mistura para ferver, mexendo ocasionalmente, e deixe cozinhar por cerca de 10 minutos, ou até que o molho esteja levemente espesso.
          Quando as costelas estiverem macias, retire-as do forno e aumente a temperatura para 220°C.
          Pincele as costelas com o molho barbecue e leve-as de volta ao forno por mais 10-15 minutos
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}