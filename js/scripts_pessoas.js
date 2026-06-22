//PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const lista = document.querySelector('#div-lista-pessoas')

//CRIANDO ARRAY pessoas
const pessoas = []

//CAPTURA O EVENTO submit DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {

    //INTERROMPER O EFEITO PADRÃO DE SUBMETER OS DADOS DO FORMULÁRIO
    evt.preventDefault()

    //CRIAR UM OBJETO FORMULÁRIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRIAR UM OBJETO LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)
}