import '../resource/acessos.css';
import minhaImagem from '../img/pizza.jpg';
export default function Pizza() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>pizza</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>500g de farinha de trigo</li>
          <li>10g de fermento biológico seco</li>
          <li>1 colher de sopa de açúcar</li>
          <li>1 colher de sopa de sal</li>
          <li>1 e 1/2 xícaras de água morna</li>
          <li>1/4 xícara de azeite de oliva</li>
          <li>1 xícara de molho de tomate</li>
          <li>250g de queijo muçarela ralado</li>
          <li>1/2 xícara de presunto picado</li>
          <li>1/2 xícara de tomate cereja cortado ao meio</li>
          <li>1/4 xícara de azeitonas pretas fatiadas</li>
          <li>Orégano a gosto</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Em uma tigela grande, misture a farinha, o fermento, o açúcar e o sal.
          Adicione a água morna e o azeite de oliva e misture até formar uma massa homogênea.
          Sove a massa por cerca de 10 minutos, ou até que ela fique lisa e elástica.
          Cubra a tigela com um pano de prato úmido e deixe a massa descansar em um local quente por cerca de 1 hora, ou até que ela dobre de tamanho.
          Preaqueça o forno a 230°C.
          Divida a massa em duas partes iguais e abra cada uma delas em uma superfície enfarinhada, formando discos de cerca de 30cm de diâmetro.
          Coloque os discos de massa em assadeiras untadas e faça furos na superfície com um garfo.
          Asse as massas no forno preaquecido por cerca de 10 minutos, ou até que estejam firmes e ligeiramente douradas.
          Espalhe o molho de tomate sobre as massas assadas, deixando uma borda livre de cerca de 1cm.
          Distribua o queijo muçarela ralado sobre o molho.
          Adicione o presunto, os tomates cereja e as azeitonas fatiadas sobre o queijo.
          Salpique orégano a gosto sobre a pizza.
          Leve as pizzas de volta ao forno preaquecido e asse por mais 10-15 minutos, ou até que o queijo esteja derretido e borbulhando.
          Retire as pizzas do forno, deixe-as descansar por alguns minutos e sirva quente.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}