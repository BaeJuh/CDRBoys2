package sec01.exam01;

public class CellPhone {
	String model;
	String color;
	
	void println(String inputString) {
		System.out.println(inputString);
	}
	void powerOn() {
		this.println("전원을 켭니다.");
	}
	void powerOff() {
		this.println("전원을 끕니다.");
	}
	void bell() {
		this.println("벨이 울립니다.");
	}
	void sendVoice(String message) {
		this.println("자기: " + message);
	}
	void receiveVoice(String message) {
		this.println("상대방: " + message);
	}
	void hangUp() {
		this.println("전화를 끊습니다.");
	}
}
