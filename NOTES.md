Co-op Games Finder

Overview:
  * User logs in / makes review
  * Games exist and can be added user's personal list
  * User has games in list from reviews

User has many reviews
User will have many played_games through reviews

Routes:
Home Route: /games the games
Detailed game: games/:id (includes reviews)
Login: /login
Signup: /signup
Landing Page: /

Backend:

Models

User
---
has_many user_games through games
username
password_digest

User_game(Personal Collection)
---
user_id
game_id 
platform
played : boolean

Game
---
has_many user_games
has_many users through user_games
name
release: date
ign_rating: integer
overview: text
image_url: string

Stretch

Reviews
---
user_id belong_to
game_id: belongs_to
content: text
rating: integer