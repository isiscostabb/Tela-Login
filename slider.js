
// Selecionar section
const slider_left = window.document.querySelector('section.slider_left');

// Selecionar textos
const txt1 = document.querySelector('h2.slider_left');

// Selecionar botões
const txt_botao = document.querySelector('p.slider_left.button');



//toggle
let controle = true;

document.querySelector('div.slider_left.button').addEventListener("click", toggleConta);

function toggleConta() {
    if (controle) {
        criarConta();
    } else {
        acessarConta();
    }
    // Alternar o estado
    controle = !controle;
}



//criar conta
function criarConta() {
    slider_left.classList.add('slider_right');
    txt1.innerHTML = 'Já tem uma <br> conta?';
    txt1.style.marginTop = '150px';
    txt_botao.innerHTML = 'acessar conta';
}



//acessar conta
function acessarConta() {
    slider_left.classList.remove('slider_right');
    txt1.innerHTML = 'Cansado de <br> noites mal <br> dormidas?';
    txt1.style.marginTop = '120px';
    txt_botao.innerHTML = 'criar conta agora';
}
