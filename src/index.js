module.exports = function reverse (n) {
    n = n + "";
    if(n < 0) {
        return n.split("").reverse().join("").replace('-','');
    }
    else {
        return n.split("").reverse().join("");
    }
}
