import pickle

class Vehiculo:
    _tipo=""
    _modelo=""
    _color=""

    def __init__(self,tipo,modelo,color):
        self._tipo=tipo
        self._modelo=modelo
        self._color=color

    def getTipo(self):
        return self._tipo

    def getModelo(self):
        return self._modelo

    def getColor(self):
        return self._color

    def setTipo(self,tipo):
        self._tipo=tipo

    def setModelo(self,modelo):
        self._modelo=modelo

    def setColor(self,color):
        self_color=color

def grabaVehiculo(fichero,vehiculo):
    f=open(fichero,'wb')
    pickle.dump(vehiculo,f)
    f.close()

def leeVehiculo(fichero):
    f=open(fichero,'rb')
    vehiculo=pickle.load(f)
    f.close()
    return vehiculo
    

def main():
    vehiculo=Vehiculo("Coche","Tesla model X","Blanco")
    grabaVehiculo('Vehiculo.txt',vehiculo)
    vehiculo2=leeVehiculo('Vehiculo.txt')
    print(f'Vehículo tipo={vehiculo2.getTipo()}, modelo={vehiculo2.getModelo()}, color={vehiculo2.getColor()}')
    

if __name__ == '__main__':
    main()
