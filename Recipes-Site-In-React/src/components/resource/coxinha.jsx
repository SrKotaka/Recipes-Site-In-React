import '../resource/acessos.css';
import minhaImagem from '../img/coxinha.jpg';
export default function coxinha() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Coxinha</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 kg de peito de frango</li>
          <li>1/2 kg de batata</li>
          <li>1/2 kg de farinha de trigo</li>
          <li>1/2 litro de leite</li>
          <li>1/2 litro de água</li>
          <li>1 colher de sopa de margarina</li>
          <li>1 cebola picada</li>
          <li>1 dente de alho picado</li>
          <li>1/2 xícara de cheiro verde picado</li>
          <li>1/2 xícara de azeitonas picadas</li>
          <li>1/2 xícara de queijo parmesão ralado</li>
          <li>1/2 xícara de farinha de rosca</li>
          <li>1/2 xícara de óleo</li>
          <li>1 colher de chá de sal</li>
          <li>1 colher de chá de pimenta do reino</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, cozinhe o peito de frango com água e sal.
          Depois de cozido, desfie o frango e reserve.
          Em outra panela, cozinhe as batatas com água e sal.
          Depois de cozidas, amasse as batatas e reserve.
          Em uma panela, coloque o óleo, a cebola, o alho e refogue.
          Acrescente o frango desfiado, o cheiro verde, as azeitonas, o sal e a pimenta do reino.
          Misture bem e reserve.
          Em outra panela, coloque o leite, a água, a margarina e o sal.
          Quando ferver, acrescente a farinha de trigo e mexa até soltar do fundo da panela.
          Desligue o fogo e acrescente as batatas amassadas.
          Misture bem e deixe esfriar.
          Pegue uma porção da massa, abra na palma da mão e recheie com o frango.
          Feche a massa, dando o formato de coxinha.
          Passe as coxinhas na farinha de rosca e frite em óleo quente.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}