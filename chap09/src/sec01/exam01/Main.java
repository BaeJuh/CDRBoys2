package sec01.exam01;

public class Main {
	public static void main(String[] args) {
		A a = new A();

		A.B b = a.new B(); // instance member class
		b.field1 = 3;
		b.method1();

		A.C c = new A.C(); // static class
		c.field1 = 3;
		c.method1();
		A.C.field2 = 3;
		A.C.method2();

		a.method(); // local class
	}
}
