from flask import request, session
from model import db, Trucker, Company, Load, Connect
from flask_bcrypt import Bcrypt

from config import create_app, db

app = create_app()
bcrypt = Bcrypt(app)

#  ask question about this commnent line below
app.route('/api')
def index():
    return "Welcome to TruckerInsight"

# Trucker routes
@app.post('/api/login/trucker')
def login_trucker():
    data = request.json
    username = data['username']
    password = data['password']
    trucker = Trucker.query.where(Trucker.username == username).first()
    if trucker and bcrypt.check_password_hash(trucker.password, password):
        session['trucker_id'] = trucker.id
        return trucker.to_dict(), 200
    else:
        return {}, 401

@app.get('/api/check_session/trucker')
def check_session_trucker():
    trucker_id = session.get('trucker_id')
    trucker = Trucker.query.where(Trucker.id == trucker_id).first()
    if trucker:
        return trucker.to_dict(), 200
    else:
        return {}, 200

@app.delete('/api/logout/trucker')
def logout_trucker():
    session.pop('trucker_id')
    # make 1 universal logout feature
    return {}, 204

@app.get('/api/trucker')
def get_trucker():
    all_trucker = Trucker.query.all()
    return [ trucker.to_dict() for trucker in all_trucker], 200

@app.get('/trucker/<int:id>')
def get_trucker_by_id(id):
    found_trucker = Trucker.query.where(Trucker.id == id).first()
    if found_trucker:
        return found_trucker.to_dict(), 200
    else:
        return{'error': 'Trucker not found'}
    
@app.post('/api/register/trucker')
def add_trucker():
    data = request.json

    try:
        new_trucker = Trucker(
            username=data.get('username'),password=data.get('password'), owner=data.get('owner'),vehicle=data.get('vehicle'),trailer=data.get('trailer'),location=data.get('location'), phone_number=data.get('phone_number'),years_of_experience=data.get('years_of_experience'))
        new_trucker.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        db.session.add(new_trucker)
        db.session.commit()
        return new_trucker.to_dict(), 201
    
    except ValueError as error:
        return {'error': f'{error}'}, 406
    except:
        return {'error': 'Invalid data'}, 406
    
@app.patch('/trucker/<int:id>')
def update_trucker(id):
    data = request.json
    found_trucker = Trucker.query.where(Trucker.id == id).first()
    
    if found_trucker:
        try:
            for key in data:
                setattr(found_trucker, key, data[key])
            db.session.commit()
            return found_trucker.to_dict(), 202
        except ValueError as error:
            return {'error': f'{error}'}, 406
    else:
        return {'error': "Trucker not found"}
    
# Company routes
    
@app.post('/api/login/company')
def login_company():
    data = request.json
    username = data['username']
    password = data['password']
    company = Company.query.where(Company.username == username).first()
    if company and bcrypt.check_password_hash(company.password, password):
        session['company_id'] = company.id
        return company.to_dict()
    
@app.get('/api/check_session/company')
def check_session_company():
    company_id = session.get('company_id')
    company = Company.query.where(Company.id == company_id).first()
    if company:
        return company.to_dict(), 200
    else:
        return {}, 200

@app.delete('/api/logout/company')
def logout_company():
    session.pop('company_id')
    return {}, 204

@app.get('/api/company')
def get_company():
    all_company = Company.query.all()
    return [ company.to_dict() for company in all_company], 200
    
@app.get('/company/<int:id>')
def get_company_by_id(id):
    found_company = Company.query.where(Company.id == id).first()
    if found_company:
        return found_company.to_dict(), 200
    else:
        return {'error': 'Company not found'}
    
@app.post('/api/register/company')
def add_company():
    data = request.json

    try:
        new_company = Company(username=data.get('username'),password=data.get('password'),company_name=data.get('company_name'),location=data.get('location'), phone_number=data.get('phone_number'))
        new_company.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        db.session.add(new_company)
        db.session.commit()
        return new_company.to_dict(), 201
    
    except ValueError as error:
        return{'error': f'{error}'}, 406
    except:
        return {'error': 'Invalid data'}, 406

@app.patch('/company/<int:id>')
def update_company(id):
    data = request.json
    found_company = Company.query.where(Company.id == id).first()
    
    if found_company:
        try:
            for key in data:
                setattr(found_company, key, data[key])
            db.session.commit()
            return found_company.to_dict(), 202
        except ValueError as error:
            return {'error': f'{error}'}, 406
    else:
        return {'error': "Company not found"}
    
@app.get('/load/<int:id>')
def get_load_by_id(id):
    found_load = Load.query.where(Load.id == id).first()
    if found_load:
        return found_load.to_dict(), 200
    else:
        return {'error': 'Load not found'}
    
@app.get('/api/load')
def get_load():
    all_load = Load.query.all()
    return [ load.to_dict() for load in all_load], 200

@app.post('/api/post/load')
def add_load():
    data = request.json

    try:
        new_load = Load(pickup=data.get('pickup'), dropoff=data.get('dropoff'), materials=data.get('materials'), weight=data.get('weight'), payout=data.get('payout')) 
        db.session.add(new_load)
        db.session.commit()
        return new_load.to_dict(), 201
    
    except ValueError as error:
        return{'error': f'{error}'}, 406
    except:
        return {'error': 'Invalid data'}, 406
    
    
# setting up my connect for truckers and company 
@app.get('/api/connect')
def get_connect():
    all_connect = Connect.query.all()
    return [ connect.to_dict() for connect in all_connect], 200 

@app.post('/api/connect')
def add_connect():
    data = request.json

    try:
        new_connect=Connect(trucker_id=data.get('trucker_id'), company_id=data.get('company_id'))
        db.session.add(new_connect)
        db.session.commit()
        return new_connect.to_dict(), 201
    
    except ValueError as error:
        return{'error': f'{error}'}, 406
    except:
        return {'error': 'Invalid data'}, 406

    
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)