import requests
import os
from requests import get
from bs4 import BeautifulSoup

def scrape():
    """
    Get all the urls of images of ACNH villagers from villagerdb.com
    Output: a list of the url of pictures of all animal crossing villagers.
    >>> lst = scrape()
    >>> len(lst)
    391
    """

    lines = []
    image_lst = []

    with open('data/villagers.txt') as f:
        lines = [line.rstrip() for line in f]

    url = "https://villagerdb.com/villager/"

    for villager in lines:
        villager = villager.replace(" ", "-").replace("'", "").replace(".", "")
        villager_url = url + villager.lower()
        req = requests.get(villager_url)

        if req.ok == False:
            villager_url = villager_url + "2"
            req = requests.get(villager_url)
            
            if req.ok == False:
                villager_url = url + "renee"
                req = requests.get(villager_url)
        soup = BeautifulSoup(req.content, 'html.parser')
        image_lst.append(str(soup.find_all('meta', property="og:image")[0]).split('"')[1])
    return image_lst

def create_txt(villager_list):
    if not os.path.isdir("data"):
        os.mkdir("data")
    f=open('data/img_urls.txt','w')
    for ele in villager_list:
        f.write(ele+'\n')
    f.close()

def main():
    img_lst = scrape()
    create_txt(img_lst)

if __name__ == "__main__":
    main()
