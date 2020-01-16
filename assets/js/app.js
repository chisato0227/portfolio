// ホバーした時画像のオパシティーを50％に

$('.like')
 .on('mouseover',function(){
    $(this).addClass('cover');
 })
 .on('mouseleave', function(){
     $(this).removeClass('cover')
 })