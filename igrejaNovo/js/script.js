
window.onload = function () {

    document.getElementById("AddPadre").style.display = "none";
};
function Login() {
    var nome = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (nome === "adm" && senha === "adm") {
        alert("Login bem-sucedido!");
        window.location.href ="adm.html";
        
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
function ScrollBar() {
    var local = document.getElementById("palavrasSemanaGroup");
    var posicaoTop = local.offsetTop - 100;
    window.scrollTo({
        left: 0,
        top: posicaoTop,
        behavior: "smooth"
    });
}

function ScrollBarNotic() {
    var local = document.getElementById("GroupNoticias");
    var posicaoTop = local.offsetTop - 100;
    window.scrollTo({
        left: 0,
        top: posicaoTop,
        behavior: "smooth"
    });
}

function ScrollBarEvento() {
    var local = document.getElementById("GroupEventos");
    var posicaoTop = local.offsetTop - 100;
    window.scrollTo({
        left: 0,
        top: posicaoTop,
        behavior: "smooth"
    });
}

function mudarTexto(botao) {
    var texto = "";

    switch (botao) {
        case 'missao':
            texto = "Servir a Deus, de forma simples e relevante, firmados na doutrina bíblica, levando as pessoas a um relacionamento crescente com Jesus.";
            break;
        case 'visao':
            texto = "Ser referência no ensino do Evangelho, ensinando a viver um relacionamento com Jesus e um relacionamento com os outros.";
            break;
        case 'valores':
            texto = "Centralidade na palavra; <br> Dedicação dos dons e talentos; <br> Comunicação contemporânea; <br> Relacionamento; <br> Missional.";
            break;
        default:
            break;
    }

    document.getElementById('textoPropositos').innerHTML = texto;
}

// Função para adicionar um novo bloco com base nos dados do modal
function adicionarNovoBloco() {
    // Obter valores do modal
    var imagemUrl = document.getElementById('imagemInput').value;
    var nomePadre = document.getElementById('nomeInput').value;
    var descricaoPadre = document.getElementById('descricaoInput').value;

    // Criar elementos HTML dinamicamente
    var novoBloco = document.createElement('div');
    novoBloco.className = 'padreBox';

    var novaImagem = document.createElement('img');
    novaImagem.className = 'imagemPadre';
    novaImagem.src = imagemUrl;
    novaImagem.alt = 'Nova Imagem';

    var novaTextBox = document.createElement('div');
    novaTextBox.className = 'textBoxPadre';

    var novoNomePadre = document.createElement('h2');
    novoNomePadre.className = 'nomePadre';
    novoNomePadre.textContent = nomePadre;

    var novoTextoPadre = document.createElement('p');
    novoTextoPadre.className = 'textoPadre';
    novoTextoPadre.textContent = descricaoPadre;

    // Adicionar os novos elementos ao novo bloco
    novaTextBox.appendChild(novoNomePadre);
    novaTextBox.appendChild(novoTextoPadre);

    novoBloco.appendChild(novaImagem);
    novoBloco.appendChild(novaTextBox);

    // Adicionar o novo bloco ao contêiner existente
    var container = document.getElementById('padresGroup');
    container.appendChild(novoBloco);

    // Fechar o modal após adicionar o bloco
    fecharModal();
}

function abrirJanela() {
    if (document.getElementById("AddPadre").style.display == "block") {
        document.getElementById("AddPadre").style.display = "none";

    } else {
        document.getElementById("AddPadre").style.display = "block";

    }
}