# ChatSpaceの機能

* 新規登録機能
* 1対1のチャット機能
* グループチャット機能
* 相手の検索機能
* グループへのユーザー招待機能
* 履歴表示
* 画像送信
* チャット更新


## membersテーブル
------------------------

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

* Association
- belongs_to :group
- belongs_to :user


### usersテーブル
----------------------

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false,unique|
|password|string|null: false|

* Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups


#### groupsテーブル
----------------------

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

* Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups


##### users_groupsテーブル
--------------------

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false,foreign_key: true|

###### Association
- belongs_to :user
- belongs_to :group
