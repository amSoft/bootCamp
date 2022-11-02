import java.util.Scanner;

public class Ejercicio2 {

	public static double precioIVA(double precio) {
		return precio * 1.21;
	}
	public static void main(String[] args) {
		Scanner escaner= new Scanner(System.in);
		
		System.out.println("Introduce un precio");
		double precio = escaner.nextDouble();
		System.out.println ("El precio con IVA es de " + precioIVA(precio));

	}

}
