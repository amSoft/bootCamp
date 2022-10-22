def esBisiesto(anyo):
    if anyo%4!=0:
        return False
    elif anyo%4==0 and anyo%100!=0:
        return True
    elif anyo%4==0 and anyo%100==0 and anyo%400!=0:
        return False
    else:
        return True
    
anyo= int(input("Introduce un año:"))
print("El año ",anyo," ¿Es bisiesto? ",esBisiesto(anyo))
