function addUser() {
    $('#add-form').on('submit', function(event) {
        $.ajax({
                url: '/',
                type: 'POST',
                data: {
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    username: $('#username').val()
                },
                success: function(data) {
                    console.log('data');
                }
            })
    });
}

addUser();