package sec02.exam01;

public class Car {
	Tire frontLeft = new HankookTire();
	Tire frontRight = new HankookTire();
	Tire backLeft = new HankookTire();
	Tire backRight = new HankookTire();
	
	void run() {
		frontLeft.roll();
		frontRight.roll();
		backLeft.roll();
		backRight.roll();
	}
}
