import { Game } from "./Game";
import { Team } from "./Team";

export class Match {
	private name: string;
	private team1: Team;
	private team2: Team;
	private games: Game[];

	public constructor({
		name = `Match${Math.random() < 0.2 ? " final" : ""}`,
		team1 = new Team({}),
		team2 = new Team({}),
		games = new Array(Math.floor(Math.random() * 7) + 1).fill(new Game({})), // 1 - 7
	}) {
		this.name = name;
		this.team1 = team1;
		this.team2 = team2;
		this.games = games;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	getTeam1(): Team {
		return this.team1;
	}

	setTeam1(team1: Team): void {
		this.team1 = team1;
	}

	getTeam2(): Team {
		return this.team2;
	}

	setTeam2(team2: Team): void {
		this.team2 = team2;
	}

	getGames(): Game[] {
		return this.games;
	}

	setGames(games: Game[]): void {
		this.games = games;
	}

	isFinal(): boolean {
		return /.*final.*/i.test(this.name);
	}
}
