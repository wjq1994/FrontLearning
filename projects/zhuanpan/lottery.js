var lottery = {
	ch: 0
}
 
function clickBtn() {
	var n1 = Math.floor(Math.random()*8+1);
	var n2 = Math.floor(Math.random()*4+4);
	lottery.ch = 45*n1 + 360*n2 + 22.5;
	$(this).unbind().css("cursor", "wait");
	$('.lottery').css({
		"transition": "all 8s ease",
		"transform": "rotate("+lottery.ch+"deg)",
		"-webkit-transform": "rotate("+lottery.ch+"deg)"
	});
}
$('.btn').bind('click', clickBtn);
 
$('.lottery')[0].addEventListener('transitionend',function(){
	$('.btn').bind('click',clickBtn).css("cursor","pointer");
	setTimeout(result,2000);
})
 
function result(){
	alert("点击确认，再次开始游戏！");
	$('.lottery').css({
		"transition":"none",
		"transform":"none",
		"-webkit-transform":"none"
	});
}