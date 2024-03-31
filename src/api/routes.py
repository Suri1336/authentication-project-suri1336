"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import hashlib
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api  )


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/token',methods=['POST'])
def create_token():
    email=request.json.get('email',None)
    password=request.json.get('password',None)
    access_token=create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/signup',methods=['POST'])
def create_user():
    body=request.get_json()
    email=body['email']
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    new_user=User(email=email,password=password,is_active=True)
    db.session.add(new_user)
    db.session.commit()
    access_token=create_access_token(identity=email)
    return jsonify(access_token,'user successfully created')

@api.route('/user',methods=['GET'])
def get_all_users():
    users=User.query.all()
    all_users=list(map())

@api.route('/private',methods=['GET'])
@jwt_required()
def get_private():
    return jsonify ({'msg':'this is a private end point you need to be logged in to see it'}),200
