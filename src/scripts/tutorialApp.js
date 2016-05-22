/**
 * Created by skolbe on 16.05.16.
 */
function inputOne(e) {
    // if enter pressed and not empty input
     if(e.keyCode === 13 && /\S/.test(document.getElementById("input1").value)){
         alert(document.getElementById("input1").value);
   
         document.getElementById("input1").value = "";
    }
    return false;
}
function inputTwo() {
    var input2 = document.getElementById("input2").value;
    document.getElementById("output2").innerHTML = input2;
}
function inputThree(e) {
    var input3 = document.getElementById("input3").value;
    //if enter pressed and not empty input
    if(e.keyCode === 13 && /\S/.test(input3)){
        //create bullet point with input
        var list = document.createElement("li");
        var node = document.createTextNode(input3);
        list.appendChild(node);
        
        // add bullet point to output div
        var element = document.getElementById("output3");
        element.appendChild(list);
        
        document.getElementById("input3").value = "";
    }
}
function inputFour(e) {
    var input4 = document.getElementById("input4").value;
    //if enter pressed and not empty input
    if(e.keyCode === 13 && /\S/.test(input4)){
        //create bullet point with input
        var list = document.createElement("li");
        var node = document.createTextNode(input4);
        list.appendChild(node);
        
        //create x icon which removes parent onclick and add to bullet point
        var delOpt = document.createElement("i");
        delOpt.onclick = function() {this.parentNode.parentNode.removeChild(list);}
        delOpt.setAttribute("class","material-icons");
        delOpt.setAttribute("style","vertical-align: bottom; font-size: 100%;");
        var x = document.createTextNode("close");
        delOpt.appendChild(x);
        list.appendChild(delOpt);
        
        // add bullet point with x icon to output div
        var element = document.getElementById("output4");
        element.appendChild(list);

        document.getElementById("input4").value = "";
    }
}