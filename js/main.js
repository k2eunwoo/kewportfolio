$(function(){
    //네비게이션에 마우스 오버하면 텍스트가 나오고 이미지가 바뀜
    $('#nav ul li').each(function(){
        var nowimg = $(this).find('img'); //마우스 오버부분의 img파일 찾기
        var srcname = nowimg.attr('src'); //오버한부분의 이미지 주소값을 가지고 옴
        var newsrc = srcname.substring(0, srcname.lastIndexOf('.'));
        //.png, .jpg와 같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳까지 자름
        $(this).hover(function() { 
            $(this).find('img').attr('src', newsrc+ '_on.' + /[^.]+$/.exec(srcname)); //hover시 _on붙이기
          }, function() { 
            $(this).find('img').attr('src', newsrc + '.' + /[^.]+$/.exec(srcname)); //hover시 _on 떼기
          });
    })//each
})//ready