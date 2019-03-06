// I am using Quokka's Live Performance Testing comments. Highly recommended. 
// https://quokkajs.com/pro/#performance
// You can always use performance.now() as well

// O(n)
function addUpTo_linear(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// O(1)
function addUpTo_constant(n) {
    return n * (n -1) /2;
}

addUpTo_linear(6000);//?.$

addUpTo_constant(6000) //?.$

