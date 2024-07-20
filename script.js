
const planetaDiv = document.querySelector(".plan");
const imgElement = planetaDiv.querySelector("img");
const tituloElemento = document.querySelector(".prititulo");
const sobreElemento = document.querySelector(".planSobre");



const todosPlanetas = [{
    nome: "Marte",
   imagem: "marte.jpg",
   sobre: "Marte é o quarto planeta a partir do Sol, conhecido por sua cor avermelhada devido à presença de óxido de ferro em sua superfície. Possui uma atmosfera fina composta principalmente de dióxido de carbono, com temperaturas que variam de -125°C durante a noite a 20°C durante o dia. A superfície marciana apresenta características geológicas impressionantes, incluindo o Monte Olimpo, o maior vulcão conhecido no sistema solar, e o Valles Marineris, um gigantesco sistema de cânions. Evidências indicam que Marte teve água líquida em seu passado, e hoje há gelo de água nos polos e possíveis reservatórios subterrâneos. Missões como as rovers Curiosity e Perseverance exploram Marte em busca de sinais de vida passada ou presente e insights sobre sua geologia e clima.",
},
{   
    nome: "Mercurio",
    imagem:"mercurio.jpg",
    sobre:"Mercúrio é o menor e mais próximo planeta do Sol no sistema solar. Com uma superfície cheia de crateras, semelhante à da Lua, Mercúrio tem uma atmosfera extremamente tênue, composta principalmente de oxigênio, sódio, hidrogênio, hélio e potássio. As temperaturas em Mercúrio variam drasticamente, atingindo até 430°C durante o dia e caindo para -180°C à noite. O planeta tem um núcleo metálico grande que ocupa cerca de 75% do seu raio, gerando um campo magnético fraco. As missões espaciais, como a Mariner 10 e a MESSENGER, forneceram informações valiosas sobre sua composição e geologia. Mercúrio continua a intrigar os cientistas com seus extremos e mistérios.",
},
{
    nome: "Netuno",
    imagem:"netuno.jpg",
    sobre:"Netuno é o oitavo e mais distante planeta do Sol no sistema solar. Conhecido por sua cor azul vibrante, causada pela absorção de metano em sua atmosfera, Netuno é um gigante gasoso com ventos extremamente fortes, os mais rápidos do sistema solar, atingindo velocidades de até 2.100 km/h. A atmosfera é composta principalmente de hidrogênio, hélio e metano. Netuno possui um sistema de anéis tênues e quatorze luas conhecidas, sendo Tritão a maior e mais interessante devido à sua geologia ativa e geysers de nitrogênio. Descoberto em 1846, Netuno foi visitado apenas pela sonda Voyager 2 em 1989, que forneceu informações essenciais sobre sua composição, clima e sistema de anéis. O planeta continua a ser um foco de estudo para entender melhor os gigantes gasosos e a dinâmica do sistema solar.",
} ,
{
    nome: "Saturno",
    imagem:"saturno.jpg",
    sobre:"Saturno, o sexto planeta a partir do Sol, é famoso por seus impressionantes anéis compostos de gelo e rocha. Como um gigante gasoso, Saturno é composto principalmente de hidrogênio e hélio. Sua atmosfera apresenta tempestades e ventos fortes, com a famosa Grande Mancha Branca sendo uma tempestade periódica observada desde a Terra. Além dos anéis, Saturno possui mais de 80 luas conhecidas, com Titã sendo a maior e a mais interessante. Titã tem uma atmosfera densa e lagos de metano líquido, fazendo dela um foco de estudo para entender condições que possam abrigar formas de vida. Encélado, outra lua notável, tem gêiseres que liberam água gelada, indicando um oceano subsuperficial. Saturno foi estudado de perto pela sonda Cassini, que orbitou o planeta de 2004 a 2017, fornecendo dados valiosos sobre sua atmosfera, anéis e luas.",
},

{
    nome:"Venus",
    imagem:"venus.jpg",
    sobre:"Vênus, o segundo planeta a partir do Sol, é muitas vezes chamado de irmã da Terra devido ao seu tamanho e composição semelhantes. No entanto, Vênus possui um ambiente extremo e hostil. Sua atmosfera densa é composta principalmente de dióxido de carbono, com nuvens de ácido sulfúrico, resultando em um efeito estufa descontrolado que eleva as temperaturas na superfície para cerca de 465°C, tornando-o o planeta mais quente do sistema solar. A pressão atmosférica em Vênus é cerca de 92 vezes maior que a da Terra, semelhante à encontrada a 900 metros de profundidade nos oceanos terrestres. A superfície do planeta é marcada por vastas planícies de lava, montanhas e milhares de vulcões, alguns possivelmente ainda ativos.",
},

{
    nome: "Urano",
    imagem:"urano.jpg",
    sobre:"Urano, o sétimo planeta a partir do Sol, é um gigante gelado distinto por seu eixo de rotação extremamente inclinado, praticamente deitado de lado, resultando em estações extremas que duram 21 anos terrestres cada. Composto principalmente de hidrogênio, hélio e metano, o metano na atmosfera superior confere ao planeta sua cor azul-esverdeada. Urano possui um sistema de anéis finos e escuros, menos proeminentes que os de Saturno, mas igualmente fascinantes. O planeta tem 27 luas conhecidas, com as maiores sendo Titânia, Oberon, Umbriel, Ariel e Miranda. Essas luas mostram uma variedade de características geológicas, desde cânions profundos até superfícies cobertas de crateras. Descoberto em 1781 por William Herschel, Urano foi visitado apenas pela sonda Voyager 2 em 1986, que revelou detalhes sobre sua atmosfera, anéis e luas.|",
},
{
    nome:"Jupiter",
    imagem:"jupiter_11zon.jpg",
    sobre:"Júpiter é o maior planeta do sistema solar, composto principalmente de hidrogênio e hélio. Sua atmosfera é marcada por faixas coloridas e tempestades massivas, como a Grande Mancha Vermelha, uma tempestade gigantesca observada por mais de 300 anos. Júpiter possui um sistema de anéis tênues e 79 luas conhecidas, destacando-se as quatro luas galileanas: Io, Europa, Ganimedes e Calisto. Ventos violentos e uma rápida rotação contribuem para sua dinâmica atmosférica complexa. Exploradas por missões como Voyager, Galileo e Juno, essas características revelam detalhes fascinantes sobre o planeta. Júpiter possui um campo magnético extremamente forte, criando auroras espetaculares em seus polos. Estudar Júpiter é crucial para entender a formação e evolução do sistema solar e dos gigantes gasosos.",
},

{
    nome:"Terra",
    imagem:"terra_11zon.jpg",
    sobre: " A Terra é o terceiro planeta a partir do Sol e o único conhecido por abrigar vida. Composta por 71% de água e 29% de terra, possui uma atmosfera rica em nitrogênio e oxigênio, essencial para a vida. A Terra tem um núcleo metálico, um manto de silicato e uma crosta diversificada. O planeta experimenta quatro estações devido à sua inclinação axial de 23,5 graus. A tectônica de placas molda a superfície terrestre, criando montanhas, vulcões e terremotos. A Terra tem um campo magnético que protege a superfície da radiação solar nociva. A Lua, seu único satélite natural, influencia marés e estabiliza a rotação. A biodiversidade da Terra é vastamente variada, sustentando milhões de espécies em diversos ecossistemas.",
},
];

planetaDiv.addEventListener("click", alterar);

function alterar() {
    const idx = Math.floor(Math.random() * todosPlanetas.length)
    const planetaSelecionado = todosPlanetas[idx]
    

    imgElement.src = planetaSelecionado.imagem;
    tituloElemento.textContent = planetaSelecionado.nome;
    sobreElemento.textContent = planetaSelecionado.sobre;

}






