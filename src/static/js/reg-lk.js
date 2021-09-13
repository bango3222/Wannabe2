$('body').on('click', '.input-info__input-password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});
$(document).ready(function(){
	$("#phone").mask("+7 (999)-999-99-99");
 });