package sec02.exam03;

public class HankookTire extends Tire {
	public HankookTire(String location, int maxRotation) {
		super(location, maxRotation);
	}
	
	@Override
	public boolean roll() {
		super.accumulatedRotation++;
		if (super.accumulatedRotation < this.maxRotation ) {
			System.out.println(super.location + " HankookTire 수명: " + (super.maxRotation - super.accumulatedRotation) + "회");
			return true;
		} else {
			System.out.println("*** " + super.location + " HankookTire 펑크 ***");
			return false;
		}
	}
}
