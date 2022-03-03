/* palindrome */

// let isPalindrome = function(x) {
/* if(x <= 0) {
        return false;
    } else {
        let reverse = 0;
        let temp = x;
        let num = 0;
        while(temp!=0) {
            num = temp%10;
            temp = Math.floor(temp/10);
            reverse = reverse * 10 + num;
        }
        if (reverse === x) {
            return true;
        } else {
            return false;
        }
    } */

/* splitting number in half */
/* if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    } else {
        let reverseNumber = 0;
        while(x > reverseNumber) {
            reverseNumber = reverseNumber * 10 + x % 10;
            x=Math.floor(x/10);
            console.log(reverseNumber, x)
        }
        if (reverseNumber === x || Math.floor(reverseNumber/10) === x) { // "OR" statemnt to elimnate odd digits scenario
            console.log(Math.floor(reverseNumber/10))
            return true;
        } else {
            return false;
        }
    } */
// };

// let x = 121;
// let y = 1221;

// console.log(isPalindrome(x));

/** Roman Numbers to integer **/

/* let romanToInt = function(s) {
    let map = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let result = 0;
    let arr = s.split('');
    arr.forEach((romanNum,index) => {
        if(map[romanNum] < map[s[index + 1]]) {
            result = result - map[romanNum];
        }
        else {
            result = result + map[romanNum];
        }
    });
    return result;
}



console.log(romanToInt("MCMXCIV")); */

/* integeer to roman */

/* let intToRoman = function(n) {
    
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result = "";
    for(let i = 0; n; i++) {
        while(n >= val[i]) {
            result = result + rom[i];
            n = n - val[i];
        }
    }
    return result;
}
console.log(intToRoman("1994")); */

/* Convert 1D Array Into 2D Array */

/* let construct2DArray = function(original, m, n) {
    let result = []; 
    if (m*n == original.length) {
        for(let i=0; i<m; i++) {
            result[i] = original.splice(0,n)
        }
    }
    else {
        result = [];
    }
    return result;
}

console.log(construct2DArray([1,2,3,4,5,6,7,8,9,10], 2, 5)); */

/*************/

/* binary */

/* let int = 6;

let hasAlternatingBits = function(n) {
    let bin = int.toString(2);
    console.log(bin);
    let  i = 0;
    let flag = true;
    while(i<bin.length-1){
        console.log(bin[i], bin[i+1]);
        if(bin[i]= bin[i+1]) {
            console.log("inside if")
            flag = true;
        } else {
            console.log("inside else")
            flag = false;
            break;
        }
        i++;
    }
    return flag;
}

console.log(hasAlternatingBits(int)); */

// 14. Longest Common Prefix

/* let strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    strs.forEach((element,index) => {
        while(element.indexOf(prefix)!=0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix == "") return "";
        }
    });
    return prefix;
};

console.log(longestCommonPrefix(strs)); */

// 1389. Create Target Array in the Given Order

/* let nums = [0,1,2,3,4]; 
let index = [0,1,2,2,1];

let createTargetArray = function(nums, index) {
    let target = [];
    nums.forEach((ele,ind) => {
        target.splice(index[ind], 0, ele);
    });
    return target;
};

console.log(createTargetArray(nums,index)); */

//  20. Valid Parentheses

/* let s = "(";

var isValid = function (s) {
  let stack = [];
  let c = "";
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if(c !== stack.pop()) {
            return false;
        }
    }
  }
  if(stack.length == 0) { return true; } else {
      return false;
  }
  
};
console.log(isValid(s)); */

// 28. Implement strStr()

/* let haystack = "";
let needle = ""

var strStr = function(haystack, needle) {
    let result = 0;
    if(result !== "") {
        result = haystack.indexOf(needle);
    }
    return result;
};

console.log(strStr(haystack, needle)) */

// 35. Search Insert Position

/* let nums = [1,3,5,6];
let target = 7;

var searchInsert = function(nums, target) {
    let result = 0;
    for(let i = 0; target>=nums[i]; i++ ) {
        if(target == nums[i]) {
            result = i;
        } else {
            result = i + 1;
        }
    }
    return result;
};


console.log(searchInsert(nums, target)) */

// 1672. Richest Customer Wealth

/* let accounts = [[221,2,3],[10,2,1]];

let maximumWealth = function(accounts) {
    let highestSum = 0;
    for (ele of accounts) {
        let newSum = ele.reduce((total, num)=> {
            return total + num;
        });
        if(newSum >= highestSum) {
            highestSum = newSum;
        }
    }
    return highestSum;
};

console.log(maximumWealth(accounts)); */

// 1394. Find Lucky Integer in an Array

/* let arr = [1,2,2,3,3,3,4,4,4,4];
let findLucky = function(arr) {
    let highestLuckyNumber = 0;
    let counts = {};
    for(elem of arr) {
        counts[elem] = counts[elem] ? counts[elem] + 1: 1;
    }
    for(key in counts) {
        highestLuckyNumber = counts[key]==key && counts[key]>highestLuckyNumber?counts[key]:highestLuckyNumber;    
    }
    return highestLuckyNumber==0?-1:highestLuckyNumber;    
};
console.log(findLucky(arr)); */

// 997. Find the Town Judge

/* let n=2; let trust = [[1,2]];

var findJudge = function(n, trust) {
    let iTrust = new Array(n+1).fill(0);
    let theyTrust = new Array(n+1).fill(0);
    let townJudge = -1;
    for (let ele of trust) {
        iTrust[ele[0]] += 1;
        theyTrust[ele[1]] += 1;
    }
    iTrust.forEach((element,ind) => {
        if(element == 0 && theyTrust[ind] == n-1) {
            townJudge = ind;
        }
    });
    return townJudge;
};
console.log(findJudge(n,trust)); */

// 2114. Maximum Number of Words Found in Sentences

/* let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
var mostWordsFound = function(sentences) {
    let maxWord = 0;
    for(let sentence of sentences) {
        maxWord = sentence.split(" ").length > maxWord?sentence.split(" ").length:maxWord;
    }
    return maxWord;
};
mostWordsFound(sentences); */

// 202. Happy Number

/* let n = 2;

var isHappy = function(n) {
    let sumArr = [];
    while(n != 1) {
        let current  = n;
        let sum = 0;
        while(current != 0) {
            let digit = current%10;
            current = Math.floor(current/10);
            sum = sum + (digit * digit);        
        }
        function checkSum (sumArrElement) {
            return sum == sumArrElement; 
        }
        if(sumArr.findIndex(checkSum) != -1) {
            return false;
        }
        sumArr.push(sum);        
        n = sum;
    }
    return true;
};

console.log(isHappy(n)); */

// reverse a number

/* let number = 654;

let reverseNumber = (n) => {
    console.log(n.toString().split("").reverse().join(""));
}

reverseNumber(number); */

// 258. Add Digits

/* let number = 38;

var addDigits = function(num) {
    // let res = num;
    // while (res > 9) {
    //     let numArr = res.toString().split("").map((e)=> {
    //         return parseInt(e);
    //     });
    //     res = numArr.reduce((prevVal, currentVal) => {
    //         console.log(prevVal,currentVal)
    //         return prevVal + currentVal;
    //     }); 
    // }    
    // return res;
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9; //mathemtaical magic
};

console.log(addDigits(number)); */

// 21. Merge Two Sorted Lists

/* let list1 = [1,2,4], list2 = [1,3,4];

var mergeTwoLists = function(list1, list2) {
    let res = [];

};

console.log(mergeTwoLists(list1, list2)) */

// 26. Remove Duplicates from Sorted Array

/* nums = [1,1,2,5,5,9,10]

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            console.log(i)
            nums[++i] = nums[j];
        }
    }
    return ++i;
};

console.log(removeDuplicates(nums)) */


/* console.log(a + "got the job");
let a = 10;
console.log(a + "10"); */

/* test for palindrome */

/* let a = 7771777;

let isPalindrome = (a) => {
    let reverseNumber = 0;
    if (a<0 || Math.floor(a%10)==0) {
        return "not a plaindrome"
    } else {
        while(a>reverseNumber) {
            reverseNumber = reverseNumber * 10 + a % 10;
            a = Math.floor(a/10);
        }
    }

    if(reverseNumber == a || Math.floor(reverseNumber/10) == a) {
        return "is palindrome"
    } else {
        return "not a plaindrome"
    }
}

console.log(isPalindrome(a)); */