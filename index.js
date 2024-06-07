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
function addCurrentLinksToStorage() {
    let links = document.getElementsByClassName("iconContainer");
    let linksArrayString = '';
    let linksArray = Array.from(links);
    for (let i = 0; i < linksArray.length; i++) {
        let id = i;
        let link = linksArray[i].children[1].href;;
        let linkName = linksArray[i].children[1].innerHTML;
        let linkIcon = linksArray[i].children[0].src;
        console.log(" " + link + " " + linkName + " " + linkIcon);
        // create an array item out of this
        let linkArrayItem = {
            "id": id,
            "link": link,
            "linkName": linkName,
            "linkIcon": linkIcon

        }
        linksArrayString += JSON.stringify(linkArrayItem) + " ";
    }
   
    localStorage.setItem("links", linksArrayString);
}
    
function getLinksFromStorage() {
    let links = localStorage.getItem("links");
    let linksArray = links.split(" ");
    linksArray.pop();
    for (let i = 0; i < linksArray.length; i++) {
        let link = JSON.parse(linksArray[i]);
        let linkContainer = document.getElementsByClassName("container")[0];
        console.log(link);
    }
    console.log(linksArray);
    
}
function addNewLink () {
    let linkContainer = document.getElementsByClassName("container")[0];
    let google = document.getElementById("google");
    let newLink = document.createElement("div");
    newLink.classList.add("iconContainer");
    let newLinkIcon = document.createElement("img");
    newLinkIcon.classList.add("linkIcon");
    
    let newLinkAnchor = document.createElement("a");
    newLinkIcon.append(newLinkAnchor);
    newLink.append(newLinkIcon);
    linkContainer.insertBefore(newLink, google);

}
function removeLink(id) {
    let linkContainer = document.getElementsByClassName("container")[0];
    let link = document.getElementById("link"+id);
    linkContainer.removeChild(link);
    // change links around to follow the id of links
    let links = document.getElementsByClassName("iconContainer");
    let linksArray = Array.from(links);
    for (let i = 0; i < linksArray.length; i++) {
        linksArray[i].id = "link"+i;
    }

    
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
