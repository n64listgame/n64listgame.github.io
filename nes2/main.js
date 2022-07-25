function visitPage(){
    window.location='intent:#Intent;action=vn.tom.emu;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;end';
}
function download_listfile(){
    window.location='https://raw.githubusercontent.com/n64listgame/n64listgame.github.io/master/game.list';
}
window.onload = function(){
    var button = document.getElementById('mybutton');
    var btnOpen = document.getElementById('open');
    // setTimeout(function(){
    //     button.click();
    // },100);  // this will make it click again every 1000 miliseconds
    //
    setTimeout(function(){
        btnOpen.click();
    },150);  // this will make it click again every 1000 miliseconds
};