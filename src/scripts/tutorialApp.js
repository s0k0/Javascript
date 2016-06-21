/**
 * Created by skolbe on 16.05.16.
 */
function getDate() {
    var date = new Date(unix_timestamp*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

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
function inputFour(e) {
    //if enter pressed and not empty input
    if(e.keyCode === 13 && /\S/.test(e.currentTarget.value)){
        //create bullet point with input
        var list = document.createElement("li");
        var node = document.createTextNode(e.currentTarget.value);
        list.appendChild(node);

        //add local time and date
        var now = new Date().toString();
        console.log(now);
        var date = document.createTextNode(",  "+now+"  :");
        list.appendChild(date);

        //create x icon which removes parent onclick and add to bullet point
        var delOpt = document.createElement("i");
        delOpt.onclick = function() {this.parentNode.parentNode.removeChild(list);};
        var x = document.createTextNode("  X  ");
        delOpt.appendChild(x);
        list.appendChild(delOpt);


        // add bullet point with x icon to output div and clear input
        document.getElementById("output4").appendChild(list);
        e.currentTarget.value = "";
    }

}