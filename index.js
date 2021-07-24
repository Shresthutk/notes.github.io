console.log('This is console');
display();

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log('button clicked');
  let texpr = document.getElementById('textarea');
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(texpr.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  texpr.value = "";
  display();
})

function display() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let sel = "";
  notesObj.forEach(function (element, index) {
    sel += ` </div>
  <div class="notesbox">
  <div class="notesdisplay">${element}</div>
  <button class="dlt" id=${index} onclick="dltnotes(this.id)">Delete Note</button>
</div>`
  });
let notesElm=document.getElementById('box');
if(notesObj.length!=0){
  notesElm.innerHTML=sel;
}
else{
  notesElm.innerHTML="Nothing to show here..."
}
}

function dltnotes(index) {
  console.log("delete button used");
  console.log(`The id of button is ${index}`)
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  display();
}

