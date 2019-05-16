let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

let next = document.getElementsByTagName("button")[0];

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
        'value': '2'
        [
            "A obra representa um contraste claro-escuro",
            "A obra não representa um contraste claro-escuro"
        ]
    }
]

image1.addEventListener("click", function(){
    let src = document.getElementById("image1").getAttribute("src");
    let aux = src.split("/")[1].substring(0, 3);
    let position = aux.split("_")[0];
    let value = aux.split("_")[1];
    if(value == "r"){
        responseText = responses[position - 1]
        messageResponse.innerHTML = responseText.list[0];
        iconResponse.style.backgroundColor = "green";
        icon.classList.add("fa-check")
    }
    console.log(value)
    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

image2.addEventListener("click", function(){
    let src = document.getElementById("image2").getAttribute("src");
    let aux = src.split("/")[1]
    let value = aux.substring(0, 3);
    console.log(value)
    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

next.addEventListener('click', function(){
    let src1 = document.getElementById("image1").getAttribute("src");
    let src2 = document.getElementById("image2").getAttribute("src");
    select.style.display='block';
    response.style.display='none';
    image1.setAttribute('src', src2);
})
