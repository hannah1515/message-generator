var statement = ["Definitely Not", "No", "Maybe", "Yes", "Of Course!"];
var button = $("button");

function random(){
  var answer = Math.floor(Math.random() * 4);
  return statement[answer];
  // document.getElementById('result').innerHTML = statement[answer]
}
// Math.floor(Math.random() * 4);

button.on("click",appendInfo)

function button(){
  var btn = $(".final");
  button.append(`
    <div class="gen">
    <p>${input.val()}</p>
    <button class="generate"> Generate </button>
    </div>`)
$(".generate").on("click", "generate", generateToDo);
}


  //when the .info-todo <div> exists and user clicks on the .delete <button>, call deleteToDo
}

// var  = $("");
// .append(`
//   <div class="">
//     <p>${input.val()}</p>
//     <button class=""> Generate </button>
//   </div>`);
// $("").on("click", ".generate", );
