/**
 * Created by skolbe on 16.05.16.
 */
function inputOne(e) {
    // if enter pressed and not empty input
     if(e.keyCode === 13 && /\S/.test(e.currentTarget.value)){
         alert(e.currentTarget.value);
         e.currentTarget.value = "";
    }
    return false;
}
function inputTwo(e) {
    document.getElementById("output2").innerHTML = e.currentTarget.value;
}
function inputThree(e) {
    //if enter pressed and not empty input
    if(e.keyCode === 13 && /\S/.test(e.currentTarget.value)){
        //create bullet point with input
        var list = document.createElement("li");
        var node = document.createTextNode(e.currentTarget.value);
        list.appendChild(node);
        
        // add bullet point to output divand clear input
        document.getElementById("output3").appendChild(list);
        e.currentTarget.value = "";
    }
}

var TodoList = [];

function getAuthor() {
    let authorList = ["Ruben","Tomtom","Kaiser","Sophie"];
    return authorList[Math.floor(Math.random() * authorList.length)];
}
function sortTodoList (sortKey) {
    var method = document.getElementById('selectSortingMethod').value;
    if (method == 'underscore') {
        var sortedList = sortTodoListWithUS(sortKey);
    }
    if (method == 'es6') {
        var sortedList = sortTodoListWithES6(sortKey);
    }
    printInputTodo(sortedList);
}

function sortTodoListWithUS(TodoList,sortKey) {
    var sortedTodoListWithUS =_.sortBy(TodoList,sortKey);
    console.log('sorted by',sortKey,'with underscore!');
    return sortedTodoListWithUS;
}


function sortTodoListWithES6(sortKey) {
    var sortedTodoListWithES = TodoList.sort(function (a,b) {
            if(sortKey === "author"){
                var x = a.author;
                var y = b.author;
            }
            if(sortKey === "date"){
                var x = a.date;
                var y = b.date;
            }
            if(sortKey === "name"){
                var x = a.name;
                var y = b.name;
            }
            return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log('sorted by', sortKey,'with es6!');
    return sortedTodoListWithES;
}


function deleteInputTodo(value){
    let index = _.findWhere(TodoList,{ date: value});
    TodoList.splice(index,1);
}

function setInputTodo(e) {
    if(e.keyCode === 13 && /\S/.test(e.currentTarget.value)) {
        var data = {
            name: e.currentTarget.value,
            author: getAuthor(),
            date: new Date()
        };
        TodoList.push(data);
        printInputTodo(TodoList);
        e.currentTarget.value = "";
    }
}
function printInputTodo(TodoList) {
    //clear element from leftover children
    var deleteNodes = document.getElementById("outputTodo");
    while (deleteNodes.firstChild) {
        deleteNodes.removeChild(deleteNodes.firstChild);
    }
    //create bullet point with input
    _.each(TodoList, function (data) {
        var list = document.createElement("li");
        var node = document.createTextNode(data.name +" | "  + data.author + " | " + data.date.toLocaleTimeString());
        list.appendChild(node);

        //create x icon which removes parent onclick and add to bullet point
        var delOpt = document.createElement("i");
        delOpt.onclick = function() {
            this.parentNode.parentNode.removeChild(list);
            deleteInputTodo('date',data.date);
        };
        var x = document.createTextNode(" X  ");
        delOpt.appendChild(x);
        list.appendChild(delOpt);
        // add bullet point with x icon to output div and clear input
        document.getElementById("outputTodo").appendChild(list);
    })
}