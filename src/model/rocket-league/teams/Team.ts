import { Player } from "./Player";

export class Team {
	private name: string;
	private players: Player[];

	public constructor({name = "Team", players = []}: Team) {
		this.name = name;
		this.players = players;
	}
}
