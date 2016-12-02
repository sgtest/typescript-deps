import * as map from "lodash/map";
import { Component } from "@angular/core";

console.log("Hello, world");
doSomethingWithLodash();

export function doSomethingWithLodash(): void {
	const l = [1, 2, 3];
	const l2 = map(l, (e) => "" + e);
	console.log(l2);
}

@Component({
	selector: 'my-app',
	template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
