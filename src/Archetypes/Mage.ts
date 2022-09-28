import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static archetypeInstance = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage.archetypeInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
  
  public static createdArchetypeInstances(): number {
    return this.archetypeInstance;
  }
}