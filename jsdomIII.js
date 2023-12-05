/*Let's create a simple to do application 
Show an unordered list of to-do's 
Show an input to enter a new to-do 
Show a button to add a to-do. When the button is clicked: 
The text from the input box is used to add a list item to the bottom of the list 
The text from the input box is cleared out.
When the user clicks on a list item, it is removed

Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.
*/

const form = document.querySelector("#toDoForm");
const input = document.querySelector("input");
const ul = document.querySelector("#list");

function createLi(){
const li = document.createElement ("li");
const span = document.createElement("span");
span.textContent = input.value;
li.appendChild (span);

return li;
}

form.addEventListener ("submit", (event) => {
    event.preventDefault();
    const li = createLi();
    ul.appendChild(li);
    form.reset();
});

ul.addEventListener("click", function(e){
    if(li = "click"){
        e.target.parentElement.removeChild(e.target);
    }
    });
    
/*ul.addEventListener("click", function(e){
        e.target.classList.add("myStyle");
    });

/*setTimeout(function myFunction3(){
    ul.addEventListener("click", function(e){
        if(li = "click"){
            e.target.parentElement.removeChild(e.target);
        }
        });
    }, 2000);

   /* if(e.target.classlist = "myStyle"){
        e.target.parentElement.removeChild(e.target);
    }
    */
   /*let li = document.getElementById("item").children;
let isClassPresent = li.classList.contains("myStyle");
    if(isClassPresent){
        e.target.parentElement.removeChild(e.target);
    }
    */