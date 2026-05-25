class Solution {

    public int[] separateDigits(int[] nums) {

        List<Integer> list = new ArrayList<>();

        for (int num : nums) {

            // Convert number to string
            String str = String.valueOf(num);

            // Extract each digit
            for (char ch : str.toCharArray()) {

                list.add(ch - '0');
            }
        }

        // Convert List to Array
        int[] ans = new int[list.size()];

        for (int i = 0; i < list.size(); i++) {

            ans[i] = list.get(i);
        }

        return ans;
    }
}