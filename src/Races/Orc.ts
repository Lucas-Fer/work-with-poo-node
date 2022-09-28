import Races from './Races';

export default class Orc extends Races {
  private _maxLifePoints = 0;
  private static _raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
    Orc._raceInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._raceInstance;
  }
}