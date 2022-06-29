function GenerateBoyName(){
    var BoyName = ["Alex", "Lucas", "Bruno", "Samael", "Ignacio", "Santiago", "Ethan", "Andres", "Adrian", "Alejandro", "Victor", "Leandro", "Elías", "Miguel", "Matías", "Mateo", "Oscar", "Samuel", "Mikel", "Luis", "Liam", "Tomás", "Thiago", "Otis", "Kenay", "Gael", "Hérmes"];

    var rand_boy = Math.floor(Math.random()*BoyName.length);
    
    document.getElementById('result').innerHTML = "<div class='name-container'> <h3 class='your-name'>"+BoyName[rand_boy]+"</h3></div>";
}

function GenerateGirlName (){
    var GirlName = ["Azul", "Astrid", "Lilith", "Venus", "Vanesa", "Tamara", "Alejandra", "Ximena", "Ruby", "Georgina", "Adriana", "Andrea", "Sandra", "Fernanda", "Aline", "Dulce", "Lucia", "Samanta", "Arcoiris", "Valeria", "Tania", "Isabella", "Coraline", "Angela"];

    var rand_girl = Math.floor(Math.random()*GirlName.length);

    document.getElementById('result').innerHTML = "<div class='name-container'> <h3 class='your-name'>"+GirlName[rand_girl]+"</h3></div>";
}

function GenerateNbName(){
    var NbName = ["Cyan", "Alex", "Aly", "Ariel", "Beck", "Eli", "Finn", "Gray", "Azul", "Indigo", "Isa", "Jay", "Phoenix", "Vix", "Robin", "Morgan", "Taylor", "Haven", "Ellis", "Happy", "Mars", "Mar", "Max", "Lex", "Delan"];

    var rand_nb = Math.floor(Math.random()*NbName.length);

    document.getElementById('result').innerHTML = "<div class='name-container'> <h3 class='your-name'>"+NbName[rand_nb]+"</h3></div>";
}