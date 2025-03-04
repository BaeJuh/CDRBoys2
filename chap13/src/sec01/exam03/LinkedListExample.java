package sec01.exam03;
import java.util.*;

public class LinkedListExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> li1 = new ArrayList<String>();
		List<String> li2 = new LinkedList<String>();
		
		long startTime = 0l;
		long endTime = 0l;
		
		startTime = System.nanoTime();
		for(int i=0; i<10000; i++) {
			li1.add(0, String.valueOf(i));
		}
		endTime = System.nanoTime();
		System.out.println("ArrayList : " + (endTime - startTime));
		
		startTime = System.nanoTime();
		for(int i=0; i<10000; i++) {
			li2.add(0, String.valueOf(i));
		}
		endTime = System.nanoTime();
		System.out.println("LinkedList : " + (endTime - startTime));
	}

}
