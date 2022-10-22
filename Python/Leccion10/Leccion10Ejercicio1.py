import tkinter as tk


def reiniciar():
    opcionSeleccionada.set(None)
    lSeleccion.config(text="Selecciona tu lenguaje preferido")
    
def seleccion():
    lSeleccion.config(text="Opción seleccionada={}".format(opcionSeleccionada.get()))

windowMain= tk.Tk()
windowMain.geometry('150x200')
 

opcionSeleccionada = tk.IntVar()

r1=tk.Radiobutton(windowMain,text='Python',
                  variable=opcionSeleccionada, value=1,padx=10,command=seleccion)
r2=tk.Radiobutton(windowMain,text='Php',
                  variable=opcionSeleccionada, value=2,padx=10,command=seleccion)
r3=tk.Radiobutton(windowMain,text='Java', 
                  variable=opcionSeleccionada, value=3,padx=10,command=seleccion)


r1.grid(column=0,row=0)
r2.grid(column=0,row=1)
r3.grid(column=0,row=2)

lSeleccion=tk.Label(windowMain)
lSeleccion.config(text="Selecciona tu lenguaje preferido")
lSeleccion.grid(column=0,row=3)

bReiniciar=tk.Button(windowMain, text="Reiniciar", command=reiniciar)
bReiniciar.grid(column=0,row=4)


windowMain.mainloop()
