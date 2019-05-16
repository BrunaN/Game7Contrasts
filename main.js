let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

let next = document.getElementsByTagName("button")[0];
let question = document.getElementsByClassName("type")[0];

let select = document.getElementsByClassName("select")[0];
let response = document.getElementsByClassName("response")[0];

let imageResponse = document.getElementById("response");

let messageResponse = document.getElementById("message");
let iconResponse = document.getElementsByClassName("icon")[0];
let icon = document.getElementsByTagName("i")[0];

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
        icon.classList.add("fa-check")
    }else{
        messageResponse.innerHTML = responseText.list[1];
        iconResponse.style.backgroundColor = "red";
        icon.classList.add("fa-times");
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
        icon.classList.add("fa-check")
    }else{
        messageResponse.innerHTML = responseText.list[1];
        iconResponse.style.backgroundColor = "red";
        icon.classList.add("fa-times");
    }
    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

next.addEventListener('click', function(){
    let srcResponse = document.getElementById("response").getAttribute("src");

    let aux = srcResponse.split("/")[1].substring(0, 3);
    let a = aux.split("_")[0];
    let position = (parseInt(a)+1);
    let value = aux.split("_")[1];

    let src1 = "img/" + position + "_r.jpg"
    let src2 = "img/" + position + "_w.jpg"

    console.log(src1, src2)

    if(value == "r"){
        image1.setAttribute('src', src2);
        image2.setAttribute('src', src1);
    }else{
        image1.setAttribute('src', src2);
        image2.setAttribute('src', src1);
    }

    select.style.display='block';
    response.style.display='none';

    image1.setAttribute('src', src2);

    question.innerHTML = "Selecione a imagem que melhor representa o contraste " + types[a];
})
