
public class Ejercicio3 {
	
	public static String concatena(String frase, String[] datos) {
		String cadena=frase;
		for (String dato: datos) {
			cadena+=" "+dato;
		}
		return cadena;
	}
	
	public static String concatena(String frase, String datos) {
		
		return frase + " " + datos;
	}
	
	public static void main (String [] args){
		
		String[] nombres= {"Juan","Pedro","Alberto"};
		System.out.println(concatena("Mis alumnos son ",nombres));
		System.out.println(concatena("Mis alumnos son ","Pedro y Pablo"));
	}

}
