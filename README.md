# Co-opper 

## Description

This project is a simple web application that allows users to scroll through a list of co-op specific games and review them. 
Once they are reviewed it will be labeled as played. A user can also add a game to keep the website up to date with its list of 
co-op games.


## Setup

FIRST 
run "bundle install" to install all dependencies

SECOND
have postgres running before starting rails server
in the terminal run "sudo service postgresql start"
if postgres is not installed directions are provided below

THIRD
run "rails db:migrate" and "rails db:seed"
and then 
start the rails server
"rails s"

FOURTH
Use "npm install --prefix client" to get the packages for the frontend.

FIFTH
start the frontend client
"npm start --prefix client"

# Usage

## Home
Offers a brief description of what the application does and is about.

## Gameslist
Shows all the games currently in the database and allows users to add additional games. A user a can also
click more information to get a more detailed look at the game and inorder to see all reviews for that game and add 
a review themselves.

## MyReviews 
Is a list of all the reviews that the current user has written.


#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```