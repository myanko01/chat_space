$(function(){
  function buildHTML(message){
    var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`
    var html = `<li class="chat-content", data-id=${message.id}>
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


  setInterval(update, 5000);
    function update(){
        var last_id = $('#new_message').data('id');
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {
          id:last_id
        },
        dataType: 'json'
      })
      .done(function(date){
        date.forEach(function(date){
          var html = buildHTML(date);
          $('.chat-content').append(html);
        });
      })
      .fail(function(data){
      alert('自動更新に失敗しました');
      });
      .always(() => {
      $("send-btn").removeAttr("disabled");
      });
    }
});
