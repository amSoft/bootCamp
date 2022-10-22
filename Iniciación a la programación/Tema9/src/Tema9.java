public class Tema9 {

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

        protected int getEdad(){
            return edad;
        }
        protected  String getNombre(){
            return nombre;
        }
        protected String getTelefono(){
            return telefono;
        }
       protected void setEdad(int edad){
            this.edad=edad;
        }
        protected void setNombre(String nombre){
            this.nombre=nombre;
        }
        protected  void setTelefono(String telefono){
            this.telefono=telefono;
        }

    }//Fin de la clase Persona

    static class Cliente extends Persona{
        int credito;
        public Cliente(){
            super();
            credito=0;
        }
        private int getCredito(){
            return credito;
        }
        private void setCredito(int credito){
            this.credito=credito;
        }
    }

    static class Trabajador extends Persona{
        int salario;
        public Trabajador(){
            super();
            salario=0;
        }
        private int getSalario(){
            return salario;
        }
        private void setSalario(int salario){
            this.salario=salario;
        }
    }

    public static void main(String[ ] args) {
        Cliente cliente = new Cliente();
        cliente.setEdad(50);
        cliente.setNombre("Cliente de pruebas");
        cliente.setTelefono("666666666");
        cliente.setCredito(10000);

        System.out.println("Cliente="+cliente.getNombre()+", Edad="+cliente.getEdad()+", Teléfono="+cliente.getTelefono()+", Crédito="+cliente.getCredito());

        Trabajador trabajador = new Trabajador();
        trabajador.setEdad(50);
        trabajador.setNombre("Trabajador de pruebas");
        trabajador.setTelefono("666666666");
        trabajador.setSalario(50000);

        System.out.println("Trabajador="+trabajador.getNombre()+", Edad="+trabajador.getEdad()+", Teléfono="+trabajador.getTelefono()+", Salario="+trabajador.getSalario());

    }
}
