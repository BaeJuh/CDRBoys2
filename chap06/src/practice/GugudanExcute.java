package practice;

import java.util.Scanner;

public class GugudanExcute {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		int standardNum = scanner.nextInt();
		
		Gugudan gugudan = new Gugudan("gugudan");
		gugudan.excute(standardNum);
	}

}
