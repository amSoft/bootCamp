numeroInicial=int(input("Número inicial="))
numeroFinal=int(input("Número final="))

for numero in range(numeroInicial,numeroFinal):
    if numero%2!=0:
        print(str(numero)+" ")