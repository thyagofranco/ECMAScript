const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};

sum(5,5,5,2,3);

const multiply = (...args) => {
    args.reduce((acc, value) => acc * value, 1)

}