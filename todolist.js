let todotext = document.getElementById("todotext");   //get the elements, input field text, button and list part 
let todobutton = document.getElementById("todobutton");
let todolist = document.getElementById("list");

todobutton.addEventListener('click', function () {   //what happens when u click the button
    var paragraph = document.createElement("p");      //a p element id created 
    todolist.appendChild(paragraph);                //append this p element inside the todolist
    paragraph.innerText = todotext.value;       //the value of the text field is stored in paragraph
    
    todotext.value = "";  //the input field becomes empty after pressing the button
    paragraph.addEventListener('click', function () {       //weh u click on the paragraph(elemnet in the list) 
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "red";
    })
    paragraph.addEventListener('dblclick', function () { //on double click
        todolist.removeChild(paragraph);
    })
})