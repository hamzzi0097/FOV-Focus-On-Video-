{/* <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script> */}

let sentence = [['이 사람은 __이다', '바보','사랑','부자'], ['1+1은__이다.', '2','3','10','14'], ['가나가다라___호호하하', '마가','무비','마비']];
// const timestamp = [4,21,31];
var count =0;

function reply_click(clicked_id){
    if(clicked_id == "btn1"){
        document.getElementById(clicked_id).style.color = "#00ff00";
        setTimeout(function() { alert("정답입니다!"); }, 1000);
        setTimeout(function() {  window.close(); }, 3000);
        count++;
    }
    else{
        document.getElementById(clicked_id).style.color = "#db0d36";
        setTimeout(function() { alert("오답입니다.. 정답은 ") }, 1000);
        setTimeout(function() { window.close(); }, 3000);
        count++;
    }
}
$(".stop").on("click", function(){
	$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

