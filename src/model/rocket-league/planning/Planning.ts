import { Round } from "./Round";

export class Planning {
	private rounds: Round[];

	public constructor({
		rounds = new Array(Math.floor(Math.random() * 6) + 1).fill(new Round({})), // 1 - 6
	}) {
		this.rounds = rounds;
	}

	getRounds(): Round[] {
		return this.rounds;
	}

	setRounds(rounds: Round[]): void {
		this.rounds = rounds;
	}
}
