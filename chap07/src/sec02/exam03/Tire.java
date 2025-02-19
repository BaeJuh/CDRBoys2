package sec02.exam03;

public class Tire {
	public int maxRotation;
	public int accumulatedRotation;
	public String location;
	
	public Tire(String location, int maxRotation) {
		this.location = location;
		this.maxRotation = maxRotation;
	}
	
	public boolean roll() {
		this.accumulatedRotation++;
		if (this.accumulatedRotation < this.maxRotation ) {
			System.out.println(this.location + " Tire 수명: " + (this.maxRotation - this.accumulatedRotation) + "회");
			return true;
		} else {
			System.out.println("*** " + this.location + " Tire 펑크 ***");
			return false;
		}
	}
}
