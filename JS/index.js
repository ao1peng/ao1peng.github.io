$(function () {
    // 01 epang
    var epang = $('.sec1 .second02');
    console.log(epang);
    epang.click(function () {
        $('.mask-epang').show(500);
    });
    $('.close').click(function () {
        $('.mask-epang').hide(500);
    });
    var index = 0;
    $('.epang .next').click(function () {
        $('.epang li').eq(index).css('opacity',0);
        index++;
        if (index > 1) {
            index = 0;
        }
        $('.epang li').eq(index).css('opacity',1);
    });

    $('.epang .last').click(function () {
        $('.epang li').eq(index).css('opacity',0);
        index--;
        if (index < 0) {
            index = 1;
        }
        $('.epang li').eq(index).css('opacity',1);
    });


    // 02 fusu
    var fusu = $('.sec2 .thired02');
    console.log(fusu);
    fusu.click(function () {
        $('.mask-fusu').show(500);
    });
    $('.fusu .close').click(function () {
        $('.mask-fusu').hide(500);
    });
    var index = 0;
    $('.fusu .next').click(function () {
        $('.fusu li').eq(index).css('opacity',0);
        index++;
        if (index > 1) {
            index = 0;
        }
        $('.fusu li').eq(index).css('opacity',1);
    });

    $('.fusu .last').click(function () {
        $('.fusu li').eq(index).css('opacity',0);
        index--;
        if (index < 0) {
            index = 1;
        }
        $('.fusu li').eq(index).css('opacity',1);
    });



    // 03 royal
    var royal = $('.sec4 .fifth04');
    console.log(royal);
    royal.click(function () {
        $('.mask-royal').show(500);
    });
    $('.royal .close').click(function () {
        $('.mask-royal').hide(500);
    });
    var index = 0;
    $('.royal .next').click(function () {
        $('.royal li').eq(index).css('opacity',0);
        index++;
        if (index > 1) {
            index = 0;
        }
        $('.royal li').eq(index).css('opacity',1);
    });

    $('.royal .last').click(function () {
        $('.royal li').eq(index).css('opacity',0);
        index--;
        if (index < 0) {
            index = 1;
        }
        $('.royal li').eq(index).css('opacity',1);
    });
    


    // 04 corner
    var corner = $('.sec5 .sixth02');
    console.log(corner);
    corner.click(function () {
        $('.mask-corner').show(500);
    });
    $('.corner .close').click(function () {
        $('.mask-corner').hide(500);
    });
    var index = 0;
    $('.corner .next').click(function () {
        $('.corner li').eq(index).css('opacity',0);
        index++;
        if (index > 1) {
            index = 0;
        }
        $('.corner li').eq(index).css('opacity',1);
    });

    $('.corner .last').click(function () {
        $('.corner li').eq(index).css('opacity',0);
        index--;
        if (index < 0) {
            index = 1;
        }
        $('.corner li').eq(index).css('opacity',1);
    });



    // 05 imperial
    var imperial = $('.sec7 .eight02');
    console.log(imperial);
    imperial.click(function () {
        $('.mask-imperial').show(500);
    });
    $('.imperial .close').click(function () {
        $('.mask-imperial').hide(500);
    });
    var index = 0;
    $('.imperial .next').click(function () {
        $('.imperial li').eq(index).css('opacity',0);
        index++;
        if (index > 2) {
            index = 0;
        }
        $('.imperial li').eq(index).css('opacity',1);
    });

    $('.imperial .last').click(function () {
        $('.imperial li').eq(index).css('opacity',0);
        index--;
        if (index < 0) {
            index = 2;
        }
        $('.imperial li').eq(index).css('opacity',1);
    });


    // tree
    var tree = $('.sec7 .eight04');
    console.log(tree);
    tree.click(function () {
        $('.mask-tree').show(500);
    });
    $('.tree .close').click(function () {
        $('.mask-tree').hide(500);
    });
    var index = 0;
    $('.tree .next').click(function () {
        $('.tree li').eq(index).css('opacity',0);
        index++;
        if (index > 6) {
            index = 0;
        }
        $('.tree li').eq(index).css('opacity',1);
    });

    $('.tree .last').click(function () {
        $('.tree li').eq(index).css('opacity',0);
        index--;
        if (index < 0) {
            index = 6;
        }
        $('.tree li').eq(index).css('opacity',1);
    });
});
