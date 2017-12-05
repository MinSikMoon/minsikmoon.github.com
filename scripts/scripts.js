$(function() {
		$('.modal').on('hidden.bs.modal', function() {
			var curIframe = $(this).find('iframe');
			curIframe.attr('src', curIframe.attr('src'));
		});
});