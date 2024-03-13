from flask import request, session
from model import db, Trucker, Company, Load
from flask_bcrypt import Bcrypt

from config import create_app, db

app = create_app()
bcyrpt = Bcrypt(app)

# app.route('/')
# def index():
#     return

@app.post('/login')
def login():
    data = request.json
    username = data['username']
    password = data['password']
    Trucker = Trucker.query.where(Trucker.username == username).first()
