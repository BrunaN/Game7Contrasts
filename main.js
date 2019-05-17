let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

let next = document.getElementById("next");
let question = document.getElementsByClassName("type")[0];

let select = document.getElementsByClassName("select")[0];
let response = document.getElementsByClassName("response")[0];

let imageResponse = document.getElementById("response");

let messageResponse = document.getElementById("message");
let iconResponse = document.getElementsByClassName("icon")[0];
let iconCheck =  document.getElementsByClassName("fa-check")[0];
let iconError =  document.getElementsByClassName("fa-times")[0];

let progress = document.getElementsByClassName("number")[0];

let divProgress = document.getElementsByClassName("progress")[0];

let textProgress = document.getElementById("text-progress");

let finish = document.getElementsByClassName("finish")[0];
let spanRight = document.getElementById("right");
let spanWrong = document.getElementById("wrong");

let learn = document.getElementsByClassName("learn")[0];

let responses = [
    { 
        'value': '1',
        'list': [
            "A obra apresenta um contraste de matiz",
            "A obra não apresenta um contraste de matiz"
        ]
    }, { 
        'value': '2',
        'list': [
            "A obra apresenta um contraste claro-escuro",
            "A obra não apresenta um contraste claro-escuro"
        ]
    }, { 
        'value': '3',
        'list': [
            "A obra apresenta o contraste quente-frio",
            "A obra não apresenta contraste entre cores quentes e frias"
        ]
    }, { 
        'value': '4',
        'list': [
            "A obra apresenta um contraste simutâneo",
            "A obra não apresenta um contraste simutâneo"
        ]
    }, { 
        'value': '5',
        'list': [
            "A obra apresenta um contraste de complementares",
            "A obra não apresenta um contraste de complementares"
        ]
    }, { 
        'value': '6',
        'list': [
            "A obra apresenta um contraste de saturação",
            "A obra não apresenta um contraste de saturação"
        ]
    }, { 
        'value': '7',
        'list': [
            "A obra apresenta um contraste de extensão",
            "A obra não apresenta um contraste de extensão"
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

let countRight = 0;
let countWrong = 0;

image1.addEventListener("click", function(){
    learn.style.display = 'none';

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
        countRight++;
    }else{
        messageResponse.innerHTML = responseText.list[1];
        iconResponse.style.backgroundColor = "red";
        iconCheck.style.display = "none";
        iconError.style.display = "block";
        countWrong++;
    }

    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

image2.addEventListener("click", function(){
    learn.style.display = 'none';

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
        countRight++;
    }else{
        messageResponse.innerHTML = responseText.list[1];
        iconResponse.style.backgroundColor = "red";
        iconCheck.style.display = "none";
        iconError.style.display = "block";
        countWrong++;
    }
    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

let width = 0;
let count = 0;

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

    if(count > 0 && count <= 7){
        textProgress.innerHTML = count + " de 7 contrastes";
    }

    if(count == 7){
        spanRight.innerHTML = countRight;
        spanWrong.innerHTML = countWrong;

        finish.style.display = 'block';
        select.style.display='none';
        response.style.display='none';

        divProgress.style.display = 'none';
    }

    if(width >= 14.286 && width < 105){
        progress.style.width = width + '%';
    }

    if(width > 100){
        progress.style.borderTopRightRadius = '20px';
        progress.style.borderBottomRightRadius = '20px';
    }

    question.innerHTML = "Selecione a imagem que melhor representa o contraste " + types[a];
})
