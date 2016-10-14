function NameSong() {
    var name = document.getElementById("myname").value;
    var miniName = name.toString().substring(1);
    var toCheck = name[0].toLowerCase();
    console.log(toCheck);
    console.log(name[0]);
    if (toCheck == "a" || toCheck == "e" || toCheck == "i" || toCheck == "o" || toCheck == "u") {
        document.getElementById("nameSong").innerHTML = name + " " + name + " bo-b" + name.toLowerCase() + " bannana fanna fo-f" + name.toLowerCase() + " fi fi fo f" + name.toLowerCase() + "... " + name + "!";
    } else {
        document.getElementById("nameSong").innerHTML = name + " " + name + " bo-b" + miniName + " bannana fanna fo-f" + miniName + " fi fi fo f" + miniName + "... " + name +"!";
    }
}
document.getElementById("mybutton").onclick = NameSong;