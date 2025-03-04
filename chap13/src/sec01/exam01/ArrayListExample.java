package sec01.exam01;
import java.util.*;
public class ArrayListExample {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> list = new ArrayList<String>();
		
		list.add("Java");
		list.add("JDBC");
		list.add("Servlet/JSP");
		list.add(2, "Database");
		list.add("iBATIS");
//		list.add(1);
		
		int size = list.size();
		System.out.println("총 객체 수 : " + size);
		System.out.println();
		
		String skill = list.get(2);
		System.out.println("2 : " + skill);
		System.out.println();
		
		for(String str: list) {
			System.out.println(str);
		}
		System.out.println();
		
		list.remove(2);
		list.remove(2);
		list.remove("iBATIS");
		
		for(String str: list) {
			System.out.println(str);
		}
		
	}

}
