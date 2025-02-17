package sec02.exam10;

public class AdvancedForExample {
	public static void print(String inputStr) {
		System.out.println(inputStr);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] scores = { 95, 71, 84, 93, 87 };

		int sum = 0;

		for (int score : scores) {
			sum += score;
		}
		print("점수 총합 = " + sum);

		double avg = (double) sum / scores.length;
		print("점수 평균 = " + avg);
	}

}
