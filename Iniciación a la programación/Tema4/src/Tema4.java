public class Tema4 {

    public static void main(String[ ] args) {
        int numeroIf=-1;
        int numeroWhile=0;
        String estacion="Verano";

        //IF
        if (numeroIf>0)
            System.out.println("El número "+ numeroIf + " es mayor que 0");
        else if(numeroIf<0)
            System.out.println("El número "+ numeroIf + " es menor que 0");
        else
            System.out.println("El número "+ numeroIf + " es igual que 0");


        //WHILE
        while (numeroWhile<3){
            numeroWhile++;
            System.out.println("do while numeroWhile = "+numeroWhile);
        }

        //DO WHILE
        do {
            numeroWhile++;
            System.out.println("numeroWhile = "+numeroWhile);
        }while (numeroWhile<3);


        //FOR
        for(int numeroFor=0; numeroFor<=3;numeroFor++)
            System.out.println("numeroFor="+numeroFor);


        //SWITCH
        switch (estacion){
            case "Otoño":
                System.out.println("Estamos en Otoño");
                break;

            case "Invierno":
                System.out.println("Estamos en Invierno");
                break;

            case "Primavera":
                System.out.println("Estamos en Primavera");
                break;

            case "Verano":
                System.out.println("Estamos en Verano");
                break;
            case "default":
                System.out.println("la variable no es una estación conocida");
                break;
        }
    }



}
