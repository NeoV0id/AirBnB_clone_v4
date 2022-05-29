#!/usr/bin/python3
""" Script that start Flask application """

from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'
