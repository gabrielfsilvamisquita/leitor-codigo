$(function(){
    var soma = 0;

    //"Banco de Dados"
    var produtos = {
        "7896444210821": 20, //cera aparelho
        "7894494654831": 19.90, //caderno
        "7891033476312": 39.90, //desodorante
        "884851022554": 5 //caneta    
    };

    //Quando o Input for alterado
    $("#codigo").change(function(){          
        //pega o valor e mostra no HTML
        let code = $(this).val();
        $("#produtos").append(
            `<div class='item'>Produto: ${code} Preço: ${dinheiro(produtos[code])}</div>`
        );
        
        //mostra a soma
        soma += produtos[code];
        $("#soma").html(dinheiro(soma));

        $(this).val(""); //limpa o Input
    });

    function dinheiro(valor){
        return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }
});
