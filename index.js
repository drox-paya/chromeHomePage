let currentTheme = "dark";
function switchTheme() {
    if (currentTheme === "dark") {
        currentTheme = "light";
        console.log("test");
    } else {
        currentTheme = "dark";
    }
    document.getElementById("bodyTheme").setAttribute("data-theme", currentTheme);
    
}
function getTheme() {
    return currentTheme;
}

document.addEventListener("DOMContentLoaded", function(){
    
    console.log("DOM Loaded");
    let daynightButton = document.getElementsByClassName("dayNightButton");
    let dayNightButtonArray =  Array.from(daynightButton);

    console.log(daynightButton)
    dayNightButtonArray.forEach((element) => element.addEventListener("click", function() {
        switchTheme();
    }))




})
