import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Vector;


public class Ejercicio789 {

	
	public static String reverse(String texto) {
		String cadena="";
		for (int i=texto.length()-1;i>=0;i--) {
			cadena+=texto.charAt(i);
		}
		
		return cadena;
	}

	public static float dividePorCero(int numero, int divisor) throws ArithmeticException{
		return numero/divisor;
	} 

	public static void copiaFichero (String fileLn, String fileOut) throws IOException{
		PrintStream ficheroSalida = new PrintStream(new File(fileOut));
		InputStream fis = new FileInputStream(fileLn);
		InputStreamReader isr = new InputStreamReader(fis,StandardCharsets.UTF_8);
		BufferedReader br = new BufferedReader(isr);
		String linea;
		while ((linea=br.readLine())!=null){
			ficheroSalida.println(linea);
		}

		
}

	public static void main(String[] args) {
		
		
		String [] nombres = {"Juan","Pedro","Pablo"};
		int[][]numeros = {{1,2},{2,25},{3,64}};
		
		
		System.out.println(reverse("Hola Mundo"));
		
		//1
		for (String nombre: nombres) {
			System.out.println(nombre);
		}

		//2
		for (int i=0;i<numeros.length;i++) {
			System.out.println(numeros[i][0]+" - "+numeros[i][1]);
		}
		
		//3
		Vector vector = new Vector();
		vector.add("uno");
		vector.add("dos");
		vector.add("tres");
		vector.add("cuatro");
		vector.add("cinco");
		vector.remove(2);
		vector.remove(3);
		for (int i=0;i<vector.size();i++) {
			System.out.println(vector.get(i).toString());
		}
		
		//4
		//Que se incrementa en el doble por cada incremento superior a 10
		
		//5
		ArrayList<String> apellidos=new ArrayList<String>();
		apellidos.add("Pérez");
		apellidos.add("López");
		apellidos.add("Alvarez");
		apellidos.add("García");
		LinkedList<String> apellidos2 = new LinkedList<String>();
		apellidos2.addAll(apellidos);
		for (int i=0;i<apellidos.size();i++) {
			System.out.println(apellidos.get(i)+ " - "+ apellidos2.get(i));
		}
		
		//6
		ArrayList<Integer> numeros2 = new ArrayList<Integer>();
		for (int i=0;i<10;i++) {
			numeros2.add(i+1);
		}
		for (int i=0;i<10;i++) {
			System.out.println(numeros2.get(i));
		}
		
		for (int i=0;i<numeros2.size();i++) {
			if (numeros2.get(i)%2==0) {
				numeros2.remove(numeros2.get(i));
			}
		}
		
		for (int i=0;i<numeros2.size();i++) {
			System.out.println(numeros2.get(i));
		}
		
		//7
		try{
			float resultado = dividePorCero(10,2);
			System.out.println(resultado);
			resultado = dividePorCero(10,0);
			System.out.println(resultado);
		}catch (ArithmeticException e){
			System.out.println("Esto no puede hacerse");
		}finally{
			System.out.println("Demo de código");
		}
		
		//8
		try {
			copiaFichero(System.getProperty("user.dir")+"/src/Ejercicio789.java","Ejercicio789_BIS.java");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
