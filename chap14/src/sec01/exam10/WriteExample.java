package sec01.exam10;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

public class WriteExample {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		Writer writer = new FileWriter("./test10.txt");
		
		String str = "ABC";
		
		writer.write(str);
		
		writer.flush();
		writer.close();
	}

}
