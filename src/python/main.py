import fastapi
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import pymysql
from pydantic import BaseModel
from datetime import timedelta

app = FastAPI()


class ClientCreate(BaseModel):
    id: int
    name: str
    lastname: str
    mail: str
    password: str
    role_id: int


class Request(BaseModel):
    id: int
    name: str
    time: timedelta
    description: str
    history_id: int
    client_id: int


class DataBase(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DataBase, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__connect()

    def __connect(self):
        self.connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='admin',
            password='admin',
            database='db-theme-3',
        )
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)

    def execute(self, command):
        self.cursor.execute(command)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result


@app.get("/api/allusers")
async def get_users():
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM client'))


@app.get("/api/allrequest")
async def get_users():
    db = DataBase()
    data = db.execute('SELECT * FROM request')
    data = jsonable_encoder(data)
    return JSONResponse(data)


@app.post('/api/adduser', status_code=201)
async def add_new_user(client: ClientCreate):
    db = DataBase()
    try:
        db.execute(
            f"INSERT INTO `client` (`id`, `name`, `lastname`, `mail`, `password`, `Role.id`) "
            f"VALUES ({client.id}, '{client.name}', '{client.lastname}', '{client.mail}', '{client.password}', {client.role_id});"
        )
    except Exception as e:
        raise fastapi.HTTPException(status_code=500, detail=str(e))

    return {'message': 'New user added!'}


@app.get('/api/user/{id}')
def get_user_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM client WHERE id={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.delete('/api/deleteuser/{id}')
def delete(id):
    db = DataBase()
    if not db.execute(f'SELECT * FROM client WHERE id={id}'):
        raise fastapi.HTTPException(status_code=404)
    db.execute(f"DELETE FROM `client` WHERE id={id}")
    return {'message': f'User with id={id} deleted'}

@app.post('/api/addrequest', status_code=201)
async def add_new_request(request: Request):
    db = DataBase()
    try:
        db.execute(
            f"INSERT INTO `request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) "
            f"VALUES ({request.id}, '{request.name}', '{request.time}', '{request.description}', {request.history_id}, {request.client_id});"
        )
    except Exception as e:
        raise fastapi.HTTPException(status_code=500, detail=str(e))

    return {'message': 'New request added!'}


@app.get('/api/request/{id}')
def get_request_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM request WHERE id={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.delete('/api/deleterequest/{id}')
def delete(id):
    db = DataBase()
    if not db.execute(f'SELECT * FROM request WHERE id={id}'):
        raise fastapi.HTTPException(status_code=404)
    db.execute(f"DELETE FROM `request` WHERE id={id}")
    return {'message': f'Request with id={id} deleted'}
