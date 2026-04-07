
import math
class Solution(object):
    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """
        result = math.log(n, 3)
        if result.is_integer():
            return True
        else:
            return False
import math
class Solution(object):
    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n <=0:
            return False
        while n%3==0:
            n=n/3
        if n==1:
                return True
        else:
                return False