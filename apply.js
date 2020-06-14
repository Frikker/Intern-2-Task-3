export default function apply(times, func, argument) {
    if (times === 0) return argument;
    if (typeof times !== 'number') throw new TypeError("First argument isn't a number");
    if (argument === undefined) throw new TypeError("Argument is undefined");
    return apply(times - 1, func, func(argument));
}