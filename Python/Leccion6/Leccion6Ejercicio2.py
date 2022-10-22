class Alumno:
    _nombre=""
    _nota=0

    def getNombre(self):
        return self._nombre
    
    def getNota(self):
        return self._nota
    
    def setNombre(self,nombre):
        self._nombre=nombre
        
    def setNota(self,nota):
        self._nota=nota
        
    def esAprobado(self):
        return self._nota >=5

alumno=Alumno()
alumno.setNombre("Pedro de la Cruz")
alumno.setNota(4.5)
if alumno.esAprobado():
    res=" SI "
else:
    res=" NO " 
print("El alumno ",alumno.getNombre(), res," ha aprobado con un ",alumno.getNota())

