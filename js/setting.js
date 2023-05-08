$(document).ready(function(){
    const storedSetting = localStorage.getItem("setting"); 
    let setting = storedSetting || "setting1";
    document.getElementById("myImg").src = "img/" + setting + ".png";
})

function changeSetting(){
    console.log("changeSetting");
    const storedSetting = localStorage.getItem("setting"); 
    let setting = storedSetting || "setting1";
    switch(setting){
        case "setting1":
            setting = "setting2";
            break;
        case "setting2":
            setting = "setting3";
            break;
        case "setting3":
            setting = "setting1";
            break;
    }
    localStorage.setItem("setting", setting);
    const storedRaties = localStorage.getItem(setting);
    const raties = storedRaties ? JSON.parse(storedRaties) : (CONFIG.raties);
    localStorage.setItem('raties', JSON.stringify(raties));
    document.getElementById("myImg").src = "img/" + setting + ".png";
}