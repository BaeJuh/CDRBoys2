package sec01.exam06;

import sec01.exam04.Audio;
import sec01.exam04.Television;

public class MyClassExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		println("1)---------------");
		
		MyClass myClass1 = new MyClass();
		myClass1.rc.turnOn();
		myClass1.rc.setVolume(5);
		
		println("2)---------------");
		
		MyClass myClass2 = new MyClass(new Audio());
		
		println("3)---------------");
		
		MyClass myClass3 = new MyClass();
		myClass3.methodA();
		
		println("4)---------------");
		
		MyClass myClass4 = new MyClass();
		myClass4.methodB(new Television());
	}
	
	public static void println(String str) {
		System.out.println(str);
	}

}
