package sec03.exam01;

public class PhoneExample {
	public static void main(String[] args) {
//		Phone phone = new Phone("JH");
		SmartPhone phone = new SmartPhone("JH");
		
		phone.turnOn();
		phone.internetSearch();
		phone.turnOff();
	}
}
