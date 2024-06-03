
//const switchMode = document.getElementById('switch-mode');
//const imgElem = document.getElementById('logo');
//const imgGet = document.getElementById('illustration');


//const body = document.body;
//var logoUrlLight = '/images/silicone-logo-light_theme.svg';
//var logoUrlDark = '/images/silicone-logo-dark_theme.svg';

//var imageGetCourses = '/images/courses/illustration.svg';
//var imageGetCoursesDark = '/images/courses/illustration_dark.png';
//// const isDarkMode = localStorage.getItem('darkMode') === 'true';


//export function mobile{
//    document.addEventListener('DOMContentLoaded', function () {
//        var menuButton = document.getElementById('mobil-menu-btn');
//        var mobileMenu = document.getElementById('mobil-menu');


//        switchMode.addEventListener('change', toggleDarkMode);

//        if (menuButton && mobileMenu) {
//            menuButton.addEventListener('click', function () {
//                console.log('Knappen klickades');
//                mobileMenu.classList.toggle('open');
//                var ariaExpanded = mobileMenu.getAttribute('aria-expanded');
//                mobileMenu.setAttribute('aria-expanded', ariaExpanded === 'true' ? 'false' : 'true');
//            });
//        } else {
//            console.error('Knappen eller mobilmenyn kunde inte hittas.');
//        }

//    });
//}






//export function toggleDarkMode() {

//    if (switchMode.checked) {
//        body.classList.add('dark-mode');
//        localStorage.setItem('darkMode', 'true');
//        imgElem.setAttribute("src", logoUrlDark);
//        imgGet.setAttribute("src", imageGetCoursesDark);
//    } else {
//        body.classList.remove('dark-mode');
//        localStorage.setItem('darkMode', 'false');
//        imgElem.setAttribute("src", logoUrlLight);
//        imgGet.setAttribute("src", imageGetCourses);
//    }
//}

//--------------------------------------------------------------