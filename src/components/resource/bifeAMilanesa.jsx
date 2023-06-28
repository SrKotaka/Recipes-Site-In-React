import '../resource/acessos.css';
import minhaImagem from '../img/bife a milanesa.jpg';
export default function bifeAMilanesa() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Bife a milanesa</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 kg de coxão mole em bifes</li>
          <li>Sal e pimenta-do-reino a gosto</li>
          <li>2 dentes de alho amassados</li>
          <li>1 xícara (chá) de farinha de trigo</li>
          <li>2 ovos</li>
          <li>1 xícara (chá) de farinha de rosca</li>
          <li>Óleo para fritar</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Tempere os bifes com sal, pimenta e o alho. Passe pela farinha de trigo, pelos ovos batidos e pela farinha de rosca. Frite, aos poucos, em óleo quente até dourar. Escorra sobre papel absorvente e sirva.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}