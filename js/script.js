const notice = document.getElementById("notice");

const item = document.getElementById("item"); 
const amount = document.getElementById("amount"); 
const button =document.getElementById("button"); 

const purchased = document.getElementById("purchased"); 
const pending = document.getElementById("pending"); 
const excluded = document.getElementById("excluded"); 

const listUl = document.getElementById("listUl"); 

var all = 0;
var allPurchased = 0;
var allExcluded = 0;

button.addEventListener("click", function() {

    if(item.value === "" || amount.value === "") {
        notice.textContent = "Todos os campos devem ser preenchidos!";
    } else {
        notice.textContent = "";

        all++;
        pending.textContent = `${all} íten(s) pendente(s)!`;

        const li = document.createElement("li");
        li.classList.add("list");

        const newItemAmount = document.createElement("span");
        newItemAmount.textContent = ` ${item.value.charAt(0).toUpperCase() + item.value.slice(1)} ` + `${amount.value}`;

        const btnPurchased = document.createElement("button");
        btnPurchased.textContent = "Comprado";
        btnPurchased.classList.add("btn");

        const btnExcluded = document.createElement("button");
        btnExcluded.textContent = "Excluir";
        btnExcluded.classList.add("btn");

        const divBtn = document.createElement("div");
        divBtn.classList.add("btn-container");

        btnPurchased.addEventListener("click", function() {
            if(all > 0) {
                newItemAmount.style.textDecoration = "line-through";
                allPurchased++;
                all--;
                purchased.textContent = `${allPurchased} iten(s) comprado(s)!`;
                pending.textContent = `${all} iten(s) pendente(s)!`;
                btnPurchased.disabled = true;
            };
        });

        btnExcluded.addEventListener("click", function() {
            li.remove();
            allExcluded++;
            all--;
            excluded.textContent = `${allExcluded} iten(s) excluído(s)!`;
            pending.textContent = `${all} iten(s) pendente(s)!`;
            btnExcluded.disabled = true;
        });

        listUl.appendChild(li);

        li.appendChild(newItemAmount);

        divBtn.appendChild(btnPurchased);
        divBtn.appendChild(btnExcluded);

        li.appendChild(divBtn);
        
        item.value = "";
        amount.value = "";
    
    };
});
