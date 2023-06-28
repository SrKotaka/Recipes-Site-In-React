import '../resource/acessos.css';
import minhaImagem from '../img/bolo de morango.jpg';
export default function boloDeMorango() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>Bolo De Morango</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>2 xícaras de farinha de trigo</li>
          <li>2 colheres de chá de fermento em pó</li>
          <li>1/2 colher de chá de sal</li>
          <li>1 xícara de açúcar</li>
          <li>1/2 xícara de manteiga sem sal, em temperatura ambiente</li>
          <li>2 ovos grandes</li>
          <li>1/2 xícara de leite</li>
          <li>1 colher de chá de extrato de baunilha</li>
          <li>1 xícara de morangos picados</li>
          <li>1/2 xícara de morangos picados</li>
          <li>1/4 xícara de açúcar</li>
          <li>1 colher de sopa de suco de limão fresco</li>
          <li>1 colher de chá de amido de milho</li>
          <li>1/4 xícara de água</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Pré-aqueça o forno a 180°C. Unte uma forma de bolo com manteiga e farinha de trigo, ou use um spray antiaderente.
          Em uma tigela grande, misture a farinha de trigo, o fermento em pó e o sal.
          Em outra tigela grande, bata o açúcar e a manteiga até obter um creme claro e fofo. Adicione os ovos, um de cada vez, batendo bem após cada adição.
          Adicione a mistura de farinha à mistura de açúcar, alternando com o leite, em três adições, começando e terminando com a mistura de farinha. Adicione o extrato de baunilha e os morangos picados, misturando delicadamente.
          Despeje a massa na forma preparada e asse por cerca de 30-35 minutos, ou até que um palito inserido no centro do bolo saia limpo.
          Enquanto o bolo estiver assando, prepare a cobertura: em uma panela pequena, misture os morangos, o açúcar, o suco de limão, o amido de milho e a água. Leve a mistura para ferver, mexendo constantemente, até que a mistura engrosse. Retire do fogo e deixe esfriar.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}