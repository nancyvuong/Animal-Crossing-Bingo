import numpy as np
import requests
import os
from requests import get
from bs4 import BeautifulSoup
import json


def scrape():
    """
    Get the names of all animal crossing villagers from villagerdb.com.

    Output: a list of the names of all animal crossing villagers.
    >>> lst = scrape()
    >>> len(lst)
    391
    """
    all_villagers = []
    pages = np.arange(1, 17)
    for page in pages:
        url = "https://villagerdb.com/villagers/page/" + str(page) + "?game=nh"
        req = requests.get(url)
        soup = BeautifulSoup(req.content, 'html.parser')
        for i in soup.find_all('div'):
            curr = str(i.get('data-initial-state'))
            if curr != "None":
                #print(curr)
                break
        diction = json.loads(curr)
        for i in diction["results"]:
            all_villagers.append(i["name"])
    return all_villagers

def create_txt(villager_list):
    if not os.path.isdir("data"):
        os.mkdir("data")
    f=open('data/villagers.txt','w')
    for ele in villager_list:
        f.write(ele+'\n')
    f.close()

def main():
    villagers = scrape()
    create_txt(villagers)

if __name__ == "__main__":
    main()
