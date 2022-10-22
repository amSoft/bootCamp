from datetime import datetime,time

ahora = datetime.now()
horaActual=time(ahora.hour,ahora.minute,ahora.second)
horaSalida=time(19,0,0)

print ("HoraActual=",horaActual)
print ("HoraSalida=",horaSalida)

if horaActual>horaSalida:
    print("Vete a casa a descansar")
else:
    formato = "%H:%M:%S"
    jornadaRestante=datetime.strptime(str(horaSalida),formato)-datetime.strptime(str(horaActual),formato)
    print("Te quedan ", str(jornadaRestante))
