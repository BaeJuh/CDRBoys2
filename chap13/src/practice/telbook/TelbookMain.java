package practice.telbook;

import java.util.*;

public class TelbookMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Telbook> telbook = new Vector<Telbook>();

		telbook.add(new Telbook("JH", "01021672204"));
		telbook.add(new Telbook("Zard", "01012345678"));
		telbook.add(new Telbook("CDR", "01011112222"));
		telbook.add(new Telbook("Bae", "01083732204"));

		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		String result = "";

		for (Telbook tel : telbook) {
			if (tel.name.equals(input.trim())) {
				result = tel.telNumber;
				break;
			}
		}

		System.out.println(input + "의 전화번호는 " + (result.equals("") ? "없습니다." : result + " 입니다."));
	}

}
