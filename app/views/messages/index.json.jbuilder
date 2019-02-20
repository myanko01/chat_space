json.array! @new_messages do |message|
  json.content    message.content
  json.user_name  message.user.name
  json.date       message.created_at.strftime('%Y/%m/%d %R')
  json.image      message.image.url
  json.id         message.id
end
