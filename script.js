const botoes = document.querySelectorAll("button")

    botoes.forEach(funtion(botao){
     let curtiu =false;

     botao . addEventlistener ("click", function botaoClicado (){;
        curtiu = !curtiu // alterna o estado de curtida
     console . log ("fui clicado! estado de curtida", curtiu);
     let texto = botao.querySelector("span");
     if (curtiu === false){
        texto.textcontent++;
        curtiu = true;
     }else{
        texto.textcontent--;
        curtiu = false;
     }
     });
    });
