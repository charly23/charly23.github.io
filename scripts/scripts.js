$(function()
    {
        var $user_data = {'nm':'admin', 'pw':'admin'};
        var $error_message = {'empty':'', 'wrong-password':'' };

        // FUNCTIONS

        function readTextFile(file)
        {
            var raw = new XMLHttpRequest();
            raw.open( "GET", file, true );
            raw.onreadystatechange = function () {
                if( raw.readyState === 4 ) {
                    if( raw.status === 200 || raw.status == 0 ) {
                        var text = raw.responseText;
                    }
                }
            }
            raw.send(); return raw;
        }

        // FUNCTIONS - END

        function add_class_pad_element ( $nm=0, $pw=0) 
        {
            if( $nm == 1 && $pw == 1 ) {
                $( 'body.home-page' ).addClass( 'home-log-in' );
                $( '#header-top' ).addClass( 'header-in' );
            } else {
                $( 'body.home-page' ).removeClass( 'home-log-in' );
                $( '#header-top' ).removeClass( 'header-in' );
            }
        }

        $( '.login__form .login__form-pad' ).on ( 'click', '.login__form-submit input', function()
            {
                var $login_pad = '';
                var $home_pad = '';

                var $name = $( '.login__form-name input' );
                if( $name.val().length !== 0 && $name.val() == $user_data['nm'] ) {
                    $( '#header-top .top-menu ul.menu-item li.menu-item-name span' ).text( $name.val() );
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
                    $( '.account__pad' ).addClass( 'login-name-in' );
                } else {
                    $( '.login__form' ).removeClass( 'login-name-in' );
                    $( '.home__pad' ).removeClass( 'login-name-in' );
                    $( '.account__pad' ).removeClass( 'login-name-in' );
                }

                if( $pw_login == 1 ) {
                    $( '.login__form' ).addClass( 'login-password-in' );
                    $( '.home__pad' ).addClass( 'login-password-in' );
                    $( '.account__pad' ).addClass( 'login-password-in' );
                } else {
                    $( '.login__form' ).removeClass( 'login-password-in' );
                    $( '.home__pad' ).removeClass( 'login-password-in' );
                    $( '.account__pad' ).removeClass( 'login-password-in' );
                }

                add_class_pad_element( $nm_login, $pw_login );

                var file = readTextFile( "https://charly23.github.io/file/file.txt" );

                file.onreadystatechange = function () 
                {

                    if ( file.readyState === 4 ) { if ( file.status === 200 || file.status == 0 ) {

                            var text = file.responseText;
                            var data = text.split( '|' );

                            for ( d_i = 0; d_i < data.length; d_i++ ) 
                            {
                                var user = data[d_i].split( '/' );
                                for ( u_i = 0; u_i < user.length; u_i++ ) 
                                {
                                    var user_data = user[u_i].split( ':' );
                                    if( $name.val() == user_data[1] ) {
                                        console.log( user_data );
                                    }
                                }
                            }
                        }
                    }

                    // END
                }

                return false;
            } 
        );

        /** -- form cntrl -- **/

        $( '.home-page' ).on( 'click', '#header-top.header-in .top-menu .menu-item-logout span', function()
            {
                var $empty = '';

                $( 'body.home-page' ).removeClass( 'home-log-in' );

                $( '.login__form' ).removeClass( 'login-name-in' );

                $( '.home__pad' ).removeClass( 'login-name-in' );
                $( '.home__pad' ).hide();

                $( '.account__pad' ).removeClass( 'login-name-in' );
                $( '.account__pad' ).hide();
                
                $( '.login__form-name input' ).val($empty);
                $( '.login__form-password input[type="password"]' ).val($empty);

                $( '#header-top' ).removeClass( 'header-in' );
                $( '#header-top .top-menu' ).hide();

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

        /** -- form cntrl - END -- **/

        $( '.home-page' ).on( 'click', '#header-top.header-in span.header-top__logo', function()
            {
                if( $(this).next().is( ':visible' ) == true ) {
                    $(this).next().hide();
                } else {
                    $(this).next().show();
                }
                return false;
            } 
        );

        $( '.header-top__inner' ).on( 'click', 'span.header-top__home', function()
            {
                $( '.home__pad.login-name-in.login-password-in' ).show();
                $( '.account__pad.login-name-in.login-password-in' ).hide();
            }
        );
        $( 'ul.menu-item' ).on( 'click', 'li.menu-item-profile span.item-profile', function()
            {
                $( '.home__pad.login-name-in.login-password-in' ).hide();
                $( '.account__pad.login-name-in.login-password-in' ).show();
            }
        );

        // END
    }
);