import Races from './Races';

export default class Dwarf extends Races {
  private _maxLifePoints: number;
  private static _raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
    Dwarf._raceInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._raceInstance;
  }
}