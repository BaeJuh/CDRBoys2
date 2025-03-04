package practice;

public class KoreanId {
	private String id;

	public KoreanId(String id) {
		this.id = id;
	}

	private boolean authentication() {
		if (this.id.length() == 13) {
			int authSum = 0;
			for (int i = 0; i < this.id.length() - 1; i++) {
				// 0 1 2 3 4 5 6 7 8 9 10 11 12
				// 2 3 4 5 6 7 8 9 2 3 4 5
				authSum += (((int) this.id.charAt(i) - '0') * ((i % 8) + 2));
//				System.out.println("auth: " + ((int) this.id.charAt(i) - '0'));
			}
//			System.out.println(this.id.charAt(this.id.length() - 1));
//			System.out.println((11 - authSum%11));
			if ((char) ((11 - authSum % 11) + '0') == this.id.charAt(this.id.length() - 1)) {

				return true;
			}
		}

		return false;
	}

	private boolean authentication2() {
		if (this.id.length() == 13) {
			int authSum = 0;
			String[] idArray = this.id.split("");
			for (int i = 0; i < idArray.length - 1; i++) {
				authSum += (Integer.parseInt(idArray[i]) * ((i % 8) + 2));
			}
			if (Integer.toString(11 - authSum % 11).equals(idArray[this.id.length() - 1])) {
//				System.out.println("?");
				return true;
			}
		}

		return false;
	}

	public void control() {
		boolean result = this.authentication2();
		if (result) {
			System.out.println("올바른 주민등록번호입니다.");
		} else {
			System.out.println("올바르지않은 주민등록번호입니다.");
		}
	}
}
