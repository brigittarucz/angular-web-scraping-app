from flask import Flask
from flask import request
from webscraper import main

# the first argument is the name of the application's module or package
app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])

# flask --app api run

def login():
    if request.method == 'GET':
        main("https://www.google.com/search?q=export+python+file&oq=export+python+file&aqs=chrome..69i57j0i512l5j0i15i22i30j0i22i30l3.2670j0j4&sourceid=chrome&ie=UTF-8")
        print("GET")
        return f"Hello"
