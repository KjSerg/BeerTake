
$('input[type="email"]').attr('data-reg', '^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$');

$('form').on('submit', function (e) {
    e.preventDefault();
    let ths = $(this),
        test = true,
        thsInputs = ths.find('input');

    thsInputs.each(function () {
        let thsInput = $(this),
            thsInputType = thsInput.attr('type'),
            thsInputVal =  thsInput.val(),
            inputReg = new RegExp(thsInput.data('reg')),
            inputTest = inputReg.test(thsInputVal);

        if (thsInput.attr('required')) {
            if (thsInputVal.length <= 0) {
                test = false;
                thsInput.addClass('error');
                thsInput.focus();
            } else {
                thsInput.removeClass('error');
                if (thsInput.data('reg')) {
                    if ( inputTest == false ) {
                        test = false;
                        thsInput.addClass('error');
                        thsInput.focus();
                    } else {
                        thsInput.removeClass('error');
                    }
                }
            }
        }
    });
    if ( test ) {
        let form_data = ths.serialize();
        $.ajax({
            url: ths.attr('action'),
            type: 'POST',
            data: form_data,
            success: function(form_data) {
                $.fancybox.close();
                $.fancybox.open($('#thanks'));
                ths.trigger('reset');
                setTimeout(()=>{
                    $.fancybox.close();
                }, 3000);
            },
            error:  function(xhr, str){
                console.log('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }

});