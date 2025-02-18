package sec04.exam02;

public class ComputerExample {
	static void print(String inputString) {
		System.out.println(inputString);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Computer com = new Computer();

		int[] values1 = { 1, 2, 3 };
		int result1 = com.sum1(values1);
		print("result1: " + result1);

		int result2 = com.sum1(new int[] { 1, 2, 3, 4, 5 });
		print("result2: " + result2);

		int result3 = com.sum2(1, 2, 3);
		print("result3: " + result3);

		int result4 = com.sum2(1, 2, 3, 4, 5);
		print("result4: " + result4);
	}

}
