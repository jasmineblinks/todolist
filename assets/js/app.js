const toDo = () => {
    let item = document.getElementById("my_list").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("my_list").value = "";
    li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
    if (e.keyCode === 13) {
     return toDo();
    }
  };