# python pip install "SomePackage"
# python virtualenv <DIR_NAME>
# source <DIR_NAME>/bin/activate
# pip freeze > requirements.txt

# 1. https://www.edureka.co/blog/web-scraping-with-python/

# traditional scraping does not work with dynamic sytes that load content on the fly
# selenium uses a chrome browser and goes through the website like a user
from selenium import webdriver
# library that makes it easy to scrape info from web pages
# provides Pythonic idioms for iterating, searching and modifying the parse tree
from bs4 import BeautifulSoup
import pandas as pd
import sys

# 2. https://skolo.online/documents/webscrapping/#step-1-download-chrome

def getSource(url):
    driver = webdriver.Chrome("/usr/lib/chromedriver")
    driver.get(url)

    content = driver.page_source
    soup = BeautifulSoup(content, features="html.parser")
    print(soup)
    driver.quit()

def main(url):
    try:
        # url = sys.argv[1]

        getSource(url)
    except IndexError:
        print("Argument not defined")

