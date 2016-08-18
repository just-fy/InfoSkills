/**
 * Created by user on 19.08.2016.
 */
$(document).ready(function () {
    $('.books th').hover(
        function () {
            $('div', this).slideToggle('slow');
        },
        function () {
            $('div', this).slideToggle('slow');
        });
});