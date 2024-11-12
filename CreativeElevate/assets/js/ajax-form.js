$(function() {
	$('#contact-form').on('submit', function(e) {
			e.preventDefault();

			var formData = $(this).serialize();

			$.ajax({
					type: 'POST',
					url: $(this).attr('action'),
					data: formData,
					dataType: 'json'
			})
			.done(function(response) {
					if (response.success) {
							$('#form-messages').removeClass('error').addClass('success').text(response.success);
							$('#contact-form')[0].reset();
					} else if (response.error) {
							$('#form-messages').removeClass('success').addClass('error').text(response.error);
					} else {
							$('#form-messages').removeClass('success').addClass('error').text('An unexpected response was received.');
					}
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
					console.log("AJAX request failed:", textStatus, errorThrown);
					var errorMessage = 'An error occurred. Please try again.';
					if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
							errorMessage = jqXHR.responseJSON.error;
					} else if (jqXHR.responseText) {
							errorMessage = jqXHR.responseText;
					}
					$('#form-messages').removeClass('success').addClass('error').text(errorMessage);
			});
	});
});