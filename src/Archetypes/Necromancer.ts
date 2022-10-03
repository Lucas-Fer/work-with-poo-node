import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstance = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer._archetypeInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}