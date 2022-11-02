
public class SmartWatch extends SmartDevice{
		boolean electrocardiograma;
		boolean oxigenoEnSangre;
		
		public SmartWatch(String marca, String so, boolean electro, boolean oxigeno) {
			super(marca,so);
			this.electrocardiograma=electro;
			this.oxigenoEnSangre=oxigeno;
			
		}
		
		public String toString() {
			return " Marca:" + this.marca+ ", SO:"+ this.sistemaOperativo + ", Electrocardiograma:"+ this.electrocardiograma+", Oxígeno en sangre:"+this.oxigenoEnSangre;
		}
}
	
