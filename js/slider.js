/**
 * Created by user on 10.08.2016.
 */
$(document).ready(function(){
    // Инициализирует карусель
    $(".start-slide").click(function(){
        $("#myCarousel").carousel('cycle');
    });
    // Останавливает процесс автоматической смены слайдов карусели
    $(".pause-slide").click(function(){
        $("#myCarousel").carousel('pause');
    });
    // Осуществляет переход на предыдущий слайд
    $(".prev-slide").click(function(){
        $("#myCarousel").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide").click(function(){
        $("#myCarousel").carousel('next');
    });
    // Осуществляет переход на 0 слайд карусели
    $(".slide-one").click(function(){
        $("#myCarousel").carousel(0);
    });
    // Осуществляет переход на 1 слайд карусели
    $(".slide-two").click(function(){
        $("#myCarousel").carousel(1);
    });
    // Осуществляет переход на 2 слайд карусели
    $(".slide-three").click(function(){
        $("#myCarousel").carousel(2);
    });
});