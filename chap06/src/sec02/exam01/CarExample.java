package sec02.exam01;

public class CarExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car myCar = new Car();
		
		print("제작회사: " + myCar.company);
		print("모델명: " + myCar.model);
		print("색깔: " + myCar.color);
		print("최고속도: " + myCar.maxSpeed);
		print("현재속도: " + myCar.speed);
		
		myCar.speed = 60;
		print("수정된 속도: " + myCar.speed);
	}
	public static void print(String inputString) {
		System.out.println(inputString);
	}
}
