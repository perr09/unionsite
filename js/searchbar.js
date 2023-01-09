var input = document.getElementById("search-text") ;
var submitButton = document.getElementById("search-submit") ;

submitButton.addEventListener("click", gotoTV) ;

input.addEventListener("keypress", function(keyevent) {
    if (keyevent.key == "Enter") {
       document.getElementById("search-submit").click() ;
    }
}) ;

function gotoTV() {
    let TVpre = "https://union510inc.shoptruevalue.com/search/alphabet-soup?keyword=" ;
    let TVpost = "&limit=48&sort=relevancy&in_stock_only=1&page=1" ;
    let userSearchVal = document.getElementById("search-text").value.trim() ;
    let searchVal = encodeURI(userSearchVal) ;
    window.location.assign(TVpre + searchVal + TVpost) ;
}
