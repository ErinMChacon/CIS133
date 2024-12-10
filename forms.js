/********************************************

        CONTACT PAGE SCRIPT
        Erin Chacon, Final Project
        CIS233DA, Fall 2024

 ******************************************/

/* I am currently taking CIS166, so I wanted to add some functionality to my form!
 */

var hearAbout = document.getElementById('hear');
hearAbout.onchange = checkOther;
hearAbout.onchange();

function checkOther() {
    var hear = this;
    var other = document.getElementById('other');

    if (hear.options[hear.selectedIndex].value === 'other') {

    other.style.display = '';
    } else {
        other.style.display = 'none';
    }
}