class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        r = 0
        i = 0  
        while i < len(nums):
            if nums[i] != val:
                nums[r] = nums[i]
                r+=1
            i+=1

        print(nums)

        return len(nums[0:r])