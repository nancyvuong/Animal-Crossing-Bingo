# Animal Crossing Bingo
A command line text-only (for now) bingo game featuring characters (villagers) from Animal Crossing: New Horizons.
* Update: As of June 2021 an online version is available at https://nancyvuong.github.io/Animal-Crossing-Bingo/

Animal Crossing: New Horizons is a video game on the Nintendo Switch. One of the things you can do in this game is create an island and recruit characters to live on your island. These characters are referred to as villagers and there are 391 unique villagers (though you can only have 10 villagers living on your island at a time). The most common way to recruit villagers is through a lottery system. There was a certain villager I was aiming for and spent more than 100 lottery rolls before I created this bingo game as a way to kill time and make the lottery rolls more enjoyable.

Unlike a traditional bingo game, squares are not automatically announced. Instead, this bingo game was created solely to go with the villager lottery so squares must be "announced" announced manually by the player. This game flows like this:

1) Create a bingo game by calling `python bingo.py`.
2) Each time you roll on the villager lottery in Animal Crossing: New Horizons, you must enter the name of the villager you got from that lottery roll. The bingo card will then update itself depending if that villager is on the bingo card or not. The game ends when the player gets a bingo.

Project components:
```
PROJECT
├── README.md
├── data
│   ├── villagers.txt
│   ├── img_urls.txt
├── bingo.py
├── villager_scraper.py
├── image_scraper.py
```

* `bingo.py`: The main code to create and run a bingo game
* `villager_scraper.py`: A webscraper that scrapes `villagerdb.com` to collect all the names of the 391 villagers and writes them to `villagers.txt` Update 06/20/2021: `villager_scraper.py` no longer works on `villagerdb.com`.
* `image_scraper.py`: A webscraper that scraps `villagerdb.com` to collect the url source of the images of all 391 villagers and writes them to `img_urls.txt`. Because `villager_scraper.py` no longer works with `villagerdb.com`, `image_scraper.py` is reliant on `villagers.txt`.


# `data`
* `villagers.txt`: A text file containing names of all 391 villagers from Animal Crossing: New Horizons. If it has been deleted then running bingo.py will generate a new one. 
* Update 06/30/2021: Please do not delete this folder as villagerdb.com has changed their website in a way that `villager_scrapper.py` no longer works
* `img_urls.txt`: A text file containing the url sources of all 391 villagers that gets displayed on the web version of this bingo game.
