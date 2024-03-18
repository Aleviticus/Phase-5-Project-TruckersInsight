from app import app
from model import db, Trucker, Company, Load
from faker import Faker
from random import choice as random_choice

faker = Faker()

if __name__ == '__main__':
    with app.app_context():
        print("Seeding database")

        print("Removing old data")

        Trucker.query.delete()
        Company.query.delete()
        Load.query.delete()

        print('creating Trucker')

        vehicle = ['Peterbilt 579', 'Peterbilt 389', 'Peterbilt 379', 'Volvo VNL', 'Volvo VNR', 'Kenworth W900', 'Kenworth T800', 'Kenworth T680', 'International RH613', 'Internation 8600' ]

        trailer = [True, False]

        location = ['New York', 'Texas', 'Florida', 'California', 'Maine', 'Virgina', 'Pennsylvania', 'Vermont', 'New Jersey', 'Indiana']

        # random_integer = faker.random_int(min=0,max=20)

        years_of_experience = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

        # trying out faker address
        for _ in range(9):
            t = Trucker(username=faker.name(), password=faker.password(), owner=faker.name(), vehicle=random_choice(vehicle), trailer=random_choice(trailer), location=random_choice(location), phone_number=faker.phone_number(), years_of_experience=random_choice(years_of_experience))
            db.session.add(t)

        db.session.commit()

        print('creating company')
        for _ in range(20):
            c = Company(username=faker.name(), password=faker.password(),company_name=faker.name(), location=faker.address(), phone_number=faker.phone_number(),)
            db.session.add(c)
        
        db.session.commit()

        print('creating load')

        materials = ['baby food', 'supplies', 'food', 'hardware', 'pakages']

        weight = ['23,000', '36,000', '40,000', '25,000', '80,000']

        payout = ['$9,000', '$5,000', '$3,000', '$10,000', '35,000']

        truckers = Trucker.query.all()
        companies = Company.query.all()


        for _ in range(30):
            l = Load(dropoff=faker.address(), materials=random_choice(materials), weight=random_choice(weight), payout=random_choice(payout),trucker_id=random_choice(truckers).id, company_id=random_choice(companies).id)
            db.session.add(l)

        db.session.commit()

