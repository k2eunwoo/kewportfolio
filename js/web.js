$(function(){
    $('.tabSet').each(function(){
        var anchor = $(this).find('.tabs a')
        var anchor_on = $(this).find('.tabs a.on');
        var href_on = anchor_on.attr('href');
        var panel = $(this).find('.panel');

        $(href_on).show();
        anchor.each(function(){
            /*a 중 하나를 클릭 >> a 모두 removeClass >>this만 addClass
            href.show*/
            var href_this = $(this).attr('href');
            $(this).click(function(e){
                e.preventDefault();
                panel.hide();
                anchor.removeClass('on');
                $(this).addClass('on');
                $(href_this).show();
            })//click
        })//each-2  
    })//each
    $(document).ready(function() {
        $('#container').pinterest_grid({
            no_columns:4
        });
    });

//top버튼
jQuery( '#top_btn' ).click( function() {
  var htmloffset = jQuery( 'html' ).offset();
  jQuery( 'html, body' ).animate( { scrollTop : htmloffset.top }, 300 );
});

//이미지 클릭시 팝업
$('.pin_a').each(function(){
  $(this).click(function(event){
      event.preventDefault();
      var img_src = $(this).attr('href');
      var img_alt = $(this).attr('title');
      
      //a-1)pin-panel 내의 alt값을 찾아서 변수에 저장
      //a-2) 이미지 타이틀을 보여줄 변수 저장
      var height = $(this).attr('rel');
      //b -1) title 속성에 저장된 hight값을 찾아 변수에 저장

    //  $('#modal').fadeIn();
      $('#modal').addClass('on')
      $('#modal img').attr('src',img_src);
      $('#modal .txt').text(img_alt);
      //a-3) 제목이 떠야할 위치의 html에 alt값이 저장되어있는 변수를 text로 대체
      $('.body').removeClass('height')
      $('.body').addClass(height);
       //b-2) 모달팝업의 body(모달 이미지부분)에 height라는 클래스를 변수명으로 추가함
  })
})
      $("#modal").click(function() {
      //$("#modal").fadeOut();
      $('#modal').removeClass('on')
      });

})//ready
/* 결과: 
1) 그래픽 탭 내부의 pin-panel을 클릭하면
이미지가 모달팝업으로 화면에 표시된다.
2) 

*/