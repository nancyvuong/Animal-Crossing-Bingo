//first populate the squares with randomized pictures/names
//create marked function which activates with onclick
//extra randomized which repopulates squares and also
//TEST CASE: make sure "" does not get into selected

var lines; //contains the loaded villagers.txt file

document.addEventListener("DOMContentLoaded", 
    function(event){
        fetch('data/villagers.txt')
        .then(response => response.text())
        .then((data) => {
            lines = data.split('\n');
            for(var line = 0; line < 9; line++){
                var squareid = "p" + line; 
                //selected.push(lines[Math.floor(Math.random() * lines.length)]);
                document.getElementById(squareid).innerHTML = lines[Math.floor(Math.random() * lines.length)];
              }
        })
    }
);

function marked(squareid){
    document.getElementById(squareid).style.backgroundColor='black';
}


function filled(){
    for(var line = 0; line < 9; line++){
        var squareid = "p" + line; 
        //selected.push(lines[Math.floor(Math.random() * lines.length)]);
        document.getElementById(squareid).innerHTML = lines[Math.floor(Math.random() * lines.length)];
      }
}