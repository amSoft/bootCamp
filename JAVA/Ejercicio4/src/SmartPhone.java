
public class SmartPhone extends SmartDevice{
	double pulgadas;
	int ram;
	
	public SmartPhone(String marca, String so, double pulgadas, int ram) {
		super(marca,so);
		this.pulgadas=pulgadas;
		this.ram=ram;
		
	}
	
	public String toString() {
		return " Marca:" + this.marca+ ", SO:"+ this.sistemaOperativo + ", Pulgadas:"+ this.pulgadas+", RAM:"+this.ram;
	}
}
