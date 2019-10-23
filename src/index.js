import './assets/style.scss';
import './assets/images/logo.png';
import './assets/images/flag_icon.png';
import './assets/images/crayon_icon.png';
import './assets/images/gears_icon.png';
import './assets/images/rocket_icon.png';
import './assets/images/portfolio_01.png';
import './assets/images/portfolio_02.png';
import './assets/images/portfolio_03.png';
import './assets/images/portfolio_04.png';
import './assets/images/fb_icon.png';
import './assets/images/linkedIn_icon.png';
import './assets/images/mail_icon.png';
import './assets/images/twitter_icon.png';


// navigation smooth scroll below
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top-133,
        },
        700,
        'linear'
    )
});