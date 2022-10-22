import sqlite3

conn=sqlite3.connect('colegio.db')
cursor=conn.cursor()
crearTabla="""CREATE TABLE IF NOT EXISTS alumnos (
                id integer PRIMARY KEY,
                nombre text NOT NULL,
                apellidos text NOT NULL

                );"""

cursor.execute(crearTabla)

cursor.execute ("DELETE FROM alumnos")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (1,'Juan','Perez')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (2,'Alberto','Perez')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (3,'Mario','Perez')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (4,'Victor','Perez')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (5,'Aurelio','Magdaleno')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (6,'Jose','Perez')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (7,'Pedro','Perez')")
cursor.execute ("INSERT INTO alumnos (id,nombre,apellidos) values (8,'Ana','Perez')")


nombre=input('Introduce un nombre para la búsqueda:')
apellidos=input('Introduce unos apelldiospara la búsqueda:')
consultaBusqueda=" SELECT * FROM alumnos WHERE nombre='"+nombre+"' AND apellidos='"+apellidos+"'"

cursor.execute (consultaBusqueda)
rows = cursor.fetchall()
for row in rows:
    print (row)
                
                
conn.close()
    
