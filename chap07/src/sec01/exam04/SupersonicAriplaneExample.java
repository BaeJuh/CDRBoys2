package sec01.exam04;

public class SupersonicAriplaneExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SuperSonicAirplane sa = new SuperSonicAirplane();
		
		sa.takeOff();
		sa.fly();
		sa.flyMode = SuperSonicAirplane.SUPERSONIC;
		sa.fly();
		sa.flyMode = SuperSonicAirplane.NORMAL;
		sa.fly();
		sa.land();
	}

}
