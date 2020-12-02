document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        determineType(calculateTest());
    }, 3500);
});

function calculateTest(){
    let finalScore = 0;
    const testKeys = Object.keys(sessionStorage);

    testKeys.forEach(function(e){
        if(!isNumber(e)){
            return;
        }

        if(e.length > 1){
            return;
        }

        finalScore += Number(sessionStorage.getItem(e)); 
    });

    return finalScore;
}

function determineType(score){
    let type;
    
    if(score <= 4){
        type = "rest";
    }else if(score <= 9){
        type = "";
    }else{
        type = "";
    }

    location.href = type + ".html";
}

function isNumber(value){
    return Number(value) !== NaN;
}