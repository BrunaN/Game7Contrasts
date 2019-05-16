let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

let next = document.getElementsByTagName("button")[0];

let select = document.getElementsByClassName("select")[0];
let response = document.getElementsByClassName("response")[0];

let imageResponse = document.getElementById("response");

image1.addEventListener("click", function(){
    let src = document.getElementById("image1").getAttribute("src");
    select.style.display='none';
    response.style.display='flex';
    imageResponse.setAttribute('src', src);
});

image2.addEventListener("click", function(){
    let src = document.getElementById("image2").getAttribute("src");
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
