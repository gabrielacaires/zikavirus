$(document).ready(function(){

	/*Slide mosquito*/
	$(".mosquito").fadeIn(500, function(){
		$(".mosquito").animate({
		marginLeft:"+=550px"
		},1500,function(){
			$(".mosquito").fadeOut(1000);
			}
		);
	});
	

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

	$(".navli").on("mouseenter", function(){
			$(".navli").css({
				borderStyle: "dashed",
				borderColor: "black"
			});
		});

	$(".navli").on("mouseleave", function(){
		$(".navli").css({
			borderStyle: "solid",
			borderColor: "white"
		});
	});

	$(".navli2").on("mouseenter", function(){
			$(".navli2").css({
				borderStyle: "dashed",
				borderColor: "black"
			});
		});

	$(".navli2").on("mouseleave", function(){
		$(".navli2").css({
			borderStyle: "solid",
			borderColor: "white"
		});
	});

		$(".navli3").on("mouseenter", function(){
			$(".navli3").css({
				borderStyle: "dashed",
				borderColor: "black"
			});
		});

	$(".navli3").on("mouseleave", function(){
		$(".navli3").css({
			borderStyle: "solid",
			borderColor: "white"
		});
	});

	$(".navli4").on("mouseenter", function(){
			$(".navli4").css({
				borderStyle: "dashed",
				borderColor: "black"
			});
		});

	$(".navli4").on("mouseleave", function(){
		$(".navli4").css({
			borderStyle: "solid",
			borderColor: "white"
		});
	});

	$(".navli5").on("mouseenter", function(){
			$(".navli5").css({
				borderStyle: "dashed",
				borderColor: "black"
			});
		});

	$(".navli5").on("mouseleave", function(){
		$(".navli5").css({
			borderStyle: "solid",
			borderColor: "white"
		});
	});

	$(".about").on("mouseenter", function(){
		$("h3").show();
	})

});