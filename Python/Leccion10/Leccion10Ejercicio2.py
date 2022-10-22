import tkinter as tk

def seleccion(event):
    opcionesSeleccionadas=lstLenguajes.curselection()
    cadena=""
    for i in opcionesSeleccionadas:
        cadena+=listaOpciones[i]+", "
    lSeleccion.config(text=f'Lenguajes seleccionados {cadena}')

windowMain= tk.Tk()
windowMain.geometry("800x600")
windowMain.title("Prueba Listbox")

listaOpciones=['php','python','c++','go','java','javascript']
lenguajes=tk.StringVar(value=listaOpciones)

lstLenguajes=tk.Listbox(windowMain,listvariable=lenguajes,selectmode='extended')
lstLenguajes.bind('<<ListboxSelect>>',seleccion)
                        

    
lstLenguajes.grid(column=0,row=0,sticky='w',padx=10,pady=5)

lSeleccion=tk.Label(windowMain)
lSeleccion.config(text="Selecciona tu lenguaje preferido")
lSeleccion.grid(column=0,row=8)
windowMain.mainloop()
