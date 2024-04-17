import '../resource/acessos.css';
import minhaImagem from '../img/pudim.jpg';
export default function pudim() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Pudim </h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 lata de leite <br></br>condensado</li>
          <li>1 lata de leite (medida da lata de leite condensado)</li>
          <li>3 ovos inteiros</li>
          <li>1 xícara de chá de açúcar para a calda</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Primeiro, bata bem os ovos no liquidificador.
          Acrescente o leite condensado e o leite, e bata novamente.
          Coloque o açúcar na forma e leve ao fogo para derreter.
          Quando estiver bem dourado, coloque a mistura do liquidificador na forma.
          Asse em banho-maria, por cerca de 1 hora e 30 minutos.
          Depois de assado, espere esfriar e desenforme.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}