$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({ top: 240, left: vw - 350 }, 500);
		$('#b22').animate({ top: 240, left: vw - 250 }, 500);
		$('#b33').animate({ top: 240, left: vw - 150 }, 500);
		$('#b44').animate({ top: 240, left: vw - 50 }, 500);
		$('#b55').animate({ top: 240, left: vw + 50 }, 500);
		$('#b66').animate({ top: 240, left: vw + 150 }, 500);
		$('#b77').animate({ top: 240, left: vw + 250 }, 500);
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(4000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b8').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b9').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopNine();
		});
	}
	function loopTen() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b10').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTen();
		});
	}

	function loopOneR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopOneR();
		});
	}
	function loopTwoR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopTwoR();
		});
	}
	function loopThreeR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopThreeR();
		});
	}
	function loopFourR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopFourR();
		});
	}
	function loopFiveR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopFiveR();
		});
	}

	function loopSixR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopSixR();
		});
	}
	function loopSevenR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopSevenR();
		});
	}
	function loopEightR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b8r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopEightR();
		});
	}
	function loopNineR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b9r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopNineR();
		});
	}
	function loopTenR() {
		var randRight = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b10r').animate({ right: randRight, bottom: randtop }, 10000, function () {
			loopTenR();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b3,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b1r,#b4r,#b5r,#b7r,#b9r').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4,#b6,#b8,#b10').addClass('balloons-rotate-behaviour-two');
		$('#b2r,#b3r,#b6r,#b8r,#b10r').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopOneR();
		loopTwoR();
		loopThreeR();
		loopFourR();
		loopFiveR();
		loopSixR();
		loopSevenR();
		loopEightR();
		loopNineR();
		loopTenR();
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});


	$('#wish_message').click(function () {
		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
		$('#b1r,#b2r,#b3r,#b4r,#b5r,#b6r,#b7r,#b8r,#b9r,#b10r').hide();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		$('#b8').attr('id', 'b88')
		$('#b9').attr('id', 'b99')
		$('#b10').attr('id', 'b1010')
		$('#b11').animate({ top: 240, left: vw - 500 }, 500);
		$('#b22').animate({ top: 240, left: vw - 400 }, 500);
		$('#b33').animate({ top: 240, left: vw - 300 }, 500);
		$('#b44').animate({ top: 240, left: vw - 200 }, 500);
		$('#b55').animate({ top: 240, left: vw - 100 }, 500);
		$('#b66').animate({ top: 240, left: vw + 0 }, 500);
		$('#b77').animate({ top: 240, left: vw + 100 }, 500);
		$('#b88').animate({ top: 240, left: vw + 200 }, 500);
		$('#b99').animate({ top: 240, left: vw + 300 }, 500);
		$('#b1010').animate({ top: 240, left: vw + 400 }, 500);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
				i = i + 1;
				$("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
				if (i == 15) {
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
						$('#big_heart').fadeIn('slow');
						$('#reload').fadeIn('slow');
					});

				}
				else {
					msgLoop(i);
				}
			});
		}

		msgLoop(0);
	});

	$('#big_heart').click(function() {
		window.open('./heart.html');
	});	

	$('#reload').click(function() {
		location.reload()
	});	
});




//alert('hello');