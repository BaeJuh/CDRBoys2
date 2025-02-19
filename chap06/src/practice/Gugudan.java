package practice;

public class Gugudan {
	String id;
	int standardNumber;

	Gugudan(String id) {
		this.id = id;
	}

	private void setStandardNum(int num) {
		this.standardNumber = num;
	}

	private void multiplicationTable() {
		for (int i = 1; i <= 9; i++) {
			this.println(this.standardNumber + " x " + i + " = " + (this.standardNumber * i));
		}
	}

	private void println(String inputString) {
		System.out.println(inputString);
	}
	
	void excute(int num) {
		this.setStandardNum(num);
		this.multiplicationTable();
	}
}
