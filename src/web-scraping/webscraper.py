# python pip install "SomePackage"
# python virtualenv <DIR_NAME>
# source <DIR_NAME>/bin/activate
# pip freeze > requirements.txt

from flask import Flask
from flask import request

# the first argument is the name of the application's module or package
app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])

def login():
    if request.method == 'GET':
        print("GET")
        return f"Hello world!"