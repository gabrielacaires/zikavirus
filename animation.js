$(document).ready(function(){

	$(".about").on("mouseenter", function(){

		$(".top").css({
			height: 200
		});

		$(".header").css({
			height: 200
		});

		$("h1").css({
			top: 55
		});
	});

	$("li").on({
		mouseenter: function(){
			$("li").css({
				borderWidth: "1px",
				borderStyle: "dashed"	
			})
		},
		mouseleave: function(){
			$("li").css({
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "white"	
			})
		}
	});

});