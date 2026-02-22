class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>(n);
         for(int i=1; i<=n ;i++){
            boolean numdivby3 = i % 3 == 0;
            boolean numdivby5 = i % 5 == 0;

            if(numdivby3 && numdivby5){
                ans.add("FizzBuzz");
            }else if(numdivby3){
                ans.add("Fizz");
            }else if(numdivby5){
                ans.add("Buzz");
            }else{
                ans.add(String.valueOf(i));
            }
         }
         return ans;
    }
}