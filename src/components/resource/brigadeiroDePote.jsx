import '../resource/acessos.css';
import minhaImagem from '../img/brigadeiro de pote.jpg';
export default function brigadeiroDePote() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Brigadeiro De Pote</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 lata de leite condensado</li>
          <li>1 colher de sopa de manteiga</li>
          <li>1/2 xícara de chocolate em pó</li>
          <li>1 caixinha de creme de leite</li>
          <li>1/2 xícara de chocolate granulado</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, coloque o leite condensado, a manteiga e o chocolate em pó.
          Leve ao fogo baixo, mexendo sempre até desgrudar do fundo da panela.
          Desligue o fogo, acrescente o creme de leite e misture bem.
          Coloque em um pote de vidro e decore com o chocolate granulado.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}