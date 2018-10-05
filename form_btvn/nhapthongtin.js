$('#submit').click(function(){
	for ( var i = 1; i<=5; i++) {
		if($('#a'+i).val() == ""){
			$('.class'+i).html('Vui lòng điền thông tin');
		} else {
			$('.class'+i).html('');
			if ($('#a3').val() > $('#a2').val()) {
				$('.class2').html('Số trẻ em không được lớn hơn số người lớn');
			} else {
				$('.class2').html('');
			}
			var today = Date.now();
			var daycome = new Date($('#a4').val());
			var dayleave = new Date($('#a5').val());
			if (daycome < today) {
				$('.class4').html('Ngày đến phải lớn hơn hoặc bằng ngày hiện tại');
			} else {
				$('.class4').html('');
			}
			if (dayleave < daycome) {
				$('.class5').html('Ngày đi phải lớn hơn hoặc bằng ngày đến');
			} else {
				$('.class5').html('');
			}
		}
	}
});