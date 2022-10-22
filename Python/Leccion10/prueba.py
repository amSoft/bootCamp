import tkinter

def main():
    window = tkinter.Tk()
    lSaludo=tkinter.Label(window,text="Hola!")
    lSaludo.pack(ipadx=10,ipady=10)

    window.mainloop()

if __name__ =='__main__':
    main()


