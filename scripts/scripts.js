$(function()
    {
        
        var $error_message = {'empty':'', 'wrong-password':'' };

        $( '.login__form .login__form-pad' ).on ( 'click', '.login__form-submit input', function()
            {
                var $login_pad = '';
                var $home_pad = '';

                var $name = $( '.login__form-name input' );
                if( $name.val().length !== 0 ) {
                    $( '.home__inner-top .user-name' ).text( $name.val() );
                    $name.removeClass( 'form-name-validate' );
                    $nm_login = 1;
                } else {
                    $name.addClass( 'form-name-validate' );
                    $nm_login = 0;
                }

                var $password = $( '.login__form-password input' );
                if( $password.val().length !== 0 ) {
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

        console.log( 'scripts-loader' );

        // END
    }
);