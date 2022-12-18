# python pip install "SomePackage"
# python virtualenv <DIR_NAME>
# source <DIR_NAME>/bin/activate
# pip freeze > requirements.txt

from flask import Flask
from flask import request
from webscraper import main

# the first argument is the name of the application's module or package
app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])

# flask --app api --debug run
# https://selenium-python.readthedocs.io/
# https://www.crummy.com/software/BeautifulSoup/bs4/doc/#find
# 
def login():
    if request.method == 'GET':
        # store, product
        main("https://www.lidl.ro/p/oferte-de-joi/castraveti-in-otet/p81582", "Castraveți în oțet")
        print("GET")
        return f"Hello"
