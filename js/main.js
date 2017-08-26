$(document).ready(function() {
	$('input[name="group1"]').on('change', function(){
		var value = $(this).val();
		if (value == 1) {
			$('.description_what_study').removeClass('hide');
		} else {
            $('.description_what_study').addClass('hide');
		}
	});

	$('form#form').on('submit', function(e){
		e.preventDefault();
			
		alert("enviar");
	});
});