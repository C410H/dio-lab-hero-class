function verificacao(){
    
    let nome = $('input[id="name"]').val();
    let idade = $('input[id="idade"]').val();
    let tipo = $('select[id="hero"]').val();

    console.log(nome, idade, tipo)

    if(nome != "" && idade != 0){
        
        let hero = new meuHero(nome , idade, tipo);
        $('.mons').html(hero.ataque());
        
    } else {

        $('.mons').html('<div> <h1><p>!!! Preencha todo formulario !!!</p></h1> </div>');

    }
    
}

class meuHero {
    constructor(nome, idade, tipo){

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
        
    }
    ataque(){
        let ataque;

        switch (this.tipo) {
            case "Mago":
                ataque = "magia"
                break;

            case "Guerreiro":
                ataque = "espada"
                break;

            case "Monge":
                ataque = "artes marciais"
                break;

            case "Ninja":
                ataque = "shuriken"
                break;
        }

        let texto = '<div class="col-10 offset-1 my-3 d-lg-flex justify-content-lg-evenly align-items-center">';
        texto += '<img src="img/'+this.tipo+'.png"  class="img mx-auto d-block" alt="'+this.tipo+'">';
        texto += '<div> <p class="text-break my-5 p-4">( <b>'+this.nome+' , '+this.idade+' </b>) O <b>'+this.tipo+'</b> atacou usando <b>'+ataque+'</b></p> </div>';
        texto += '<img src="img/monster.png"  class="img mx-auto d-block" alt="monstro"></div>';

        return texto;


    }
}