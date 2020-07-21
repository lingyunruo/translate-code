/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    console.time('计算耗时：')
    let arr = s.split('');
    let res = [arr[0]];

    if(arr.length === 1) {
        return s;
    }
    
    while(arr.length > 0) {
        let el = arr.shift();
        let indexList = [];
        arr.forEach((item, index) => {
            if(item === el) {
                indexList.push(index);
            }
        });
        if(indexList.length === arr.length && arr.length > 1) {
            if(res.length < indexList.length + 1) {
                res = arr;
                res.unshift(el);
            }
            break;
        }

        indexList.forEach((item) => {
            let c = [];
            let flag = true;
            for(let i=0; i<=Math.floor((item)/2); i++) {
                if(item !== 0 && arr[i] !== arr[item - 1 - i]) {
                    c = [];
                    flag = false;
                    break;
                }
            }
            if(flag) {
                c = arr.slice(0, item + 1);
                c.unshift(el);
            }
            if(c.length > res.length) {
                res = c;
            }
        });
    }
    console.timeEnd('计算耗时：');
    return res.join('');
};


console.log(longestPalindrome('ccccggggg'));