package practice2;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class ToLastDay {
	private int current;
	private int toTime;
	
	public ToLastDay() {}
	
	private void initData() throws ParseException {
		Calendar now = Calendar.getInstance();
//		Calendar limit = new Calendar();
//		limit.set(2025, 12, 31);
		
	}
	
	private void print(String str) {
		System.out.println(str);
	}
	
	public void run() {
		this.print("hi");

		Date n = new Date();
		this.print(n.toString());

	}
}
