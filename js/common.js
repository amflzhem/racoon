const pageDomain = "question";
const pageName = location.pathname.split(".html")[0];
const pageIndex = pageName.substr(pageName.length - 1, 1);
let checkedInputTagNum = 0;

document.addEventListener("DOMContentLoaded", function() {
    setCheckedTag();
});


function moveToNextPage(isIndex = false){
    if(isIndex){
        resetSessionStorage();
        location.href = pageDomain + "1.html";
        return;
    }

    if(!validateInput()){
        alert("보기를 선택해주세요.");
        return;
    }

    saveData();

    if(sessionStorage.length >= 5 && pageIndex === "5"){
        location.href = "loading.html";
        return;
    }

    location.href = pageDomain + (Number(pageIndex) + 1) + ".html";
}

function moveToPrevPage(){
    location.href = pageDomain + (Number(pageIndex) - 1) + ".html";
}

function validateInput(){
    const tags = document.getElementsByName("q" + pageIndex);
    const tagsLength = tags.length;

    for(let i = 0; i < tagsLength; i++){
        if(tags[i].checked){
            checkedInputTagNum = i;
            return true;
        }
    }

    return false;
}

function saveData(){
    sessionStorage.setItem(pageIndex, checkedInputTagNum);
}

function setCheckedTag(){
    let storageLength = sessionStorage.length;
    let storedKey;

    for(let i = 0; i < storageLength; i++){
        storedKey = sessionStorage.key(i); 

        if(storedKey === pageIndex){
            document.getElementsByName("q" + pageIndex)[sessionStorage.getItem(storedKey)].checked = true;
        }
    }
    
}

function resetSessionStorage(){
    const testKeys = Object.keys(sessionStorage);

    testKeys.forEach(function(e){
        sessionStorage.removeItem(e); 
    });
}