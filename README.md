# MERN-quiz

MERN team - practice project #1

## Server Installation

1. Download and install [NodeJS](https://nodejs.org/en/)
2. Download [MongoDB](https://www.mongodb.com/download-center/community)
3. Install the Complete version (step 3 in installation wizard)
4. Create `data/db` folders in your system's root
5. Add `mongod` from MongoDB installation folder to your path (if not added automatically)
6. Run `mongod --port 27017 --dbpath {path to your data/db}` e.g. `mongod --port 27017 --dbpath C:\\data\\db`
7. Download and install [RoboMongo](https://robomongo.org/download)
8. Start RoboMongo and create a new connection to localhost:27017
9. Create `.env` file in the project's root with following content:

```
API_ROOT="/api/v1"
BASE_URL="http://localhost"
JWT_KEY="5xNziLPHhrmga4OxKNr0W"
MONGO_URI="mongodb://localhost:27017/{your DB name}"
PORT=8080
FILE_PATH="./files"
```

10. Run `npm i` from server folder

## UI Installation

1. Run `npm i` from ui folder ;)

## Usage

• Server: Run `npm run server` from root folder

• UI: Run `npm run ui` from root folder
