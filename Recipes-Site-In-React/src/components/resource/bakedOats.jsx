import '../resource/acessos.css';
import minhaImagem from '../img/baked oats.jpg';
export default function bakedOats() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Baked Oats</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara de aveia em flocos</li>
          <li>1/2 xícara de leite</li>
          <li>1 ovo</li>
          <li>1 colher de sopa de açúcar mascavo</li>
          <li>1 colher de chá de fermento em pó (peneirado)</li>
          <li>1 colher de chá de canela em pó</li>
          <li>1 colher de chá de essência de baunilha</li>
          <li>1 banana</li>
          <li>1 colher de sopa de pasta de amendoim</li>
          <li>1 colher de sopa de chocolate 70% cacau</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em um recipiente, misture a aveia, o leite, o ovo, o açúcar mascavo, o fermento, a canela e a essência de baunilha.<br></br>
          Corte a banana em rodelas e adicione à mistura.<br></br>
          Coloque a mistura em uma forma pequena e leve ao forno pré-aquecido a 180ºC por 20 minutos.<br></br>
          Retire do forno e adicione a pasta de amendoim e o chocolate 70% cacau.<br></br>
          Sirva em seguida.<br></br>
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}