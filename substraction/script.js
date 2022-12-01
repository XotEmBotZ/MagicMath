
a=document.getElementById("a")
b=document.getElementById("b")
c=document.getElementById("c")
body=document.getElementById("body")


a.innerHTML=String(Math.floor(Math.random() * 1000)+1);
b.innerHTML=`-${String(Math.floor(Math.random() * 1000)+1)}`;
document.getElementById("check").addEventListener("click",(e)=>{
    console.log(parseInt(c.value));
    if (parseInt(c.value)==(parseInt(a.innerText)-parseInt(b.innerText.replace('-', '')))){
        console.log("Correct");
        body.classList.toggle("green")
        setTimeout(() => {
            body.classList.toggle("green");
            a.innerHTML = String(Math.floor(Math.random() * 100) + 1);
            b.innerHTML = `x${String(Math.floor(Math.random() * 100) + 1)}`;
        }, 2500)
    }else{
        body.classList.toggle("red")
        setTimeout(() => {
            body.classList.toggle("green");
            a.innerHTML = String(Math.floor(Math.random() * 100) + 1);
            b.innerHTML = `-${String(Math.floor(Math.random() * 100) + 1)}`;
        }, 2500)
    }
})