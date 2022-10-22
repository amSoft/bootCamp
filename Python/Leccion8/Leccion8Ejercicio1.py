cadena=input('Introduce el texto a incluir en el fichero:')
f= open('prueba.txt','w')
f.write(cadena)
f.close

print ('Mostrando el contenido del fichero')
f=open('prueba.txt','r')
datos=f.readlines()
f.close()
print(datos)
