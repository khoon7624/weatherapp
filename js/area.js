// delete btn
$('.area-title button').click(function(){
    if($('.area-title button').text() ==='delete_outline'){
        alert('삭제할 지역이 없습니다.')
    }else{
        $('.popup-bg').show();
        $('.popup-delete').show();
    }
})
$('.popup-delete button').click(function(){
    if($(this).hasClass('no')){
        $('.popup-bg').hide();
        $('.popup-delete').hide();
    }else{ //delete-all
        var resetArea = '[]';
        localStorage.setItem('area',resetArea);
        $('.area-list ul').empty();
        $('.area-list ul').append(`
            <li><p>등록된 지역이 없습니다.</p></li>
        `);
        $('.area-title button').text('delete_outline');
        $('.popup-bg').hide();
        $('.popup-delete').hide();
    }
    
})


// 내 지역 list 스와이프 => del

// if <div class="area-list"> === null => <p>등록된 지역이 없습니다.</p>