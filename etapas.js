
const b1 = window.document.querySelector('div.cadastro.bottom.botao')
const b2 = window.document.querySelector('div.cadastro.bottom.botao.dois')
const b3 = window.document.querySelector('div.cadastro.bottom.botao.tres')

b1.addEventListener('click', () => {
    pass2()
    local_form.scrollLeft += 450
}) 

b2.addEventListener('click', () => {
    pass3()
    local_form.scrollLeft += 450
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