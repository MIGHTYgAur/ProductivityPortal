const inp = document.getElementById("inpbar");
const lst = document.getElementById("Lstitem");

function taskadd(){
    if(inp.value === ''){
        alert("Task must have a name");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        lst.appendChild(li);
        let cross = document.createElement("cross")
        cross.innerHTML = "\u00d7"
        li.appendChild(cross)
    }
    inp.value = "";
    saveData();
}
lst.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("tick");

    }
    if(e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
    }
},false);

