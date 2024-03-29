// 1 Baja el archivo grades.json y en la terminal ejecuta el siguiente comando
mongoimport -d students -c grades < grades.json
// 2019-11-12T22:12:31.406-0700    connected to: mongodb://localhost/
//2019-11-12T22:12:31.739-0700    800 document(s) imported successfully. 0 document(s) failed to import.
// 2 El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente 
// la colección con los siguientes comandos en la terminal de mongo:
// ¿Cuántos registros arrojo el comando count?
use students;
db.grades.count();
// 800

// 3 Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({"student_id": 4}, {"_id": 0, "student_id": 0, "type":0, })

// 87.89071881934647, 27.29006335059361, 5.244452510818443, 28.656451042441

//4) ¿Cuántos registros hay de tipo exam?
db.grades.count({"type": "exam"})
//200
//5) ¿Cuántos registros hay de tipo homework?
db.grades.count({"type": "homework"})
//400
//6) ¿Cuántos registros hay de tipo quiz?
db.grades.count({"type": "quiz"})
// 200
//7) Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.update({"student_id": 3}, {$unset:{"score":""}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
//8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({"score": 75.29561445722392, "type":"homework" }, {"_id": 0, "type":0, "score":0})
// student 9
//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb5: 91 por 100
db.grades.update_many({"_id":ObjectId("50906d7fa3c412bb040eb591")}, {$set: {"score":100}})
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
//10) A qué estudiante pertenece esta calificación.
db.grades.find({"_id":ObjectId("50906d7fa3c412bb040eb591")}, {"_id":0, "type":0, "score":0})
// student 6