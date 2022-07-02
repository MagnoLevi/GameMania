function salvaLogin(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email != '' && senha != ''){
        if(senha == 12345){
            window.location.href = "index.html"
        } else {
            alert('senha errada');
            document.getElementById("senha").value = ''
        }
    } else {
        alert('senha ou email vazios')
    }
}



function mostrarSenha() {
    const olho = document.getElementById('olho');
    const olhoSlash = document.getElementById('olho-slash');
    const senha = document.getElementById('senha');

    if(olho.style.display == 'none') {
        olhoSlash.style.display = 'none';
        olho.style.display = 'flex';
        senha.type = 'text';
    } else {
        olhoSlash.style.display = 'flex';
        olho.style.display = 'none';
        senha.type = 'password';
    }
};



let listaDestaques = [
    {
        imagem: 'er',
        preco: 'R$300,00',
        titulo: 'Elden Ring'
    },
    {
        imagem: 'xbox',
        preco: 'R$5000,00',
        titulo: 'Xbox Series X'
    },
    {
        imagem: 'ps5',
        preco: 'R$6000,00',
        titulo: 'PS5'
    }
]
let listaNovidades = [
    {
        imagem: 'iphone',
        preco: 'R$3000,00',
        titulo: 'Iphone 13'
    },
    {
        imagem: 'nintendo1',
        preco: 'R$2800,00',
        titulo: 'Nintendo Switch'
    }
]
let listaGaleria = [
    {
        imagem: 'iphone',
    },
    {
        imagem: 'acer',
    },
    {
        imagem: 'nintendo2',
    },
    {
        imagem: 'iphone',
    }
]
let listaGaleria1 = [
    {
        imagem: 'pichau',
    },
    {
        imagem: 'xboxs',
    }
]

function renderizarAnuncio(){
    let espacoDestaques = document.getElementById('EspacoAnuncioDestaques')
    let espacoNovidades = document.getElementById('EspacoAnuncioNovidades')
    let espacoGaleria = document.getElementById('EspacoAnuncioGaleria')
    let espacoGaleria1 = document.getElementById('EspacoAnuncioGaleria1')
    let templateDestaque = '', templateNovidades = '', templateGaleria = '', templateGaleria1 = '';

    for(let contador = 0; contador < listaDestaques.length; contador++){
        const anuncioDestaque = listaDestaques[contador]
        templateDestaque += `<div>
                        <img class="rounded" src="img/${anuncioDestaque.imagem}.jpg" style="height: 200px;">
                        <h3 style="color: lightgreen;">${anuncioDestaque.preco}</h3>
                        <h5 style="color: whitesmoke;">${anuncioDestaque.titulo}</h5>
                    </div>`;
    }
    for(let contador = 0; contador < listaNovidades.length; contador++){
        const anuncioNovidades = listaNovidades[contador]
        templateNovidades += `<div>
                        <img class="rounded" src="img/${anuncioNovidades.imagem}.jpg" style="height: 200px;">
                        <h3 style="color: lightgreen;">${anuncioNovidades.preco}</h3>
                        <h5 style="color: whitesmoke;">${anuncioNovidades.titulo}</h5>
                    </div>`;
    }
    for(let contador = 0; contador < listaGaleria.length; contador++){
        const anuncioGaleria = listaGaleria[contador]
        templateGaleria += `<div>
                        <img class="rounded" src="img/${anuncioGaleria.imagem}.jpg" style="height: 200px;">
                    </div>`;
    }
    for(let contador = 0; contador < listaGaleria1.length; contador++){
        const anuncioGaleria1 = listaGaleria1[contador]
        templateGaleria1 += `<div>
                        <img class="rounded" src="img/${anuncioGaleria1.imagem}.jpg" style="height: 200px;">
                    </div>`;
    }

    espacoDestaques.innerHTML = templateDestaque
    espacoNovidades.innerHTML = templateNovidades
    espacoGaleria.innerHTML = templateGaleria
    espacoGaleria1.innerHTML = templateGaleria1
}

