(function(){
    let scr = document.querySelector('.scr');
    let btttn = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clr');
    let equal = document.querySelector('.btn-eq');

    btttn.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            scr.value += value;
        })
        
});

equal.addEventListener('click',function(e) {
    if(scr.value === ''){
        scr.value = "Please Enter Inputs";
    }
    else{
        equal.addEventListener('click', function(e) {
            let answer = eval(scr.value);
            scr.value = answer;
        });
    }
})

clear.addEventListener('click', function(e){
    scr.value = "";
})


})();