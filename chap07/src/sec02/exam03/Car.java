package sec02.exam03;

public class Car {
	Tire frontLeftTire = new Tire("FL", 6);
	Tire frontRightTire = new Tire("FR", 2);
	Tire backLeftTire = new Tire("BL", 3);
	Tire backRightTire = new Tire("BR", 4);

	int run() {
		System.out.println("[자동차가 달립니다.]");
		if (this.frontLeftTire.roll() == false) {
			stop();
			return 1;
		}
		if (this.frontRightTire.roll() == false) {
			stop();
			return 2;
		}
		if (this.backLeftTire.roll() == false) {
			stop();
			return 3;
		}
		if (this.backRightTire.roll() == false) {
			stop();
			return 4;
		}
		return 0;
	}
	
	void stop() {
		System.out.println("[자동차가 멈춥니다.]");
	}
}
