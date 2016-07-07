var API_HOST = function() {
    var host = window.location.host;
    if (host.indexOf('localhost') !== -1 || host.indexOf('127.0.0.1') !== -1) {
        return 'http://localhost:5000';
    }
    else {
        return 'https://hackhealth.herokuapp.com';
    }
}();

function setupForm($form, path, callback) {
    var options = {
        url: API_HOST + path,
        success: callback
    };
    //$form.on('submit', function(e) {
    //    e.preventDefault();
    //});
    $form.ajaxForm(options);
}

$(function() {
    $("nav a").smoothScroll({
        preventDefault: true,
        offset: -50  // to account for nav bar height
    });

    setupForm($('.register-form'), '/register', function(response) {
        console.log(response);
    });

    // Wake up Heroku
    var image = new Image();
    image.src = API_HOST + '/pixel.gif';
});
