let box = document.querySelector("#box");
let btn1 = document.querySelectorAll("button")[0]
let btn2 = document.querySelectorAll("button")[1]
let h1 = document.querySelector("h1")
let para = document.querySelector("p");

function remove()
{
    h1.innerHTML = ""
    para.innerHTML = ""
    para.style.height = "200px"
}
function show()
{
    h1.innerHTML = "this is a heading"
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ea eius aliquid similique fuga exercitationem placeat, voluptatibus quae porro mollitia quam quidem, quasi voluptas error? Culpa exercitationem non numquam modi"
    para.style.height = "200px"
}