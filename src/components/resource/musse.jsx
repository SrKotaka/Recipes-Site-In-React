import '../resource/acessos.css';
import minhaImagem from '../img/musse.jpg';
export default function musse() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Musse De Maracuja</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 lata de leite condensado</li>
          <li>1 lata de creme de leite</li>
          <li>1 lata de suco de maracujá (medida da <br></br>lata de creme de leite)</li>
          <li>1 pacote de gelatina sem sabor</li>
          <li>1/2 xícara de água</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Bata no liquidificador o leite condensado, o creme de leite e o suco de maracujá.
          Dissolva a gelatina na água e leve ao microondas por 30 segundos.
          Acrescente a gelatina dissolvida ao creme do liquidificador e bata por mais 2 minutos.
          Coloque em uma travessa e leve à geladeira por 2 horas.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}