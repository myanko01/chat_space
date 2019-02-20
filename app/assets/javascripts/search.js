$(function(){
  var user_list = $('#user-search-result');
  var message_list = $('#chat-group-users')

  function appendUser(user) {
    var html =
              `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">
                ${user.name}
                </p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                </a>
              </div>`
    user_list.append(html);
  };

  function appendMembers (userId, userName) {

    var html =
              `<div class='chat-group-user clearfix js-chat-member' id='${userId}'>
                <input name='group[user_ids][]' type='hidden' value="${userId}">
                <p class='chat-group-user__name'>${userName}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
    message_list.append(html);
  };

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

     .done(function(users) {
      $(".user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }

    })

    .fail(function(){
      alert('通信に失敗しました');
    });
  });

    $(document).on("click", '.user-search-add', function(){
      var userId = $(this).attr("data-user-id");
      var userName = $(this).attr("data-user-name")
        appendMembers(userId, userName);
     $('.chat-group-users').append();
       $(this).parent().remove();
    });

    $(document).on("click", '.user-search-remove', function(){
      $input = $(this);
      $input.parent().remove();
      });
});
