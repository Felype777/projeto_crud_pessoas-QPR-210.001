//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS
const calcDesconto = (objPessoa) => {
    let resultCalc = ''

    if((objPessoa.idade < 18) || (objPessoa.renda <= 1700)){
        resultCalc = 'Isento de desconto'
    }else if(objPessoa.renda <= 5000){
        resultCalc = `R$ ${parseFloat(objPessoa.renda * 0.05).toFixed(2).
        replace('.',',')}`
    }else if(objPessoa.renda <= 8000){
        resultCalc = `R$ ${parseFloat(objPessoa.renda * 0.10).toFixed(2).
        replace('.',',')}`
    }else if(objPessoa.renda <= 12000){
        resultCalc = `R$ ${parseFloat(objPessoa.renda * 0.15).toFixed(2).
        replace('.',',')}`
    }else{
        resultCalc = `R$ ${parseFloat(objPessoa.renda * 0.20).toFixed(2).
        replace('.',',')}`
    }

    return resultCalc
}

export{calcDesconto}