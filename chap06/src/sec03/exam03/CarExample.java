package sec03.exam03;

public class CarExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car car1 = new Car();
		print("car1.company : " + car1.company);
		
		Car car2 = new Car("자가용");
		print("car2.company : " + car2.company);
		print("car2.model : " + car2.model);
		print("");
		
		Car car3 = new Car("자가용", "빨강");
		print("car3.company : " + car3.company);
		print("car3.model : " + car3.model);
		print("car3.color : " + car3.color);
		print("");
		
		Car car4 = new Car("자가용", "빨강", 200);
		print("car4.company : " + car4.company);
		print("car4.model : " + car4.model);
		print("car4.color : " + car4.color);
		print("car4.maxSpeed : " + car4.maxSpeed);
	}
	
	static void print(String inputString) {
		System.out.println(inputString);
	}

}
