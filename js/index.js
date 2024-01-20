
/// <reference types="../@types/jquery" />
// ===========================================================Home=========================================================
$('.open').on('click', function () {

    let navwidth = $('.slidebox').outerWidth();
    // console.log(navwidth);

    let leftvalue = $('.slidebox').css('left')
    // console.log(leftvalue)

    let y = $('.content').offset().left;
    console.log(y)

    if (leftvalue == '0px') {
        $('.option').animate({ left: `-${navwidth}` }, 1000);                 // local 
        // $('.content').animate({ right: `-${navwidth}+330px`}, 1000)
    }

    else {
        $('.option').animate({ left: `0px` }, 1000);
        // $('.content').animate({ right: '560px'}, 1000)

    }
})

$('.closebtn').on('click', function () {

    $('.option').animate({ left: `-240px` }, 1000);
    // $('.content').animate({ right: '700px'}, 1000)

})

$('.slidebox ul li a').on('click', function (e) {

    let navtag = e.target
    console.log(navtag)

    let hreftag = $(navtag).attr('href');
    console.log(hreftag);

    let offsetheight = $(hreftag).offset().top;
    console.log(offsetheight);

    $('body , html').animate({ scrollTop: `${offsetheight}px` }, 3000);

})
// ========================================================Duration=========================================================
$('h3').on('click', function (e) {

    let divnext = $(e.target).next();
    $(divnext).slideToggle(400);
    let divprev = $(e.target).prev();
    $(divprev).slideUp(400);
})
//  =========================================================Details========================================================= 
function CountDate(){
    let DaTe = new Date();
    let Dateconv = (Date.parse(DaTe));
    let DaTetoday = new Date('Oct 25 2024 21:38:30 GMT+0200 (Eastern European Standard Time)');
    let Dateconv2 = (Date.parse(DaTetoday));
    let theFinalDate = Dateconv - Dateconv2;
    let getdays = Math.floor(theFinalDate / 86400000);
    let gethours = Math.floor(theFinalDate % 86400000 / 3600000);
    let getminutes = Math.floor((theFinalDate % (3600000) / 60000));
    let getseconds = Math.floor((theFinalDate %60000 )/1000);
    $('.day').html(`${getdays} D` );
    $('.hours').html(`${-gethours} h`);
    $('.mins').html(`${-getminutes} m` );
    $('.seconds').html(`${-getseconds} s`);
    }
    setInterval(CountDate, 1000);
//  =========================================================Contact==========================================================
$('.tarea').on('keydown', function () {

    let x = $('.tarea').val().length
    console.log(x);

    if (x > 99) {
        $('.colred').text('your available character finished')
    }
    else {
        let y = $('.colred').text(`${100 - x}`)
    }
})
