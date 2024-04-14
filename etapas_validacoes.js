

//validacao p1

const botao = document.querySelector('.cadastro.bottom.botao')
let resposta_email;

function validacao_email() {
    const email = document.querySelector('#email').value;
    const email_input = document.querySelector('#email');


    const valida = /\S+@\S+\.\S+/;
    const resultado = valida.test(email);

    if (resultado != true) {
        email_input.classList.add('errado')
        resposta_email = false;
    } else {
        email_input.classList.remove('errado')
        resposta_email =  true;
    }
}

botao.addEventListener("click", function (event) {
    event.preventDefault();
    validacao_email();
});


//validacao p2

const botao2 = document.querySelector('.cadastro.bottom.botao.dois')
let resposta_senhas;

function validacao_senhas() {
    const senha1 = document.querySelector('#criar_senha').value;
    const senha2 = document.querySelector('#criar_senha2').value;

    const senha1_input = document.querySelector('#criar_senha');
    const senha2_input = document.querySelector('#criar_senha2');

    //senha igual
    if (senha2 != senha1) {
        senha1_input.classList.add('errado')
        senha2_input.classList.add('errado')
        resposta_senhas = false;
    } else {
        senha1_input.classList.remove('errado')
        senha2_input.classList.remove('errado')
        resposta_senhas = true;
    }
}

botao2.addEventListener("click", function (event) {
    event.preventDefault();
    validacao_senhas();
});


//---------------------------------------------


const b1 = window.document.querySelector('div.cadastro.bottom.botao')
const b2 = window.document.querySelector('div.cadastro.bottom.botao.dois')
const b3 = window.document.querySelector('div.cadastro.bottom.botao.tres')

b1.addEventListener('click', () => {
    if (resposta_email != false) {
        pass2()
        local_form.scrollLeft += 450
    }
}) 

b2.addEventListener('click', () => {
    if (resposta_senhas != false) {
        pass3()
        local_form.scrollLeft += 450
    }
}) 

//---------------------------------------------

//form1
const local_form = window.document.querySelector('section.cadastro')

//1
//dots
const um = window.document.querySelector('div.etapas.numero.um')
const dois = window.document.querySelector('div.etapas.numero.dois')
const tres = window.document.querySelector('div.etapas.numero.tres')

//linhas
const local1 = window.document.querySelector('div.etapas.linha1')
const local2 = window.document.querySelector('div.etapas.linha2')



//2
//dots
const um_b = window.document.querySelector('div.etapas.numero.um.b')
const dois_b = window.document.querySelector('div.etapas.numero.dois.b')
const tres_b = window.document.querySelector('div.etapas.numero.tres.b')

//linhas
const local1_b = window.document.querySelector('div.etapas.linha1.b')
const local2_b = window.document.querySelector('div.etapas.linha2.b')



//3
//dots
const um_c = window.document.querySelector('div.etapas.numero.um.c')
const dois_c = window.document.querySelector('div.etapas.numero.dois.c')
const tres_c = window.document.querySelector('div.etapas.numero.tres.c')

//linhas
const local1_c = window.document.querySelector('div.etapas.linha1.c')
const local2_c = window.document.querySelector('div.etapas.linha2.c')



//dot 1
function pass1() {
    um.classList.add('cor')

    //remove 2
    local1_b.classList.remove('pass_linha1') 
    dois_b.classList.remove('cor')

    //remove 3
    local2_c.classList.remove('pass_linha2')
    tres_c.classList.remove('cor')
}

um_b.addEventListener('click', () => {
    local_form.scrollLeft -= 450
}) 

um_c.addEventListener('click', () => {
    local_form.scrollLeft -= 900
}) 



//dot 2
function pass2() {
    local1_b.classList.add('pass_linha1') 
    dois_b.classList.add('cor')

    //remove 3
    local2_c.classList.remove('pass_linha2')
    tres_c.classList.remove('cor')
}

dois.addEventListener('click', () => {
    local_form.scrollLeft += 450
}) 

dois_c.addEventListener('click', () => {
    local_form.scrollLeft -=450
}) 



//dot 3
function pass3() {
    local2_c.classList.add('pass_linha2')
    tres_c.classList.add('cor')

    //add 2 (caso seja direto)
    local1_c.classList.add('pass_linha1') 
    dois_c.classList.add('cor')
}

tres_b.addEventListener('click', () => {
    local_form.scrollLeft += 450
}) 

tres.addEventListener('click', () => {
    local_form.scrollLeft +=900
}) 

