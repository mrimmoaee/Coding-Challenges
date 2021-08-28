class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        
        count = 0
        largestCount = 0
        
        for i in range(len(nums)):
            
          if(nums[i] == 0):
             count = 0
          else:
            count+=1
  
          if(count > largestCount):
            largestCount = count

        return largestCount
        