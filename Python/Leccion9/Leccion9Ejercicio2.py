from functools import reduce

numeros=[1,2,3,4,5,6,7,8,9,10]
def impar(x):
    if x%2!=0:
        return True
    return False

def suma(a,b):
    return a+b

impares=list(filter(impar,numeros))
print (impares)
print (reduce(suma,impares))

