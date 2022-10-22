pais=""
paises=[]
print("Teclea exit para terminar de introducir países")
while pais!='exit':
    pais=input("Pais:")
    if pais!='exit':
        paises.append(pais)
paises=list(set(paises))
paises.sort()


print(list(paises))

    
