function reply_click(clicked_id){
    if(clicked_id == "btn1"){
        document.getElementById(clicked_id).style.color = "#00ff00";
        setTimeout(function() { alert("정답입니다!"); }, 1000);
        setTimeout(function() {  
            window.open('','_self').close(); }, 3000);
    }
    else{
        document.getElementById(clicked_id).style.color = "#db0d36";
        setTimeout(function() { alert("오답입니다.. 정답은 "); }, 1000);
        setTimeout(function() { window.open('','_self').close(); }, 3000);
    }
}
//$(".stop").on("click", function(){
//	$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//});