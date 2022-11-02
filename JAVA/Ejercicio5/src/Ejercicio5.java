
public class Ejercicio5 {

	public static void main (String[] args) {
		CocheCRUD cocheCrud = new CocheCRUDImpl();
		cocheCrud.save();
		cocheCrud.findAll();
		cocheCrud.delete();
		
	}
}
