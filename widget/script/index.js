$(function(){
	var tab_title_item = $('.tab_title li');
	var tab_box = $('.tab_content li');
	function removeActive(){//清除样式
		tab_title_item.removeClass('active');
		tab_box.removeClass('active');
	}
	tab_title_item.first().addClass('active');
	tab_box.first().addClass('active');
	tab_title_item.each(function(i,e){//选项卡切换
		$(e).click(function(){
			removeActive();
			$(this).addClass('active');
			tab_box.eq(i).addClass('active');
		});
	});
	var dl_count = $('.tab_content dl').length;
	var list_num = $('.tab_title li').first().data('num',dl_count); 
});
