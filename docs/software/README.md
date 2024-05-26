# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними  на FastAPI python

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
    
DROP SCHEMA IF EXISTS `db-theme-3` ;
   
CREATE SCHEMA IF NOT EXISTS `db-theme-3` DEFAULT CHARACTER SET utf8 ;
USE `db-theme-3` ;
DROP TABLE IF EXISTS `db-theme-3`.`Export`;
 
CREATE TABLE IF NOT EXISTS `db-theme-3`.`Export` (
    `Export.id` INT NOT NULL,
    `Export.isSuccess` BOOLEAN,
    `Export.time` DATETIME NOT NULL,
    `History_History.id` INT NOT NULL,
     PRIMARY KEY (`Export.id`),
     INDEX `fk_History_Export_idx` (`History_History.id` ASC) VISIBLE,
     CONSTRAINT `fk_History_Export`
        FOREIGN KEY (`History_History.id`)
        REFERENCES `db-theme-3`.`History` (`History.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `db-theme-3`.`History` ;
    
CREATE TABLE IF NOT EXISTS `db-theme-3`.`History` (
      `History.id` INT NOT NULL,
      `History.name` VARCHAR(45) NULL,
      `History.time` DATETIME NULL,
      PRIMARY KEY (`History.id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`SupportRequest` (
    `SupportRequest.id` INT NOT NULL PRIMARY KEY,
    `SupportRequest.isAnswered` BOOLEAN,
    `SupportRequest.type` VARCHAR(45) NOT NULL,
    `Client_Client.id` INT NOT NULL,
    `History_History.id` INT NOT NULL,
    INDEX `fk_SupportRequest_Client_idx` (`Client_Client.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_Client`
        FOREIGN KEY (`Client_Client.id`)
        REFERENCES `db-theme-3`.`Client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    INDEX `fk_SupportRequest_History_idx` (`History_History.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_History`
        FOREIGN KEY (`History_History.id`)
        REFERENCES `db-theme-3`.`History` (`History.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-theme-3`.`adminAnswer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db-theme-3`.`adminAnswer` ;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`adminAnswer` (
  `adminAnswer.id` SERIAL NOT NULL,
  `adminAnswer.text` VARCHAR(250) NOT NULL,
  `adminAnswer.time` DATETIME NOT NULL,
  `supportRequest.id` INT NOT NULL,
  PRIMARY KEY (`adminAnswer.id`),
  INDEX `fk_SupportRequest_Export_idx` (`supportRequest.id` ASC) VISIBLE,
     CONSTRAINT `fk_SupportRequest_Export`
        FOREIGN KEY (`supportRequest.id`)
        REFERENCES `db-theme-3`.`SupportRequest` (`SupportRequest.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `db-theme-3`.`userMessage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db-theme-3`.`userMessage` ;
CREATE TABLE IF NOT EXISTS `db-theme-3`.`userMessage` (
  `userMessage.id` INT NOT NULL,
  `userMessage.text` VARCHAR(250) NOT NULL,
  `userMessage.time` DATETIME NOT NULL,
  `SupportRequest_SupportRequest.id` INT NOT NULL,
  PRIMARY KEY (`userMessage.id`),
  INDEX `fk_userMessage_SupportRequest_idx` (`SupportRequest_SupportRequest.id` ASC) VISIBLE,
  CONSTRAINT `fk_userMessage_SupportRequest`
    FOREIGN KEY (`SupportRequest_SupportRequest.id`)
    REFERENCES `db-theme-3`.`SupportRequest` (`SupportRequest.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `db-theme-3`.`Task`;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`Task` (
    `Task.id` INT NOT NULL ,
    `Task.name` VARCHAR(255) NOT NULL,
    `Task.deadline` DATETIME NOT NULL,
    `Client_Client.id` INT NOT NULL,
    PRIMARY KEY (`Task.id`),
    INDEX `fk_Task_Client1_idx` (`Client_Client.id` ASC) VISIBLE,
    CONSTRAINT `fk_Task_Client1`
    FOREIGN KEY (`Client_Client.id`)
    REFERENCES `db-theme-3`.`Client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `db-theme-3`.`Request` ;
    
CREATE TABLE IF NOT EXISTS `db-theme-3`.`Request` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `time` TIME NULL,
      `description` VARCHAR(45) NULL,
      `History_History.id` INT NOT NULL,
      `Client.id` INT NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_Request_History1_idx` (`History_History.id` ASC) VISIBLE,
      INDEX `fk_Request_Client1_idx` (`Client.id` ASC) VISIBLE,
      CONSTRAINT `fk_Request_History1`
        FOREIGN KEY (`History_History.id`)
        REFERENCES `db-theme-3`.`History` (`History.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_Request_Client1`
        FOREIGN KEY (`Client.id`)
        REFERENCES `db-theme-3`.`Client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `db-theme-3`.`Client` ;
    
CREATE TABLE IF NOT EXISTS `db-theme-3`.`Client` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `lastname` VARCHAR(45) NULL,
      `mail` VARCHAR(45) NULL,
      `password` VARCHAR(45) NULL,
      `Role.id` INT NOT NULL,
       UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE,
      PRIMARY KEY (`id`),
      INDEX `fk_Client_Role1_idx` (`Role.id` ASC) VISIBLE,
      CONSTRAINT `fk_Client_Role1`
        FOREIGN KEY (`Role.id`)
        REFERENCES `db-theme-3`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


    DROP TABLE IF EXISTS `db-theme-3`.`Role` ;
    
    CREATE TABLE IF NOT EXISTS `db-theme-3`.`Role` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `permission` VARCHAR(45) NULL,
      `description` VARCHAR(45) NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`userMessage` (`userMessage.id`, `userMessage.text`, `userMessage.time`, `SupportRequest_SupportRequest.id`) VALUES (1, 'Question 1', '2024-04-19 12:34:56', 1);
INSERT INTO `db-theme-3`.`userMessage` (`userMessage.id`, `userMessage.text`, `userMessage.time`, `SupportRequest_SupportRequest.id`) VALUES (2, 'Question 2', '2024-05-19 21:43:11', 1);
INSERT INTO `db-theme-3`.`userMessage` (`userMessage.id`, `userMessage.text`, `userMessage.time`, `SupportRequest_SupportRequest.id`) VALUES (3, 'Question 3', '2024-05-19 16:05:25', 1);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) VALUES (1, 'Swc', '11:30', 'SwERVREVREc', 1, 1);
INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) VALUES (2, 'Wdcw', '22:00', 'SwFDVFVc', 1, 2);
INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) VALUES (3, 'Ccec', '13:00', 'SwEVSGMUIc', 1, 3);  
COMMIT;
START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (1, 'Swc', 'frc', 'Swc@gmail.com', '123', 1);
INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (2, 'fewc', 'Swc', 'fewc@gmail.com', '321', 2);
INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (3, 'Gdwc', 'oirwc','Gdwc@gmail.com', '123456', 3);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (1, 'Swc', 'frc', 'bhvruoeijrnwp');
INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (2, 'fewc', 'Swc', 'njnjevjnvenijveni');
INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (3, 'Gdwc', 'oirwc', 'fvvkfnjewojcw');
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`, `SupportRequest.id`) VALUES (1, 'Answer1', '2024-03-21', 1);
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`, `SupportRequest.id`) VALUES (2, 'Answer2', '2024-04-19', 1);
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`, `SupportRequest.id`) VALUES (3, 'Answer3', '2024-05-10', 1);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Export` (`Export.id`, `Export.isSuccess`, `Export.time`, `History_History.id`) VALUES (1, 0, '2024-3-26', 1);
INSERT INTO `db-theme-3`.`Export` (`Export.id`, `Export.isSuccess`, `Export.time`, `History_History.id`) VALUES (2, 1, '2024-4-17', 1);
INSERT INTO `db-theme-3`.`Export` (`Export.id`, `Export.isSuccess`, `Export.time`, `History_History.id`) VALUES (3, 0, '2024-4-23', 1);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`History` (`History.id`, `History.name`, `History.time`) VALUES (1, 'History 1', '2024-3-26');     
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`, `Client_Client.id`) VALUES (1, 'Task1', '2024-3-26', 1);
INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`, `Client_Client.id`) VALUES (2, 'Task2', '2024-4-26', 2);
INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`, `Client_Client.id`) VALUES (3, 'Task3', '2024-5-26', 3);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`SupportRequest` (`SupportRequest.id`, `SupportRequest.isAnswered`, `SupportRequest.type`, `Client_Client.id`, `History_History.id`) VALUES (1, 1, 'abc', 1, 1);
INSERT INTO `db-theme-3`.`SupportRequest` (`SupportRequest.id`, `SupportRequest.isAnswered`, `SupportRequest.type`, `Client_Client.id`, `History_History.id`) VALUES (2, 1, 'bcd', 1, 1);
INSERT INTO `db-theme-3`.`SupportRequest` (`SupportRequest.id`, `SupportRequest.isAnswered`, `SupportRequest.type`, `Client_Client.id`, `History_History.id`) VALUES (3, 1, 'cde', 1, 1);
COMMIT;
```

## RESTfull сервіс для управління даними  на FastAPI python

```python
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
```


