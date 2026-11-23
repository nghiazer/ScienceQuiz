import type { ComponentType } from 'react'
import type { IllustrationId } from '../../types/quiz'
import Magnets from './Magnets'
import ButterflyLifeCycle from './ButterflyLifeCycle'
import SunShadow from './SunShadow'
import { OpenCircuit, ClosedCircuit } from './Circuit'
import MeltingIce from './MeltingIce'
import FoodChain from './FoodChain'
import MoonPhases from './MoonPhases'
import Thermometer from './Thermometer'
import PlantExperiment from './PlantExperiment'
import BarChart from './BarChart'
import WaterCycle from './WaterCycle'


/** Bảng tra: illustrationId -> component. Record<IllustrationId, …> buộc phải có đủ mọi id. */
export const ILLUSTRATIONS: Record<IllustrationId, ComponentType> = {
  magnets: Magnets,
  'butterfly-life-cycle': ButterflyLifeCycle,
  'sun-shadow': SunShadow,
  'circuit-open': OpenCircuit,
  'circuit-closed': ClosedCircuit,
  'melting-ice': MeltingIce,
  'food-chain': FoodChain,
  'moon-phases': MoonPhases,
  thermometer: Thermometer,
  'plant-experiment': PlantExperiment,
  'bar-chart': BarChart,
  'water-cycle': WaterCycle,
}

