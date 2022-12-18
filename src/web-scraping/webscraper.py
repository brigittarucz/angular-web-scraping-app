# 1. https://www.edureka.co/blog/web-scraping-with-python/

# traditional scraping does not work with dynamic sytes that load content on the fly
# selenium uses a chrome browser and goes through the website like a user
from selenium import webdriver
# library that makes it easy to scrape info from web pages
# provides Pythonic idioms for iterating, searching and modifying the parse tree
from bs4 import BeautifulSoup

# 3. https://www.edureka.co/blog/web-scraping-with-python/
# import pandas as pd
# import sys

# 2. https://skolo.online/documents/webscrapping/#step-1-download-chrome

stores = {
    'lidl': 'https://www.lidl.ro/sitemap.xml'
}

productSearchWords = {
    'castravete': ['castravete', 'castraveti'],
    'rosie': ['rosie', 'rosii']
}

# https://www.makeuseof.com/tag/python-javascript-communicate-json/

def getStoreSitemap(store, productName):
    driver = webdriver.Chrome("/usr/lib/chromedriver")
    driver.get(stores[store])
    content = driver.page_source

    soup = BeautifulSoup(content, features="html.parser")
    driver.quit()

    links = soup.findAll("loc")

    validLinks = []

    if store == 'lidl':
        for link in links:
            for productSearchWord in productSearchWords[productName]:
                validLink = str(link).find(productSearchWord)

                if validLink != -1:
                    validLinkSanitized = str(link)[5:-6]
                    validLinks.append(validLinkSanitized)

    print("********VALID LINKS********")
    print(validLinks)

    return validLinks 


def getSource(store, productName):
    getStoreSitemap(store, productName)
    driver = webdriver.Chrome("/usr/lib/chromedriver")

    urls = getStoreSitemap(store, productName)

    offers = []

    for url in urls:
        driver.get(url)

        content = driver.page_source
        soup = BeautifulSoup(content, features="html.parser")

        print("********STORE********")
        print(store)

        if store == 'lidl':
            h1Text = soup.find('h1').getText()
            # productDiv = soup.find('div', attrs={'data-name': str(h1Text).strip()})
            
            discountDiv = soup.find('span', attrs={'class': 'pricebox__recommended-retail-price'})
            priceSpan =  soup.find('span', attrs={'class': 'pricebox__price'})
            brandParagraph = soup.find('p', attrs={'class': 'attributebox__description'})
            imageDiv = soup.find('div', attrs={'class': 'multimediabox__preview'})
            imageAnchorTag = imageDiv.find('a')
            
            scrapedProduct = {
                'product': h1Text,
                'initialPrice': discountDiv.getText().strip() if discountDiv != None else None,
                'finalPrice': priceSpan.getText().strip() if priceSpan != None else None,
                'brand': brandParagraph.getText().strip() if brandParagraph != None else None,
                'imageLink': imageAnchorTag['href'] if imageAnchorTag != None else None
            }

            offers.append(scrapedProduct)
            
    print("********OFFERS********")
    print(offers)
    driver.quit()


def main(url, productName):
    try:
        # url = sys.argv[1]

        getSource(url, productName)
    except IndexError:
        print("Argument not defined")

