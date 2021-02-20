export class Game {
	private name: string;
	private scoreTeam1: number;
	private scoreTeam2: number;
	private assistsTeam1: number;
	private assistsTeam2: number;
	private savesTeam1: number;
	private savesTeam2: number;
	private shotsTeam1: number;
	private shotsTeam2: number;
	private goalsTeam1: number;
	private goalsTeam2: number;

	public constructor({
		name = "Game",
		scoreTeam1 = 0,
		scoreTeam2 = 0,
		assistsTeam1 = 0,
		assistsTeam2 = 0,
		savesTeam1 = 0,
		savesTeam2 = 0,
		shotsTeam1 = 0,
		shotsTeam2 = 0,
		goalsTeam1 = 0,
		goalsTeam2 = 0,
	}) {
		this.name = name;
		this.scoreTeam1 = scoreTeam1;
		this.scoreTeam2 = scoreTeam2;
		this.assistsTeam1 = assistsTeam1;
		this.assistsTeam2 = assistsTeam2;
		this.savesTeam1 = savesTeam1;
		this.savesTeam2 = savesTeam2;
		this.shotsTeam1 = shotsTeam1;
		this.shotsTeam2 = shotsTeam2;
		this.goalsTeam1 = goalsTeam1;
		this.goalsTeam2 = goalsTeam2;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	getScoreTeam1(): number {
		return this.scoreTeam1;
	}

	setScoreTeam1(scoreTeam1: number): void {
		this.scoreTeam1 = scoreTeam1;
	}

	getScoreTeam2(): number {
		return this.scoreTeam2;
	}

	setScoreTeam2(scoreTeam2: number): void {
		this.scoreTeam2 = scoreTeam2;
	}

	getAssistsTeam1(): number {
		return this.assistsTeam1;
	}

	setAssistsTeam1(assistsTeam1: number): void {
		this.assistsTeam1 = assistsTeam1;
	}

	getAssistsTeam2(): number {
		return this.assistsTeam2;
	}

	setAssistsTeam2(assistsTeam2: number): void {
		this.assistsTeam2 = assistsTeam2;
	}

	getSavesTeam1(): number {
		return this.savesTeam1;
	}

	setSavesTeam1(savesTeam1: number): void {
		this.savesTeam1 = savesTeam1;
	}

	getSavesTeam2(): number {
		return this.savesTeam2;
	}

	setSavesTeam2(savesTeam2: number): void {
		this.savesTeam2 = savesTeam2;
	}

	getShotsTeam1(): number {
		return this.shotsTeam1;
	}

	setShotsTeam1(shotsTeam1: number): void {
		this.shotsTeam1 = shotsTeam1;
	}

	getShotsTeam2(): number {
		return this.shotsTeam2;
	}

	setShotsTeam2(shotsTeam2: number): void {
		this.shotsTeam2 = shotsTeam2;
	}

	getGoalsTeam1(): number {
		return this.goalsTeam1;
	}

	setGoalsTeam1(goalsTeam1: number): void {
		this.goalsTeam1 = goalsTeam1;
	}

	getGoalsTeam2(): number {
		return this.goalsTeam2;
	}

	setGoalsTeam2(goalsTeam2: number): void {
		this.goalsTeam2 = goalsTeam2;
	}
}
