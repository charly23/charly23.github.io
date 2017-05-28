$(function()
    {
        var $user_data = {'nm':'admin', 'pw':'admin'};
        var $error_message = {'empty':'', 'wrong-password':'' };

        $( '.login__form .login__form-pad' ).on ( 'click', '.login__form-submit input', function()
            {
                var $login_pad = '';
                var $home_pad = '';

                var $name = $( '.login__form-name input' );
                if( $name.val().length !== 0 && $name.val() == $user_data['nm'] ) {
                    $( '.home__inner-top .user-name' ).text( $name.val() );
                    $name.removeClass( 'form-name-validate' );
                    $nm_login = 1;
                } else {
                    $name.addClass( 'form-name-validate' );
                    $nm_login = 0;
                }

                var $password = $( '.login__form-password input' );
                if( $password.val().length !== 0 && $password.val() == $user_data['pw'] ) {
                    $password.removeClass( 'form-password-validate' );
                    $pw_login = 1;
                } else {
                    $password.addClass( 'form-password-validate' );
                    $pw_login = 0;
                }

                if( $nm_login == 1 ) {
                    $( '.login__form' ).addClass( 'login-name-in' );
                    $( '.home__pad' ).addClass( 'login-name-in' );
                } else {
                    $( '.login__form' ).removeClass( 'login-name-in' );
                    $( '.home__pad' ).removeClass( 'login-name-in' );
                }

                if( $pw_login == 1 ) {
                    $( '.login__form' ).addClass( 'login-password-in' );
                    $( '.home__pad' ).addClass( 'login-password-in' );
                } else {
                    $( '.login__form' ).removeClass( 'login-password-in' );
                    $( '.home__pad' ).removeClass( 'login-password-in' );
                }

                return false;
            } 
        );

        $( '.login__form-name' ).on( 'keydown', 'input.login-name', function(event)
            {
                if( event.which == 13 ) {
                    $( '.login__form-submit input' ).click();
                }
            }
        );

        $( '.login__form-password' ).on( 'keydown', 'input.login-password', function(event)
            {
                if( event.which == 13 ) {
                    $( '.login__form-submit input' ).click();
                }
            }
        );

        // END
    }
);