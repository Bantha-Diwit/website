export class Team {
	private name: string;
	private score: number;

	public constructor({
		name = "Team",
		score = 0,
	}) {
		this.name = name;
		this.score = score;
	}

	getName (): string {
		return this.name;
	}

	setName (name: string): void {
		this.name = name;
	}

	getScore (): number {
		return this.score;
	}

	setScore (score: number): void {
		this.score = score;
	}
}
