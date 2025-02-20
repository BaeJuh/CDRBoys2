package sec02.exam05;

public class Example {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ImplementationC c = new ImplementationC();
		
		A ia = c;
		ia.methodA();
		System.out.println();
		
		B ib = c;
		ib.methodB();
		System.out.println();
		
		C ic = c;
		ic.methodA();
		ic.methodB();
		ic.methodC();
		System.out.println();
	}

}
