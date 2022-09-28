import Races from './Races';

export default class Dwarf extends Races {
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}