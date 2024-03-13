from app import app
from model import db, Trucker, Company, Load
from faker import Faker
from random import choice as random_choice

faker = Faker()

if __name__ == '__main__':
    with app.app_content():
        print("Seeding database")

        print("Removing old data")

        Trucker.query.delete()
        Company.query.delete()
        Load.query.delete()

        print('creating Trucker')

        vehicle = ['Peterbilt 579', 'Peterbilt 389', 'Peterbilt 379', 'Volvo VNL', 'Volvo VNR', 'Kenworth W900', 'Kenworth T800', 'Kenworth T680', 'International RH613', 'Internation 8600' ]

        trailer = [True, False]

        location = ['New York', 'Texas', 'Florida', 'California', 'Maine', 'Virgina', 'Pennsylvania', 'Vermont', 'New Jersey', 'Indiana']

        for _ in range(9):
            t = Trucker(owner=faker.name(), vehicle=random_choice(vehicle), trailer=random_choice(trailer), location=random_choice(location), phone_number=faker.phone_number(), years_of_experience=faker)
