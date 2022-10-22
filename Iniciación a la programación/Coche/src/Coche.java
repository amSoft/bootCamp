public class Coche {
    int puertas;

    public Coche(){
        this.puertas=0;
    }

    void ponerPuerta(){
        this.puertas++;
    }

    public static void main(String[] args){
        Coche miCoche= new Coche();
        miCoche.ponerPuerta();
        System.out.println("Mi coche tiene "+miCoche.puertas + " puertas");
        miCoche.ponerPuerta();
        System.out.println("Mi coche tiene "+miCoche.puertas + " puertas");
    }

}


