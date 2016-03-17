/*
 *
 */
var index = 0;
var css = [
    '0% 0%',
    '10% 10%',
    '20% 20%',
    '30% 30%',
    '40% 40%',
    '50% 50%',
    '40% 40%',
    '30% 30%',
    '20% 20%',
    '10% 10%'
];

$(function() {
    setInterval(function() {
        change();
    }, 1000 * 0.2);
});

function change() {

    $('#rcorners11').css('border-radius', css[index++]);

    if(index >= css.length) {
        index = 0;
    }
}
