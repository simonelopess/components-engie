
function corStatus(){
    const status = document.querySelectorAll('.item-status')        ;
    for(var i = 0; i<status.length; i++){
        var item = status[i].innerHTML;
        console.log(item);
        if(item != "Ligado"){
            status.classList.add('.green')
        } else 
            status.classList.add('.red');
    }
}