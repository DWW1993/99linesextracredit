var friends = ["Jordan", "Reagan", "Will", "Corey", "Roxie"];

document.addEventListener("DOMContentLoaded", function(){
    var friend = document.getElementsByClassName("friend");
    var btn = document.createElement("button");
    btn.className = "btn1";
    var btntxt = document.createTextNode("Friends");
    btn.appendChild(btntxt);
    document.body.appendChild(btn);

    btn.addEventListener("click", function(){
        for (var f = 0; f < friends.length; f++) {
            var fdiv = document.createElement("div");
            fdiv.className = "friend";
            var fh3 = document.createElement("h3");
            fdiv.appendChild(fh3);
            var fname = document.createTextNode(friends[f]);
            fh3.appendChild(fname);
            document.body.appendChild(fdiv);
            console.log(fdiv);
            var friend = document.getElementsByClassName("friend");
            var btn2 = document.createElement("button");
            var btntxt = document.createTextNode("Sing!");
            btn2.appendChild(btntxt);
            fdiv.appendChild(btn2);
            var playSong = btn2.addEventListener("click", function(){
                for (var b = 99; b > 0; b--) {
                    if(b >= 3) {
                        var par = document.createElement("p"); 
                        fdiv.appendChild(par);
                        var song = document.createTextNode(b + " lines of code in the file, " + b + " lines of code; " + friends[0] + " strikes one out, clears it all out, " + (b - 1) + " lines of code in the file");
                        par.appendChild(song);
                    } else if(b === 2) { 
                        var par = document.createElement("p"); 
                        fdiv.appendChild(par);
                        var song = document.createTextNode(b + " lines of code in the file, " + b + " lines of code; " + friends[0] + " strikes one out, clears it all out, " + (b - 1) + " line of code in the file");
                        par.appendChild(song);
                    } else {
                        var par = document.createElement("p"); 
                        fdiv.appendChild(par);
                        var song = document.createTextNode(b + " line of code in the file, " + b + " line of code; " + friends[0] + " strikes one out, clears it all out, no more lines of code in the file");
                        par.appendChild(song);
                    }
                }
            }); 
            fdiv.appendChild(playSong);
        }
    });
});