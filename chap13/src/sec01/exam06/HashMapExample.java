package sec01.exam06;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class HashMapExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Map<String, Integer> map = new HashMap<String, Integer>();

		map.put("신용권", 85);
		map.put("홍길동", 90);
		map.put("동장군", 80);
		map.put("홍길동", 95);

		System.out.println("\t 홍길동 : " + map.size());
		System.out.println();

		Set<String> keySet = map.keySet();
		Iterator<String> keyIter = keySet.iterator();
		while (keyIter.hasNext()) {
			String key = keyIter.next();
			Integer value = map.get(key);

			System.out.println("\t" + key + " : " + value);
		}
		System.out.println();

		map.remove("홍길동");
		System.out.println("총 Entry 수: " + map.size());

		Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
		Iterator<Map.Entry<String, Integer>> entryIter = entrySet.iterator();

		while(entryIter.hasNext()) {
			Map.Entry<String, Integer> entry = entryIter.next();
			String key = entry.getKey();
			Integer value = entry.getValue();
			System.out.println("\t" + key + " : " + value);
		}
		System.out.println();
		
		map.clear();
		
		System.out.println("총 Entry 수: " + map.size());
	}

}
