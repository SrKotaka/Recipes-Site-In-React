import '../resource/acessos.css';
import minhaImagem from '../img/Bombom de banana.jpg';
export default function bombomDeBanana() {
  return (
    <div className="bodyReceitas">
      <div className="containerReceitas">
        <img className='imgReceitas' src={minhaImagem}></img>
        <h2 className='h2Receitas'>bombom de banana</h2>
        <h3 className='h3Receitas'>Ingredientes:</h3>
        <ul>
          <li>2 bananas maduras</li>
          <li>200g de chocolate meio amargo</li>
          <li>1 colher de sopa de manteiga sem sal</li>
          <li>1/4 xícara de açúcar</li>
          <li>1/4 xícara de água</li>
          <li>Palitos de churrasco ou pirulito</li>
        </ul>
        <h3 className='h3Receitas'>Instruções</h3>
        <p className='pReceitas'>
          Descasque as bananas e corte-as em rodelas com cerca de 1cm de espessura.
          Espete um palito de churrasco ou pirulito em cada rodela de banana e coloque-os em uma assadeira forrada com papel manteiga. Leve a assadeira ao congelador por cerca de 30 minutos.
          Enquanto isso, prepare a calda de açúcar: em uma panela pequena, misture o açúcar e a água e leve ao fogo médio-alto, mexendo ocasionalmente, até que o açúcar se dissolva. Reduza o fogo para médio e cozinhe a mistura até que ela atinja o ponto de fio (quando você pega um pouco da calda com uma colher e ela forma um fio quando você a levanta). Retire a panela do fogo e reserve.
          Derreta o chocolate e a manteiga em banho-maria ou no micro-ondas, mexendo ocasionalmente, até que fiquem completamente derretidos e homogêneos.
          Retire as bananas do congelador e mergulhe cada rodela no chocolate derretido, certificando-se de que elas estejam completamente cobertas. Coloque as bananas cobertas de chocolate de volta na assadeira forrada com papel manteiga e leve à geladeira por cerca de 10 minutos, ou até que o chocolate esteja firme.
          Finalize os bombons mergulhando cada banana no açúcar derretido, certificando-se de que elas estejam completamente cobertas. Coloque os bombons de volta na assadeira forrada com papel manteiga e leve à geladeira por mais alguns minutos, ou até que o açúcar esteja firme.
          Sirva os bombons de banana em temperatura ambiente. Eles podem ser armazenados na geladeira por até 3 dias.
        </p>
        <input type="button" value="Voltar" className="btnResource solid" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}