// Your JavaScript code here
function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}
