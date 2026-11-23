import type { ComponentType } from 'react'
import type { IllustrationId } from '../../types/quiz'
import Magnets from './Magnets'
import ButterflyLifeCycle from './ButterflyLifeCycle'
import SunShadow from './SunShadow'
import { ClosedCircuit, OpenCircuit } from './Circuit'
import MeltingIce from './MeltingIce'
import FoodChain from './FoodChain'
import MoonPhases from './MoonPhases'
import Thermometer, { ColdThermometer } from './Thermometer'
import PlantExperiment from './PlantExperiment'
import BarChart from './BarChart'
import WaterCycle from './WaterCycle'
import PlantParts from './PlantParts'
import FrogLifeCycle from './FrogLifeCycle'
import AnimalPanel from './AnimalPanel'
import ConductorTest from './ConductorTest'
import DrumSound from './DrumSound'
import FlashlightShadow from './FlashlightShadow'
import PushPull from './PushPull'
import FloatSink from './FloatSink'
import WaterStates from './WaterStates'
import EarthRotation from './EarthRotation'
import WeatherIcons from './WeatherIcons'
import SoilLayers from './SoilLayers'
import RulerPencil from './RulerPencil'
import BalanceScale from './BalanceScale'
import MagnifierAnt from './MagnifierAnt'
import { TimelineHabit, TimelineNow, TimelinePast } from './TenseTimeline'
import KidsDialogue from './KidsDialogue'
import DailyRoutine from './DailyRoutine'
import LookListen from './LookListen'

/** Bảng tra illustrationId -> component. Record buộc phải có đủ mọi id. */
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
  'thermometer-cold': ColdThermometer,
  'plant-experiment': PlantExperiment,
  'bar-chart': BarChart,
  'water-cycle': WaterCycle,
  'plant-parts': PlantParts,
  'frog-life-cycle': FrogLifeCycle,
  'animal-panel': AnimalPanel,
  'conductor-test': ConductorTest,
  'drum-sound': DrumSound,
  'flashlight-shadow': FlashlightShadow,
  'push-pull': PushPull,
  'float-sink': FloatSink,
  'water-states': WaterStates,
  'earth-rotation': EarthRotation,
  'weather-icons': WeatherIcons,
  'soil-layers': SoilLayers,
  'ruler-pencil': RulerPencil,
  'balance-scale': BalanceScale,
  'magnifier-ant': MagnifierAnt,
  'en-timeline-past': TimelinePast,
  'en-timeline-now': TimelineNow,
  'en-timeline-habit': TimelineHabit,
  'en-dialogue': KidsDialogue,
  'en-daily-routine': DailyRoutine,
  'en-look-listen': LookListen,
}
