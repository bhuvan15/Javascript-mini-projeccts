let equation = document.querySelector(".equation-text");
let ans = document.querySelector(".ans-text");
let buttons = document.querySelectorAll(".buttons");
let deleteBtn = document.querySelector(".delete");

equation.innerText = "";
ans.innerText = "";

/* operator check */
let check = false;
let check_2 = true;
/* number check */
let check_1 = true;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.getAttribute("data-value");
         
        if(value == "+" || value == "*" || value == "/" || value == "%" ) {
            
            if(check && check_2) {
               
                check_1 = true;
                equation.style.color = "#fff";
                equation.innerText += value;
                check_2 = false;
                ans.innerText = eval(equation.innerText);
                
            }
                
        }
        else if(value == "-") {
                if(check_2) {
                    equation.style.color = "#fff";
                    equation.innerText += value;
                    ans.innerText = eval(equation.innerText);
                    check_1 = true;
                    check_2 = false;
                }
                
        }


        else if(value == "=") {
            ans.innerText = eval(equation.innerText);
            equation.innerText = ans.innerText;
            ans.innerText = "";
            equation.style.color = "rgb(7, 160, 7)";
            check_1 = false;
            

        }


        else if(value == "clear") {
            equation.innerText = "";
            ans.innerText = "";
            check = false;
            check_1 = true;
        }

          else {
            if(check_1) {
                equation.style.color = "#fff";
                check = true;
                check_2 = true;
                equation.innerText += value;
                ans.innerText = eval(equation.innerText);
            }
            
        }


    })
})



/* Delete Event Listener */

deleteBtn.addEventListener("click", function() {
    let newEquation = equation.innerText.toString();
    let length = newEquation.length;
 
    let finalEquation = newEquation.substr(0, length-1);
   
    equation.innerText = finalEquation;
    

})




/* Functions */

/* function getFormattedNumber(num) {
    let n = Number(num);
    let x = n.toLocaleString("en");
    console.log(x)
    return x;
} */