class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        
        i = len(digits)-1
      
     
        while i >= 0:
         
            digits[i] += 1
         
            if digits[i] > 9: 
                digits[i] = 0
                i-=1
                print(i)
            else:
               return digits
      
        digits.insert(0, 1)
        return digits
            