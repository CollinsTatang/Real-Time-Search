# Helpjuice Realtime Search

<h2>This project permit Users to perform search on articles in realtime</h2>
    - Users register to the app and create articles of their choice;
 
## Built With

- Ruby v3.0.0
- Ruby on Rails v7.0

## Sreenshot


## Live Demo
Deployment 
[live demo ](https://safe-ravine-92207.herokuapp.com/)



## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ruby: 3.0.0
Rails: 7.0
Postgres: >=9.5

### Setup

Instal gems with:

```
bundle install
```
```
rails webpacker:install
```
Setup database with:

```
   rails db:create
   rails db:migrate
```

### Github Actions

### Usage

To use THIS  project :
* Have ruby installed in your computer
* [Download]https://github.com/CollinsTatang/helpjuice-project.git) or clone this repo:
  - Clone with SSH:
  ```
    git@github.com:CollinsTatang/helpjuice-project.git

  ```
- Clone with HTTPS
  ```
    https://github.com/CollinsTatang/helpjuice-project.git
* `cd` into `helpjuice-project`


Start server with:

```
    rails server
```

Open `http://localhost:3000/` in your browser.


### Run tests

```
    rspec --format documentation
```

### Deployment on heroku
- create account on heroku on your terminal:
- heroku login
- heroku create
- check your remote link and push for deployment : 
    git config --list | grep heroku
    git push heroku main or master
- migrate your database
    heroku run rails db:migrate
- heroku open


## Author

👤 **Makungong Collins Tatang**

- GitHub: [@CollinsTatang](https://github.com/CollinsTatang)
- Twitter: [@CollinsTatang1](https://twitter.com/CollinsTatang1)
- LinkedIn: [makungong-collins](https://www.linkedin.com/in/makungong-collins-b43260190/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/CollinsTatang/helpjuice-project/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

TBA

## 📝 License

TBA
