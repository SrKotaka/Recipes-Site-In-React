import '../resource/acessos.css';
import minhaImagem from '../img/arroz.jpg';
export default function Arroz() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Arroz</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>1 xícara (chá) de arroz</li>
          <li>1 colher (sopa) de óleo</li>
          <li>1 dente de alho picado</li>
          <li>1/2 cebola picada</li>
          <li>1/2 colher (chá) de sal</li>
          <li>2 xícaras (chá) de água fervente</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma panela, coloque o óleo, o alho e a cebola e leve ao fogo médio até dourar.
          Acrescente o arroz e refogue por 1 minuto. Adicione a água fervente e o sal, abaixe o fogo e deixe cozinhar com a panela semitampada até secar a água.
          Desligue o fogo, tampe a panela e deixe o arroz terminar de cozinhar no próprio vapor por 5 minutos.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}