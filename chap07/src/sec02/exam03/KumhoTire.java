package sec02.exam03;

public class KumhoTire extends Tire {
	public KumhoTire(String location, int maxRotation) {
		super(location, maxRotation);
	}

	@Override
	public boolean roll() {
		super.accumulatedRotation++;
		if (super.accumulatedRotation < super.maxRotation) {
			System.out.println(super.location + " KumhoTire 수명: " + (super.maxRotation - super.accumulatedRotation) + "회");
			return true;
		} else {
			System.out.println("*** " + super.location + " KumhoTire 펑크 ***");
			return false;
		}
	}
}
