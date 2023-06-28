import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import minhaImagem from '../img/Nossa Cozinha.png';
import './home.css';


export default function Home(props) {


    const [cards] = useState([
        {
            title: 'Pudim',
            text: 'Depois de um longo dia, você não quer passar horas na cozinha fazendo pudim, mas ainda quer saborear algo delicioso e caseiro',
            path: '/pudim'
        },
        {
            title: 'Musse',
            text: 'Você quer impressionar sua família e amigos com uma deliciosa sobremesa, mas sem os ingredientes e o preparo certos, não há como fazer isso acontecer.',
            path: '/musse'
        },
        {
            title: 'Bolo De Cenoura',
            text: 'Experimente Bolo de Cenoura! É úmido, saboroso e, o mais importante, incrivelmente fácil de fazer',
            path: '/boloDeCenoura'
        },
        {
            title: 'Bolo De Chocolate',
            text: 'Satisfaça seus desejos por doces com um bolo de chocolate úmido e fofo. A nossa receita é feita a partir do zero, usando apenas os melhores ingredientes.',
            path: '/boloDeChocolate'
        },
        {
            title: 'Torta De Frango',
            text: 'Traga a alegria da comida caseira para sua mesa com uma deliciosa torta de frango! Desfrute de todas as delíciasdeste prato clássico sem ter de passar horas na cozinha.',
            path: '/tortaDeFrango'
        },
        {
            title: 'Coxinha',
            text: 'Delicie-se com o sabor único da coxinha! Das complexas combinações de sabores à sua textura quente e reconfortante, certamente satisfará seus desejos.',
            path: '/coxinha'
        },
        {
            title: 'Arroz',
            text: 'Experimente nossa receita infalível de aroz! Nossas instruções simples e dicas importantes ajudarão você a obter a textura e o sabor perfeitos sempre.',
            path: '/arroz'
        },
        {
            title: 'Baked Oats',
            text: 'Se você está procurando um café da manhã nutritivo e delicioso, você precisa experimentar a minha receita de baked oats!',
            path: '/bakedOats'
        },
        {
            title: 'Bolo De Morango',
            text: 'Não precisa se preocupar! Nossa receita de bolo de colher de morango torna todo o processo rápido, fácil e sem estresse e de dar agua na boca!',
            path: '/boloDeMorango'
        },
        {
            title: 'Brigadeiro De Pote',
            text: 'Apresentamos nossa receita fácil e prática de brigadeiro de colher! Com nossas instruções simples e passo a passo, você pode preparar uma fornada de guloseimas',
            path: '/brigadeiroDePote'
        },
        {
            title: 'Brownie',
            text: 'Você pode fazer brownies incríveis, deliciosos e úmidos em pouco tempo. Nossa receita é fácil de seguir e requer esforço mínimo, mas produz ótimos resultados.',
            path: '/brownie'
        },
        {
            title: 'Cinnamon',
            text: 'com nossa receita infalível, você pode fazer deliciosos rolinhos de canela em pouco tempo! Nossa receita é projetada para aqueles que desejam uma experiência de cozimento.',
            path: '/cinnamon'
        },
        {
            title: 'Cookies',
            text: 'Nossa receita está aqui para ajudar! Nossa receita de biscoito de colher é fácil de seguir, requer ingredientes mínimos e sempre resultará em biscoitos deliciosos',
            path: '/cookies'
        },
        {
            title: 'Cupcake',
            text: 'facilite a hora da sobremesa com nossa receita de cupcake de colher! Nossas instruções simples passo a passo simplificam a preparação de uma guloseima deliciosa.',
            path: '/cupcake'
        },
        {
            title: 'Donuts',
            text: 'experimente nossa receita fácil de seguir para rosquinhas de colher! Com apenas alguns ingredientes simples, você pode fazer rosquinhas deliciosas rapidamente',
            path: '/donuts'
        },
        {
            title: 'Macarons',
            text: 'nossa receita infalível de macaroon de colher facilita o cozimento! Tudo o que você precisa são alguns ingredientes simples.',
            path: '/macarons'
        },
        {
            title: 'Pão de mel',
            text: 'Se você está procurando uma sobremesa saudável e deliciosa, o pão de mel de melancia é uma excelente escolha!',
            path: '/paoDeMel'
        },
        {
            title: 'Pave de ninho',
            text: 'Se você é fã de sobremesas cremosas e saborosas, precisa experimentar a minha receita de pavê de Ninho com morango!',
            path: '/paveDeNinho'
        },
        {
            title: 'Petit brownie',
            text: 'Com a minha receita de petit brownie, você pode desfrutar de uma sobremesa deliciosa, fácil de fazer e que certamente agradará a todos.',
            path: '/petitBrownie'
        },
        {
            title: 'Torta de morango',
            text: 'Se você é um amante de sobremesas com frutas frescas, você precisa experimentar a minha receita de surpresa de morango!',
            path: '/tortaDeMorango'
        },
        {
            title: 'Bombom de morango',
            text: 'Se você é um amante de sobremesas com frutas frescas, você precisa experimentar a minha receita de bombom de morango!',
            path: '/bombomDeMorango'
        },
        {
            title: 'Bombom de banana',
            text: 'Se você está procurando uma sobremesa fácil, deliciosa e saudável, o bombom de banana de colher é uma excelente escolha!',
            path: '/bombomDeBanana'
        },
        {
            title: 'Bife Acebolado',
            text: 'O bife acebolado é preparado com um corte suculento e macio, temperado com um mix de especiarias que realça o sabor da carne.',
            path: '/biFeAcebolado'
        },
        {
            title: 'Strogonoff',
            text: 'O strogonoff é um prato que se popularizou devido à sua deliciosa combinação de carne, creme de leite e temperos',
            path: '/strogonoff'
        },
        {
            title: 'Costela',
            text: 'A costela é um prato que faz sucesso em churascos e é uma opção deliciosa para um almoço ou jantar especial',
            path: '/costela'
        },
        {
            title: 'Empada de palmito',
            text: 'A empada de palmito é um clássico, sendo uma opção deliciosa e versátil para um lanche ou refeição rápida.',
            path: '/empadaDePalmito'
        },
        {
            title: 'Bife a milanesa',
            text: 'O bife a milanesa é uma opção deliciosa e fácil de preparar, sendo ideal para um almoço ou jantar rápido e saboroso.',
            path: '/bifeAMilanesa'
        },
        {
            title: 'Macarrão',
            text: 'Macarrão É um prato que pode ser feito com diversos tipos de massa, molhos e ingredientes adicionais, proporcionando infinitas possibilidades de combinações.',
            path: '/macarrao'
        },
        {
            title: 'Pizza',
            text: 'Pizza uma opção deliciosa e versátil para uma refeição rápida e prática, podendo ser preparada com diversos tipos de massa, molhos e coberturas.',
            path: '/pizza'
        },
        {
            title: 'Lasanha',
            text: 'Lasanha é um prato que consiste em camadas de massa intercaladas com molho de carne, queijo e molho de tomate sendo uma opção deliciosa e reconfortante.',
            path: '/lasanha'
        }
    ])
    return (
        <section>
            <div className="textHome">
                <img src={minhaImagem}></img>
                <h1>Seja Bem Vindo(a) Ao Site Nossa Cozinha</h1>
            </div>
            <div className="containerHome">
                <div className="cards">
                    {
                        cards.map((card, i) => (
                            <div key={i} className="card">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                <Link className='none' to={card.path}><button className='btnHome'>Ver receita</button></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <footer className="footer">
                <div className="social-media">
                    <a href="https://github.com/SrKotaka" target="_blank" className="social-icon github">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/xskotaka_" target="_blank" className="social-icon twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/xskotaka_/" target="_blank" className="social-icon instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-de-castro-292696259/" target="_blank" className="social-icon linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <h4>Todos os Direitos Reservados © Nossa Cozinha 2023 </h4>
            </footer>
        </section>
    );
}