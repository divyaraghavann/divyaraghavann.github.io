$(document).ready(function() {
	// Sticky Header
	$(window).scroll(function() {
	    if ($(window).scrollTop() > 100) {
	        $('.main_h').addClass('sticky');
	    } else {
	        $('.main_h').removeClass('sticky');
	    }
	});

	// Mobile Navigation
	$('.mobile-toggle').click(function() {
	  $('.main_h').toggleClass('open-nav');
	});

	// Make the nav disappear after you click nav
	$('.main_h li a').click(function() {
	    if ($('.main_h').hasClass('open-nav')) {
	        $('.main_h').removeClass('open-nav');
	    }
	});

	// navigation scroll lijepo radi materem
	$('nav a').click(function(event) {
	    var id = $(this).attr("href");
	    var offset = 65;
	    var target = $(id).offset().top - offset;
	    $('html, body').animate({
	        scrollTop: target
	    }, 500);
	    event.preventDefault();
	});

	//------------------------------------------
	// FORMS
	//------------------------------------------

	// Form 1: Landing page builder
	$("#lp-form").submit(function(event){
		event.preventDefault();
		var restaurantName = $('#name').val();
		var restaurantTag = $('#tag').val();
		var restaurantHours = $('#hours').val();
		var restaurantLocation = $('#location').val();
		var restaurantStory = $('#story').val();
		console.log(restaurantName);
		console.log(restaurantTag);
		console.log(restaurantStory);
		$(".dynamic-rname").html(restaurantName);
		$(".dynamic-rtag").html(restaurantTag);
		$(".dynamic-hours").html(restaurantHours);
		$(".dynamic-location").html(restaurantLocation);
		$(".dynamic-story").html(restaurantStory);
		$("#lp-button").val('LANDING PAGE COMPLETED');
	});

	// Form 2: Menu builder
	$("#menu-button").click(function(event){
		event.preventDefault();
		var itemName = $('#item-name').val();
		var itemPrice = $('#item-price').val();
		var itemDesc = $('#item-desc').val();
		console.log(itemName);
		console.log(itemPrice);
		console.log(itemDesc);
		$('#item-name').val('');
		$('#item-price').val('');
		$('#item-desc').val('');
		$("#menu-button").val('ADD ANOTHER MENU ITEM');
	});

	$("#menu-form").submit(function(event){
		event.preventDefault();
		$("#c-menu-button").val('MENU COMPLETED');
	});

	// Form 3: Reservations builder
	$("#resv-form").submit(function(event){
		event.preventDefault();
		var openTableWidget = $('#opentable-widget').val();
		console.log(openTableWidget);
		$(".dynamic-opentable").html(openTableWidget);
		$("#resv-button").val('RESERVATIONS COMPLETED');
	});

	// Form 4: Contact builder
	$("#contact-us-form").submit(function(event) {
		event.preventDefault();
		var restaurantPhone = $('#phone').val();
		var restaurantEmail = $('#email').val();
		console.log(restaurantPhone);
		console.log(restaurantEmail);
		$(".dynamic-phone").html(restaurantPhone);
		$(".dynamic-email").html(restaurantEmail);
		$("#contact-us-button").val('CONTACT COMPLETED');
	});

	$('.generate-button').click(function(event) {
		event.preventDefault();
		var restaurantHTML = $('#new-html').html();
		console.log(restaurantHTML);
		$('body').html(restaurantHTML);
		$('.restaurant').removeClass('restaurant-in-progress');
		$(window).scrollTop(0);
		document.title = $(".dynamic-rname").html();
	});
});