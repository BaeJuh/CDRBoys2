package sec02.exam01;

public class CarExample {
	public static void main(String[] args) {
		Car myCar = new Car();
		
		myCar.run();
		
		myCar.frontRight = new KumhoTire();
		myCar.backRight = new KumhoTire();
		
		System.out.println("타이어 교체~");
		myCar.run();
	}
}
