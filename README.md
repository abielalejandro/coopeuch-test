# coopeuch-test

#Run manual
##backend

```
cd test-backend
mvn clean package
java -jar target/task-0.0.1-SNAPSHOT
```

##backend
Editar .env y cambiar la variable REACT_APP_API_PATH con http://localhost:8080
```
cd test-frontend
npm install
npm start
```



#Run with docker compose
```
cd test-backend
mvn clean package
```

```
docker-compose up
```

La Base de datos es H2 in memory

Backend is running on port 8080
Swagger http://localhost:8080/swagger-ui.html

Frontend is running on port 3000

