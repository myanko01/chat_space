$(function(){
  function buildHTML(message){
    var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`
    var html = `<ul class="chat-contents">
                  <li class="chat-content">
                    <div class="chat-content__header">
                      <div class="chat-content__name">
                      ${message.user_name}
                      </div>
                      <div class="chat-content__time">
                      ${message.created_at}
                      </div>
                      <div class="chat-content__message">
                      ${message.content}
                      ${imagehtml}
                      </div>
                    </div>`
    return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  });
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-contents').append(html)
      $('.chat-content').val('')
      $('.chat-content').append('');
       $('.chat-contents').animate({scrollTop: $('.chat-contents')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
});
