package practice;

public class MatrixMultiplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] matrix1 = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 } };

		int[][] matrix2 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 10, 11, 12 } };
		int[][] result = new int[matrix1.length][matrix2[0].length];

		for (int i = 0; i < matrix1.length; i++) {
			for (int j = 0; j < matrix2[i].length; j++) {
				for (int k = 0; k < matrix2.length; k++) {
					result[i][j] += (matrix1[i][k] * matrix2[k][j]);
				}
			}
		}
		for (int[] row : result) {
			for (int num : row) {
				System.out.println(num);
			}
		}
	}

}
