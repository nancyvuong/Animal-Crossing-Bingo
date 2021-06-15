//first populate the squares with randomized pictures/names
//create marked function which activates with onclick
//extra randomized which repopulates squares and also 

document.addEventListener("DOMContentLoaded", 
    function(event){

        function fill(){

        }

        document.querySelector("button")
        .addEventListener("click", fill);
    }
);

function fill(){
    var fr = new FileReader();
    var villagers = fr.readAsArrayBuffer();
    var villager;


}
function marked(squareid){
    document.getElementById(squareid).style.backgroundColor='black';
}