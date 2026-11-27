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

import SeedSprout from './SeedSprout'
import AnimalTeeth from './AnimalTeeth'
import CompostCycle from './CompostCycle'
import HeatSpoon from './HeatSpoon'
import DissolveCup from './DissolveCup'
import SimpleMachines from './SimpleMachines'
import PlanetsOrder from './PlanetsOrder'
import Constellation from './Constellation'
import SeaBreeze from './SeaBreeze'
import Landforms from './Landforms'
import Volcano from './Volcano'
import Rainbow from './Rainbow'
import LineGraph from './LineGraph'
import Pictograph from './Pictograph'
import MeasuringCup from './MeasuringCup'
import PatternSequence from './PatternSequence'
import LabGoggles from './LabGoggles'
import EnergyBall from './EnergyBall'
import SeriesCircuit from './SeriesCircuit'
import Compass from './Compass'
import MaCountTriangles from './MaCountTriangles'
import MaCountSquares from './MaCountSquares'
import MaGridArea from './MaGridArea'
import MaPerimeterShape from './MaPerimeterShape'
import MaCubeStack from './MaCubeStack'
import MaCubeNet from './MaCubeNet'
import MaClock from './MaClock'
import MaSymmetryFold from './MaSymmetryFold'
import MaGridPaths from './MaGridPaths'
import MaMatchsticks from './MaMatchsticks'
import MaNumberPyramid from './MaNumberPyramid'
import MaMagicSquare from './MaMagicSquare'
import MaBalanceMath from './MaBalanceMath'
import MaShapePattern from './MaShapePattern'

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
  'seed-sprout': SeedSprout,
  'animal-teeth': AnimalTeeth,
  'compost-cycle': CompostCycle,
  'heat-spoon': HeatSpoon,
  'dissolve-cup': DissolveCup,
  'simple-machines': SimpleMachines,
  'planets-order': PlanetsOrder,
  'constellation': Constellation,
  'sea-breeze': SeaBreeze,
  'landforms': Landforms,
  'volcano': Volcano,
  'rainbow': Rainbow,
  'line-graph': LineGraph,
  'pictograph': Pictograph,
  'measuring-cup': MeasuringCup,
  'pattern-sequence': PatternSequence,
  'lab-goggles': LabGoggles,
  'energy-ball': EnergyBall,
  'series-circuit': SeriesCircuit,
  'compass': Compass,
  'ma-count-triangles': MaCountTriangles,
  'ma-count-squares': MaCountSquares,
  'ma-grid-area': MaGridArea,
  'ma-perimeter-shape': MaPerimeterShape,
  'ma-cube-stack': MaCubeStack,
  'ma-cube-net': MaCubeNet,
  'ma-clock': MaClock,
  'ma-symmetry-fold': MaSymmetryFold,
  'ma-grid-paths': MaGridPaths,
  'ma-matchsticks': MaMatchsticks,
  'ma-number-pyramid': MaNumberPyramid,
  'ma-magic-square': MaMagicSquare,
  'ma-balance-math': MaBalanceMath,
  'ma-shape-pattern': MaShapePattern,
}
