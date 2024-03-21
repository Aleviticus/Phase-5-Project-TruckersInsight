from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Trucker(db.Model, SerializerMixin):
    __tablename__ = 'truckers_table'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)
    owner = db.Column(db.String)
    vehicle = db.Column(db.String)
    trailer = db.Column(db.String)
    location = db.Column(db.String)
    phone_number = db.Column(db.String)
    years_of_experience = db.Column(db.String)

    load = db.relationship('Load', back_populates='trucker')
    company = association_proxy('load','company')
    serialize_rules=('-load.trucker','-company')
    

class Company(db.Model, SerializerMixin):
    __tablename__ = 'companies_table'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)
    company_name = db.Column(db.String)
    location = db.Column(db.String)
    phone_number = db.Column(db.String)

    load = db.relationship('Load', back_populates='company')
    truckers = association_proxy('load','trucker')
    serialize_rules=('-load.company','-trucker')


class Load(db.Model, SerializerMixin):
    __tablename__ = 'loads_table'

    id = db.Column(db.Integer, primary_key=True)
    # username = db.Column(db.String, unique=True, nullable=False)
    dropoff = db.Column(db.String)
    materials = db.Column(db.String)
    weight = db.Column(db.Integer)
    payout = db.Column(db.String)
    trucker_id = db.Column(db.Integer, db.ForeignKey('truckers_table.id'))
    company_id = db.Column(db.Integer, db.ForeignKey('companies_table.id'))

    trucker = db.relationship('Trucker', back_populates='load')
    company = db.relationship('Company', back_populates='load')

    serialize_rules=('-company','-trucker')

# add a connect model table
        # trucker_id
        # company_id