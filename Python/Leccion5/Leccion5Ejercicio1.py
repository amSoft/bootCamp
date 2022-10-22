def areaTriangulo (base, altura):
    return (base*altura)/2

def areaCirculo (radio):
    return 3.1416*radio*radio

print ("El área de un triángulo de base10 y altura 5 es = ",str(areaTriangulo(10,5)))
print ("El área de un círculo de radio 3 es = ",str(round(areaCirculo(3),2)))
