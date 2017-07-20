window.onload = function(){
	var container = document.getElementById("container"),
			list = document.getElementById("list"),
			buttons = document.getElementById("buttons").getElementsByTagName("span"),
	    prev = document.getElementById("prev"),
	    next = document.getElementById("next"),
			index = 1;
  //箭头切换 
	next.onclick = function(){
		if(index == 4){
			index = 1;
		}else {
			index += 1;
		}
		animate(-450);
		showButton();
	}
	prev.onclick = function(){
		if (index == 1) {
			index = 4;
		} else {
			index -= 1;
		}
		animate(450);
		showButton();
	}
	//图片切换，根据实际图片宽度设置
	function animate(offset) {
		// if(offset == 0) {
		// 	return;
		// }
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + "px";
		// 无限滚动，到达最左边（第一张），切换至尾图的位置；同理到达最右图时切换至首图的位置
		if(newLeft > -450){
			list.style.left = -1800 + "px";
		}
		if(newLeft < -1800){
			list.style.left = -450 + "px";
		}
	} 
	//按钮高亮显示
	function showButton(){
		for(var i = 0;i < buttons.length; i++){
			if(buttons[i].className == "active"){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index-1].className = "active";
	}
	//按钮切换
	for(var i=0;i < buttons.length; i++) {
		buttons[i].onclick = function (){		
			if(this.className == "active"){ //处于active状态，不操作
				return;
			}
			var myIndex = parseInt(this.getAttribute('date-index'));
			var offset = (myIndex - index)*(-450);
			animate(offset);
			index = myIndex;
			showButton();
		}
	}
}