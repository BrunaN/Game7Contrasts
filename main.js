let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

let next = document.getElementsByTagName("button")[0];
let question = document.getElementsByClassName("type")[0];

let select = document.getElementsByClassName("select")[0];
let response = document.getElementsByClassName("response")[0];

let imageResponse = document.getElementById("response");

let messageResponse = document.getElementById("message");
let iconResponse = document.getElementsByClassName("icon")[0];
let iconCheck =  document.getElementsByClassName("fa-check")[0];
let iconError =  document.getElementsByClassName("fa-times")[0];

let progress = document.getElementsByClassName("number")[0];
let textProgress = document.getElementById("text-progress");


let responses = [
    { 
        'value': '1',
        'list': [
            "A obra representa um contraste de matiz",
            "A obra não representa um contraste de matiz"
        ]
    },
    { 
        'value': '2',
        'list': [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }, { 
        'value': '3',
        'list': [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }, { 
        'value': '4',
        'list': [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }, { 
        'value': '5',
        'list': [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }, { 
        'value': '6',
        'list': [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }, { 
        'value': '7',
        'list': [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }
]

let types = [
    "de matiz",
    "claro-escuro",
    "quente-frio",
    "de complementares",
    "simutâneo",
    "de saturação",
    "de extensão"
]

image1.addEventListener("click", function(){
    let src = document.getElementById("image1").getAttribute("src");
    let aux = src.split("/")[1].substring(0, 3);
    let position = aux.split("_")[0];
    let value = aux.split("_")[1];
    responseText = responses[position - 1]

    if(value == "r"){
        messageResponse.innerHTML = responseText.list[0];
        iconResponse.style.backgroundColor = "green";
        iconCheck.style.display = "block";
        iconError.style.display = "none";
    }else{
        messageResponse.innerHTML = responseText.list[1];
        iconResponse.style.backgroundColor = "red";
        iconCheck.style.display = "none";
        iconError.style.display = "block";
    }

    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

image2.addEventListener("click", function(){
    let src = document.getElementById("image2").getAttribute("src");
    let aux = src.split("/")[1].substring(0, 3);
    let position = aux.split("_")[0];
    let value = aux.split("_")[1];
    responseText = responses[position - 1]

    if(value == "r"){
        messageResponse.innerHTML = responseText.list[0];
        iconResponse.style.backgroundColor = "green";
        iconCheck.style.display = "block";
        iconError.style.display = "none";
    }else{
        messageResponse.innerHTML = responseText.list[1];
        iconResponse.style.backgroundColor = "red";
        iconCheck.style.display = "none";
        iconError.style.display = "block";
    }
    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

let width = 14.286;
let count = 1;

next.addEventListener('click', function(){
    let srcResponse = document.getElementById("response").getAttribute("src");

    let aux = srcResponse.split("/")[1].substring(0, 3);
    let a = aux.split("_")[0];
    let position = (parseInt(a)+1);
    let value = aux.split("_")[1];

    let y = ["r","w"];
    let x = (y[Math.random() < 0.5 ? 0 : 1])

    let src1 = "img/" + position + "_" + x +".jpg"
    let src2 = "img/" + position + "_";

    if(x == y[1]){
        src2 += y[0] +".jpg"
    }else{
        src2 += y[1] +".jpg"
    }

    image1.setAttribute('src', src2);
    image2.setAttribute('src', src1);

    select.style.display='block';
    response.style.display='none';

    image1.setAttribute('src', src2);

    width += 14.286;
    count++;

    if(count>1){
        textProgress.innerHTML = count + " de 7 contrastes";
    }

    if(width > 14.286){
        progress.style.width = width + '%';
    }

    if(width > 100){
        progress.style.borderTopRightRadius = '20px';
        progress.style.borderBottomRightRadius = '20px';
    }

    question.innerHTML = "Selecione a imagem que melhor representa o contraste " + types[a];
})
