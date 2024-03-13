from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from model import  Trucker, Company, Load, db
from dotenv import load_dotenv
import os 

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.environ.get('SECRETKEY')
    app.json.compact = False
    
    migrate = Migrate(app, db)
    db.init_app(app)

    CORS(app)

    return app