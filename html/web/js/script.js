//���
//html ��ũ�� ���� -> css ���� -> jqury���� -> �������� ȣ��
$(".ban").slick({
    infinite: true,
    autoplay : true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed : 3000,
    dots : true
});

// ������
$(".gallery_img").slick({
    arrows : false,
    fade : true,
    infinite: true,
    autoplay : true,
    autoplaySpeed : 1000,
    speed : 300,
    slidesToShow : 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

//��ư�� Ŭ���ϸ� ��ü �޴��� ���̰� �ϼ���
$(".tit .btn").click(function(e){
    e.preventDefault();
    // $("#cont_nav").css("display","block");
    //#cont_nav {display:block}
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();\
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
});

//�Ǹ޴�
const $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul ").show();

function tabMenu(e){
    e.preventDefault();
    const $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

