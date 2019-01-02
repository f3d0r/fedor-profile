var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');
var sendBtn = document.querySelectorAll('#send_button');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        if ($(element).get(0).id == "send_button") {
            var $form = $(".profile-card-form");
            $.post($form.attr("action"), $form.serialize()).then(function () {});
            $(".message_text").val("");
            grecaptcha.ready(function () {
                grecaptcha.execute('6LcKUIYUAAAAAPQNdqTu8a51UzN3UDrvA9erXYnR', {
                        action: 'action_name'
                    })
                    .then(function (token) {
                        console.log("TOKEN: " + token);
                    });
            });
        }
        card.classList.remove('active');
    });
});