 let btn = document.querySelector("button");
 let inp = document.querySelector("input");
 let result = document.querySelector("h1");



 btn.onclick = ()=>{

    let today = new Date();
    let user = new Date(inp.value);

    
    let todaydate = today.getDate();
    let tomonth=today.getMonth();
    let yearnow=today.getFullYear();
    


    let usertoday = user.getDate();
    let usermonth = user.getMonth();
    let useryear =  user.getFullYear();



    const diffrence = {
        days:todaydate - usertoday,
        months:tomonth - usermonth,
        years:yearnow - useryear

    }

    result.innerHTML = "Your age is " + todaydate + "days" + tomonth + " month" + yearnow + "years";

 }