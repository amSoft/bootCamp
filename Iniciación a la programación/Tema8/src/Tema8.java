public class Tema8 {
    static class Persona{
        int edad;
        String nombre;
        String telefono;

        public Persona(){
            edad=0;
            nombre="";
            telefono="";

        }

        public Persona (int edad, String nombre, String telefono){
            this.edad=edad;
            this.nombre=nombre;
            this.telefono=telefono;
        }

        private int getEdad(){
            return edad;
        }
        private String getNombre(){
            return nombre;
        }
        private String getTelefono(){
            return telefono;
        }
        private void setEdad(int edad){
            this.edad=edad;
        }
        private void setNombre(String nombre){
            this.nombre=nombre;
        }
        private void setTelefono(String telefono){
            this.telefono=telefono;
        }

    }//Fin de la clase Persona

    public static void main(String[ ] args) {
        Persona  yo = new Persona();
        yo.setEdad(54);
        yo.setNombre("Aurelio Magdaleno Txapartegi");
        yo.setTelefono("666666666");

        System.out.println(yo.getNombre()+", Edad="+yo.getEdad()+", Teléfono="+yo.getTelefono());
    }

}
