
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "프로젝트 헤일메리" },
    headers: { Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f" }
})
    .done(function (msg) {

        $(".bookimgbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");

        $(".booktitle").append("<h1>" + msg.documents[0].title + "</h3>")
        $(".bookauthor").append("<h5>" + msg.documents[0].authors[0] + "</h5>")
        $(".bookauthor").append("<h5>" + "알에이치코리아(RHK)" + "</h5>")
        $(".price .sale").append("<p>" + msg.documents[0].price + "원" + "</p>");


    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=authors",
    data: { query: "앤디 위어" },
    headers: { Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f" }
})
    .done(function (msg) {

        const divs = $('.mplist li');

        for (let i = 0; i < divs.length; i++) {


            $(".mplist li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");

            $(".mplist li").eq(i).append("<p>" + msg.documents[i].title + "</p>")

        }
    });


// 우주3부작

let space3;
space3 = ["마션(스페셜)", "아르테미스(스페셜)"]

for (let i = 0; i < space3.length; i++) {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: space3[i], size: 15 },
        async: false,
        headers: { Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f" }
    })

        .done(function (msg) {

            console.log(msg);
            const origin = msg.documents;
            let data = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })
            console.log(data);

            const three = $('.thrlist li');

            for (let j = 0; j < 1; j++) {

                $(".thrlist li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

                $('.thrlist li').eq(i).append('<a href="#">' + "<p>" + data[j].title + "</p>" + "</a>");

            }
        })
}

// 함께 구매
let buy;
buy = ["숨", " 당신 인생의 이야기", "물고기는 존재하지", "불편한 편의점", "우리가 빛의 속도로", "달러구트 꿈", "팩트풀니스", "지구 끝의 온실", "제노사이드", "죽여 마땅한 사람들"]

for (let i = 0; i < buy.length; i++) {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: buy[i], size: 15 },
        async: false,
        headers: { Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f" }
    })

        .done(function (msg) {

            console.log(msg);
            const origin = msg.documents;
            let data = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })
            console.log(data);

            const buy = $('.buy_list li');

            for (let j = 0; j < 1; j++) {

                $(".buy_list li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

                $('.buy_list li').eq(i).append('<a href="#">' + "<h5>" + data[j].title + "</h5>" + "</a>");

                $('.buy_list li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");

            }
        })
}




//    텍스트 가져오기
$(function () {
    $.get("./sub_text/txt1.txt", function (data) {
        $('.worktext').html(data);
    })

    $.get("./sub_text/txt2.txt", function (data) {
        $('.worktext2').html(data);
    })

    $.get("./sub_text/br.txt", function (data) {
        $('.pbtext').html(data);
    })

    $.get("./sub_text/br2.txt", function (data) {
        $('.pbtext2').html(data);
    })

    $.get("./sub_text/at.txt", function (data) {
        $('.attext').html(data);
    })

    $.get("./sub_text/at2.txt", function (data) {
        $('.attext2').html(data);
    })

    $.get("./sub_text/comment.html", function (data) {
        $('.cmentbox').html(data)
    })

    $.get("./sub_text/ct_01.txt", function (data) {
        $('.ct_01').html(data)
    })

    $.get("./sub_text/ct_02.txt", function (data) {
        $('.ct_02').html(data)
    })

    $.get("./sub_text/ct_03.txt", function (data) {
        $('.ct_03').html(data)
    })
})

// 접기, 펼쳐보기
$(function () {
    $('.tgbtn').click(function () {
        $('.worktext2').stop().slideDown("fast");
        $('.tgbtn').hide();
        $('.tgbtnclose').show();
    });
    $('.tgbtnclose').click(function(){
        $('.worktext2').stop().slideUp("fast");
        $('.tgbtnclose').hide();
        $('.tgbtn').show();
    });


    $('.tgbtn2').click(function () {
        $('.pbtext2').stop().slideDown("fast");
        $('.tgbtn2').hide();
        $('.tgbtnclose2').show();
    });
    $('.tgbtnclose2').click(function(){
        $('.pbtext2').stop().slideUp("fast");
        $('.tgbtnclose2').hide();
        $('.tgbtn2').show();
    });

    $('.tgbtn3').click(function () {
        $('.attext2').stop().slideDown("fast");
        $('.tgbtn3').hide();
        $('.tgbtnclose3').show();
    });
    $('.tgbtnclose3').click(function(){
        $('.attext2').stop().slideUp("fast");
        $('.tgbtnclose3').hide();
        $('.tgbtn3').show();
    });
    
    


// 댓글 더보기
    $('.see_more').click(function () {
        $('.cmentbox').stop().show();
        $('.com_num').eq(9).css({ "border-bottom": "1px solid rgb(233, 233, 233)" })
        $('.com_num:last').css({ "border": "none" })
    })
})


// 리뷰별점 
$('.star li').hover(function () {
    $(this).css('color', '#ee7e23');
    $(this).prevAll().css('color', '#ee7e23');
}, function () {
    $(this).css('color', '#b4b4b4');
    $(this).prevAll().css('color', '#b4b4b4')
})


$('.star li').mouseenter(function () {
    $('.rveval p').hide();
}).on("mouseout", function () {
    $('.rveval p').show();
})

$('.star li').eq(0).mouseenter(function () {
    $('.star1').show();
}).on("mouseout", function () {
    $('.star1').hide()
})

$('.star li').eq(1).mouseenter(function () {
    $('.star2').show();
}).on("mouseout", function () {
    $('.star2').hide()
})

$('.star li').eq(2).mouseenter(function () {
    $('.star3').show();
}).on("mouseout", function () {
    $('.star3').hide()
})

$('.star li').eq(3).mouseenter(function () {
    $('.star4').show();
}).on("mouseout", function () {
    $('.star4').hide()
})

$('.star li').eq(4).mouseenter(function () {
    $('.star5').show();
}).on("mouseout", function () {
    $('.star5').hide()
})


// 리뷰 남기기
$(function () {
    $('.spobox button').click(function () {
        $('.rvpopup').fadeIn();
    });
    $('.rvpopup span').click(function () {
        $('.rvpopup').fadeOut();
    })
})


// 미리보기 글씨 크기
$(function () {

    var size = 18;
    var lsize = 45;
    var ct = $('.ct_01')

    $('.textwrap button').on("click", function () {
        var btn_index = $(".textwrap button").index(this);


        if (btn_index == 0) {
            size--;
            lsize--;
            ct.css("font-size", size + "px");
            ct.css("line-height", lsize + "px");


        } else if (btn_index == 1) {
            size++;
            lsize++;
            ct.css("font-size", size + "px");
            ct.css("line-height", lsize + "px");
        }
    })

// 미리보기 버튼 누르면 보이게
    $('.bookimgbox button').click(function () {
        $('#pvwrap').show();
    })
    $('.projecthm h3').click(function () {
        $('#pvwrap').hide();
    })


// 목차 누르면 각 챕터
    $('.idx_txt_nb').click(function () {
        let i = $(this).index();
        ct=$('.ct_0'+(i-1))
        console.log(ct)

        $('.hm_contents_slide div').eq(i).show()
            .siblings('.hm_contents_slide div').hide();

    
    })
})

$(function(){
    $('.bookimgbox > img').click(function(){
        $('.imgpopup').show();
        })
    $('.xbox > img').click(function(){
        $('.imgpopup').hide();
    })
})
