export default interface IHarry {
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: false;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}
