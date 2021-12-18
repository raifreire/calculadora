
function calculadora(){
    const operacao = prompt("Escolha uma Opção: \n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão (/)");

    if(!operacao || operacao >= 5){
        alert('Erro - opção inavalida');
        calculadora();
    }else{

    let valor1 = Number(prompt('Digite o valor a ser calculado: '));
    let valor2 = Number(prompt('Digite outro valor a ser calculado: '));
    let resultado;

    if(!valor1 || !valor2){
        alert('valores incorretos');
        calculadora();
    }else{
        function soma(){
            resultado = valor1 + valor2;
            alert(`${valor1} + ${valor2} = ${resultado}`);
            novaOperacao();    
         }
         function subtracao(){
            resultado = valor1 - valor2;
            alert(`${valor1} - ${valor2} = ${resultado}`); 
            novaOperacao();   
         }
         function multiplicacao(){
            resultado = valor1 * valor2;
            alert(`${valor1} * ${valor2} = ${resultado}`);
            novaOperacao();    
         }
         function divisao(){
            resultado = valor1 / valor2;
            alert(`${valor1} / ${valor2} = ${resultado}`);
            novaOperacao();    
         }
    
         function novaOperacao(){
             let novaoperacao = prompt("deseja realizar outra operação: \n 1 - sim \n 2 - não");
    
             if(novaoperacao == 1){
                calculadora();
             }else if(novaoperacao == 2){
                alert('Ate logo! ')
             }else{
                alert('opção invalida 2')
                novaOperacao();
            }
    }

     
     
    
    
    } if (operacao == 1){
        soma();
    }else if(operacao == 2){
        subtracao();
    }else if(operacao == 3){
        multiplicacao();
    }else if(operacao == 4){
        divisao();
    }
    }
    
    

}

calculadora();
