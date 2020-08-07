
var counter = 0;
var pageUrl1 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/N9wYB';
var pageUrl2 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/ZSsPB';
var pageUrl3 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/wjyPB';
var pageUrl4 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/L0hVB';
var pageUrl5 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/PJtPB';
var pageUrl6 =  'https://docs.google.com/presentation/d/e/2PACX-1vQWZ6RtmvBVinEADoTQ1eKdcszqxw27NfHipHn0z46v--HdFT0WjUjrYWWt6oSd1iGR3zwsfr_lZqH6/embed?start=false&loop=false&delayms=3000';

$(document).ready(function () {
    $('.page1').removeClass('hidetitle');
    $('.embedsrc').attr('src', pageUrl1);

});

$(document).ready(function () {
    $('.next').click(function () {
        if (counter === 0) {
            $('.page1').addClass('hidetitle');
            $('.page2').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl2);
            $('.dropdown').hide();
            counter++;
            console.log(counter);
        } else if (counter === 1) {
            $('.page2').addClass('hidetitle');
            $('.page3').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl3);
            counter++;
            console.log(counter);
        } else if (counter === 2) {
            $('.page3').addClass('hidetitle');
            $('.page4').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl4);
            counter++;
            console.log(counter);
        } else if (counter === 3) {
            $('.page4').addClass('hidetitle');
            $('.page5').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl5);
            counter++;
            console.log(counter);
        } else if (counter === 4) {
            $('.page5').addClass('hidetitle');
            $('.page6').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl6);
            $('.embedsrc').attr('allowfullscreen', true);
            $('.embedsrc').attr('mozallowfullscreen', true);
            $('.embedsrc').attr('webkitallowfullscreen', true);
            counter++;
            console.log(counter);
        }
    })
});
$(document).ready(function () {
    $('.previous').click(function () {
        if (counter === 5) {
            $('.page6').addClass('hidetitle');
            $('.page5').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl5);
            $('.embedsrc').removeAttr('allowfullscreen');
            $('.embedsrc').removeAttr('mozallowfullscreen');
            $('.embedsrc').removeAttr('webkitallowfullscreen');
            counter--;
            console.log(counter);
        } else if (counter === 4) {
            $('.page5').addClass('hidetitle');
            $('.page4').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl4);
            counter--;
            console.log(counter);
        } else if (counter === 3) {
            $('.page4').addClass('hidetitle');
            $('.page3').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl3);
            counter--;
            console.log(counter);
        } else if (counter === 2) {
            $('.page3').addClass('hidetitle');
            $('.page2').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl2);
            counter--;
            console.log(counter);
        } else if (counter === 1) {
            $('.page2').addClass('hidetitle');
            $('.page1').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl1);
            $('.dropdown').show();
            counter--;
            console.log(counter);
        }
    })
});
