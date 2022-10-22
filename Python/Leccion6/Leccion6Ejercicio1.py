class Vehiculo:
    color="Rojo"
    ruedas=4
    puertas=5

class Coche(Vehiculo):
    velocidad=220
    cilindrada=1.9

miCoche=Coche()
print ("Color=",miCoche.color)
print ("Ruedas=",str(miCoche.ruedas))
print ("Puertas=",str(miCoche.puertas))
print ("Velocidad=",str(miCoche.velocidad))
print ("Cilindrada=",str(miCoche.cilindrada))
