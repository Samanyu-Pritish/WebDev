function ffg() {
    let val = Math.random()*100
    let div = document.getElementById("div")
    if (val<50){
        document.body.style.color = "red"
    }
    else if (val<51 && val>49){
        document.body.style.color = "yellow"
    }
    else if (val>50){
        document.body.style.color = "green"
    }
    div.innerText = val
}