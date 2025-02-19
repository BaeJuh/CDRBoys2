package sec02.exam04;

public class DriveExample {
	public static void main(String[] args) {
		Driver drive = new Driver();
		
		drive.drive(new Bus());
		drive.drive(new Taxi());
	}
}
