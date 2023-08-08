 // javascript code goes here
 let ul = document.getElementById("recipeList")
 let li = document.createElement("li")

 let apiUrl = "https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes";
fetch(apiUrl)
.then(res=>{return res.json()})
 .then(data => {
   console.log(data)
   for(let i=0; i<data.length; i++)
   {
     console.log(data[i].title)
     // ul.innerHTML += data[i].title + "<br>";
     li.innerHTML = data[i].title;
   }
 })



