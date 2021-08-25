class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        currentSum = 0
        totalSum = nums[0]
        
        for i in range(0, len(nums)):  
           currentSum = max(currentSum + nums[i], nums[i])
           totalSum = max(totalSum, currentSum)
        
        return totalSum
        