'use strict'

    $('#login').click(function(event) {
        console.log($('#password').val(), $('#username').val());
        $.ajax({
            url: '/signin',
            type: 'POST',
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function(data) {
                window.sessionStorage.bearerToken = 'Bearer ' + data.token;
                console.log('ddd');
            }
        })
    })

    $('#signup').click(function(event) {
        $.ajax({
            url: '/signup',
            type: 'POST',
            data: {
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                username: $('#username').val(),
                password: $('#password').val()

            },
            success: function(data) {
                window.sessionStorage.bearerToken = 'Bearer ' + data.token;
                console.log('ddd');
            }
        })
    })


// $.ajax({
//    url: "http://api.domain.app/products",
//    dataType : 'jsonp',
//    type: 'GET',
//    beforeSend : function(xhr) {
//        xhr.setRequestHeader("Accept", "application/json");
//        xhr.setRequestHeader("Content-Type", "application/json");
//        xhr.setRequestHeader("Authorization", window.sessionStorage.bearerToken);
//    },
//    error : function() {
//        // error handler
//    },
//    success: function(data) {
//        console.log(data);
//        return data;
//    }
// });
