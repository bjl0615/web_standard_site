//���
//html ��ũ�� ���� -> css ���� -> jqury���� -> �������� ȣ��
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay : true,
    autoplaySpeed : 3000,
    dots : true
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