def leeFichero():
    f= open('/etc/passwd','r')
    datos = f.readlines()
    f.close()
    resultado=[]

    for linea in datos:
        if linea[0]=='#' or linea[0]=='_':
            continue
        resultado.append(linea)
    return resultado

def main():
    Usuarios=leeFichero()
    for usuario in Usuarios:
        partes=usuario.split(':')
        print (f'Usuario:{partes[0]}')
    

if __name__ == '__main__':
    main()
