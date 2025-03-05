package sec02.exam02;

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
	public static void main(String[] args) {
		Queue<Message> q = new LinkedList<>();

		q.offer(new Message("sendMail", "홍길동"));
		q.offer(new Message("sendSMS", "신용권"));
		q.offer(new Message("sendKakaotalk", "홍두께"));

		while (!q.isEmpty()) {
			Message message = q.poll();
			switch (message.command) {
			case "sendMail":
				System.out.println(message.to + "님에게 메일을 보냅니다.");
				break;
			case "sendSMS":
				System.out.println(message.to + "님에게 SMS을 보냅니다.");
				break;

			case "sendKakaotalk":
				System.out.println(message.to + "님에게 카카오톡8을 보냅니다.");
				break;
			}

		}
	}
}
