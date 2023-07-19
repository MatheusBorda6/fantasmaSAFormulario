const form = document.querySelector("form");

const fantasmas = [
    {
        codigo: 1,
        nome: "Geléia",
        descricao: "Este fantasma é composto por gosma espectral de coloração verde, ele geralmente vai atrás de alimentos mas somente faz com que apodreçam.",
        foto: "https://static3.tcdn.com.br/img/img_prod/460977/ghostbusters_slimer_foam_replica_life_size_escala_1_1_neca_7835_1_20201211173546.jpg",
        combate: "Para derrotá-lo é necessário usar a mochila de prótons que dispara um fluxo de prótons altamente focados e radialmente polarizados que eletrostaticamente capturam a energia carregada negativamente de um fantasma, permitindo que ele seja mantido no fluxo."
    },
    {
        codigo: 2,
        nome: "Ju-On",
        descricao: "Uma maldição nascida do forte remorso de alguém que já morreu. O local de sua morte abriga seu remorso. Qualquer um que entre em contato com essa maldição deve perder sua vida, e uma nova maldição se inicia.",
        foto: "https://bocadoinferno.com.br/wp-content/uploads/2014/01/O-Grito-3-2009-3.jpg",
        combate: "Para derrotá-la você precisa redur à cinzas a casa e os restos mortais para que a maldição acabe."
    },
    {
        codigo: 3,
        nome: "Freddy Kruger",
        descricao: "Um serial killer que foi morto queimado e cheio de ódio assombrando os sonhos das pessoas.",
        foto: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/12/Freddy-Krueger.jpg",
        combate: "Para derrotar o Freeddy Krugger, você precisa fazer com que todos parem de falar sobre ele e o esqueçam."
    },
    {
        codigo: 4,
        nome: "Sombra da Meia-Noite",
        descricao: "Toda a meia noite em frente ao cemitério esta assombração aterroriza quem passa por perto.",
        foto: "https://revistanove.com.br/wp-content/uploads/2019/01/fantasma-do-paqueta-revista-nove-arte-christian-jauch2.jpeg",
        combate: "Uma maneira eficaz de derrotar esse fantasma seria chamando um exorcista profissional."
    },
    {
        codigo: 5,
        nome: "Atividades Paranormais",
        descricao: "Esta entidade paranormal causa estragos a residêcia e a quem se atrever a entrar nos seus dominios.",
        foto: "https://media.gazetadopovo.com.br/2009/12/f0639219e1d88e4c509cbfbefd8490f9-gpLarge.jpg",
        combate: "Para se livrar dos eventos que essa entidade exerce basta executar um exorcismo com o possuído em um lugar acolchoado  e sem nada que seja capaz de ser usado como arma."
    },
    {
        codigo: 6,
        nome: "Demogorgon",
        descricao: "Uma criatura vinda do mundo invertido que se alimenta de animais de médio porte mas também pode atacar humanos.",
        foto: "https://i.redd.it/qrf3fkpi2s861.jpg",
        combate: "Basta usar fogo pois é muito efetivo contra ele, pois no mundo invertido tudo é gelado."
    },
    {
        codigo: 7,
        nome: "Poltergeist",
        descricao: "Do alemão poltern (fazer barulho), e geist (fantasma), esta assombração se liga a aos objetos da residência derrubando-os ou em aparelhos eletrônicos ela os faz ligar e provoca ruídos altos.",
        foto: "https://veja.abril.com.br/wp-content/uploads/2022/07/257074066-poltergeist.jpg?quality=90&strip=info&w=1024&resize=1200,800",
        combate: "Para acabar com ele precisa fazer um círculo com sal grosso quando o objeto estiver possuído e exorcizá-lo com água benta."
    },
    {
        codigo: 8,
        nome: "Loira do Banheiro",
        descricao: "O suposto espírito passou a ser descrito como o fantasma de uma jovem loira de vestes brancas, com pedaços de algodão na boca, ouvidos e nariz. Este espírito surgiria depois de um ritual de invocação, que varia de acordo com o colégio. As possíveis etapas incluem chamá-lo três vezes em frente ao espelho, bater a porta do banheiro, falar palavrões, chutar o vaso sanitário e puxar a descarga, por vezes com a combinação de dois ou mais desses rituais, ou até mesmo todos eles.",
        foto: "https://socientifica.com.br/wp-content/uploads/2020/03/Maria-Sangrenta.jpg",
        combate: "Este fantasma fica preso somente ao banheiro, logo basta se afastar do local que ele não pode mais lhe alcançar e fazer mal algum."
    },
    {
        codigo: 9,
        nome: "It a coisa",
        descricao: "Não se sabe a origem exata, mas se trata de uma criatura anciã que se alimenta do medo e então devora também sua vítima.",
        foto: "https://poltronanerd.com.br/wp-content/uploads/2020/06/pennywise-1024x576.jpg",
        combate: "Ele recebe ataques físicos, então para derotá-lo basta não cair em seus truques para causar medo que ele enfraquece e fica passível de golpes."
    },
    {
        codigo: 10,
        nome: "Bruxa de Blair",
        descricao: "Uma bruxa que até hoje ninguém conseguiu imagens mas por décadas jovens que tentam encontrá-la simplesmente desaparecem em meio a gritos floresta à dentro, a única descrição dela é: 'uma velha que os pés nunca tocam o chão'.",
        foto: "https://trecobox.com.br/wp-content/uploads/2019/06/a-bruxa-de-blair-game-da-franquia-e-anunciado-durante-a-e3-2019-01.jpg",
        combate: "Para derrotar a Bruxa de Blair é preciso um grupo grande para evitar que ela consiga capturar a todos, localizar sua casa onde deve haver um objeto amaldiçoado contendo seu coração, ao destruí-lo sua forma saíra do plano dos vivos."
    }
];

form.onsubmit = function (event) {
    event.preventDefault();
    const inputs = new FormData(event.target);
    const codigo = parseInt(inputs.get('codigo'));

    var fantasmaEncontrado = fantasmas.find(fantasma => fantasma.codigo === codigo);

    if (fantasmaEncontrado) {
        document.getElementById("nome").textContent = fantasmaEncontrado.nome;
        document.getElementById("descricao").textContent = "Descrição: " + fantasmaEncontrado.descricao;
        document.getElementById("foto").src = fantasmaEncontrado.foto;
        document.getElementById("combate").textContent = "Como Combater: " + fantasmaEncontrado.combate;
    } else {
        document.getElementById("nome").textContent = "Fantasma não encontrado.";
        document.getElementById("descricao").textContent = "";
        document.getElementById("foto").src = "https://cdn.dribbble.com/users/60540/screenshots/2451856/dailyui-08-404.gif";
        document.getElementById("combate").textContent = "";
    }
};
