import { Match } from "./Match";

export class Round {
	private name: string;
	private time: string;
	private matches: Match[];

	public constructor({
		name = `Round${Math.random() < 0.2 ? " final" : ""}`,
		time = "00:00",
		matches = new Array(Math.floor(Math.random() * 3) + 2).fill(new Match({})), // 2 - 4
	}) {
		this.name = name;
		this.time = time;
		this.matches = matches;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	getTime(): string {
		return this.time;
	}

	setTime(time: string): void {
		this.time = time;
	}

	getMatches(): Match[] {
		return this.matches;
	}

	setMatches(matches: Match[]): void {
		this.matches = matches;
	}

	isFinal(): boolean {
		return /.*final.*/i.test(this.name);
	}
}
