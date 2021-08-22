class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        buy = prices[0]
        prices[0] = 0
        profit = 0
        
        
        for i in range(1, len(prices)):
           print(prices[i])
           if buy > prices[i]:
              buy = prices[i]
              prices[i] = 0
           else:  
              profit = max(prices[i]-buy, profit)
        return profit