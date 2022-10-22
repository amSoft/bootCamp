def esPrimo(numero):
    for i in range(2,int(numero/2)):
        if (numero%i)==0:
            return False
    return True
n = int(input("Introduce un número="))
print ("El número ",n, " es Primo=",esPrimo(n))
