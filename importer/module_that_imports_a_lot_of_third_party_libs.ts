import * as map from "lodash/map";

console.log("Hello, world");
doSomething();

export function doSomething(): void {
	const l = [1, 2, 3];
	const l2 = map(l, (e) => "" + e);
	console.log(l2);
}
