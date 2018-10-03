
export interface Choice {

	id: number;
	name: string;

}

export interface Question {

	id: number;
	name: string;
	description: string;
	choice: Choice[];

}
