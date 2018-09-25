var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
    console.log(element);
    element.addEventListener('click', function (e) {
        e.preventDefault();

        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function () {
            alert("Thank you!");
        });

        card.classList.remove('active');
    });
});