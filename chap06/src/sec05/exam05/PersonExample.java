package sec05.exam05;

public class PersonExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Person p1 = new Person("990814-1234567", "배주환");
		
		System.out.println(p1.nation);
		System.out.println(p1.ssn);
		System.out.println(p1.name);
		
//		p1.nation = "usa";
//		p1.ssn = "-";
		p1.name = "Juhwan Bae";
	}

}
