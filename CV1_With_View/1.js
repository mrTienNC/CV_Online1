$(document).ready(function(){

	$('nav ul li a').click(function(){
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
	});


	
	//Isotope

	$hieuung = $('.filter-container').isotope({
		itemSelector: '.filter-item',
	  	layoutMode: 'masonry'
	});
	$hieuung.imagesLoaded().progress(function(){
		$hieuung.isotope('layout');
	});

	$('.simplefilter li').click(function(){
			$('.simplefilter li').removeClass('active');
			$(this).addClass('active'); //het xu ly chuyen mau


			tendanhmuc = $(this).attr('href');
			// console.log(tendanhmuc);
			$hieuung.isotope({filter:tendanhmuc})

			return false;
		});
	$('#nav').scrollspy({offset : -25});
	$('body').scrollspy({target : "#nav"});
})