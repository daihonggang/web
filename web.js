$(function(){
	var numIndex = 0;
	$(".nav").click(function(){
		$(this).addClass("w1")
		.siblings().removeClass("w1");
	});

	var $div_li = $("[name=rad]:input");
	$div_li.click(function(){
		$(this).attr("checked",true).end()
		.siblings().attr("checked",false);
		var index = $div_li.index(this);
		numIndex = index;

		$(".ul1 li")
		.eq(index).show()
		.siblings().hide();		
	});

	$('#next').click(function() {
		if (numIndex<2)
			numIndex++;
		$(".ul1 li")
		.eq(numIndex).show()
		.siblings().hide();	

		$div_li.eq(numIndex).siblings().attr("checked",false).end().attr("checked",true);
	});

	$('#prev').click(function() {
		if (numIndex>0)
			numIndex--;
		$(".ul1 li")
		.eq(numIndex).show()
		.siblings().hide();	

		$div_li.eq(numIndex).siblings().attr("checked",false).end().attr("checked",true);
	});
})
