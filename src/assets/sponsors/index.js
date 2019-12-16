import { ReactComponent as OnePassword } from './1password.svg'
import { ReactComponent as TwoKeys } from './2keys.svg'
import { ReactComponent as Balsamiq } from './balsamiq.svg'
import { ReactComponent as CaseWare } from './caseWare.svg'
import { ReactComponent as Ciena } from './ciena.svg'
import { ReactComponent as Cse } from './cse.svg'
import { ReactComponent as DeloitteLight } from './deloitte.svg'
import { ReactComponent as DeloitteDark } from './deloitte-dark.svg'
import { ReactComponent as DigitalOcean } from './digital-ocean.svg'
import { ReactComponent as EaLight } from './ea.svg'
import { ReactComponent as EaDark } from './ea-dark.svg'
import { ReactComponent as FdmGroupLight } from './fdm-group.svg'
import { ReactComponent as FdmGroupDark } from './fdm-group-dark.svg'
import { ReactComponent as FullscriptLight } from './fullscript.svg'
import { ReactComponent as FullscriptDark } from './fullscript-dark.svg'
import { ReactComponent as JetBrains } from './jetbrains.svg'
import { ReactComponent as Kinaxis } from './kinaxis.svg'
import { ReactComponent as LighthouseLabsLight } from './lighthouse-labs.svg'
import { ReactComponent as LighthouseLabsDark } from './lighthouse-labs-dark.svg'
import { ReactComponent as MarchNetworks } from './march-networks.svg'
import { ReactComponent as Martello } from './martello.svg'
import { ReactComponent as Rbc } from './rbc.svg'
import { ReactComponent as RossVideo } from './rossVideo.svg'
import { ReactComponent as SketchLight } from './sketch.svg'
import { ReactComponent as SketchDark } from './sketch-dark.svg'
import { ReactComponent as StickermuleLight } from './stickermule.svg'
import { ReactComponent as StickermuleDark } from './stickermule-dark.svg'
import { ReactComponent as VoiceflowLight } from './voiceflow.svg'
import { ReactComponent as VoiceflowDark } from './voiceflow-dark.svg'
import { ReactComponent as WolframLight } from './wolfram.svg'
import { ReactComponent as WolframDark } from './wolfram-dark.svg'

const themedLogos = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? {
      Deloitte: DeloitteDark,
      Ea: EaDark,
      FdmGroup: FdmGroupDark,
      Fullscript: FullscriptDark,
      LighthouseLabs: LighthouseLabsDark,
      Sketch: SketchDark,
      Stickermule: StickermuleDark,
      Voiceflow: VoiceflowDark,
      Wolfram: WolframDark
    }
  : {
      Deloitte: DeloitteLight,
      Ea: EaLight,
      FdmGroup: FdmGroupLight,
      Fullscript: FullscriptLight,
      LighthouseLabs: LighthouseLabsLight,
      Sketch: SketchLight,
      Stickermule: StickermuleLight,
      Voiceflow: VoiceflowLight,
      Wolfram: WolframLight
    }

export default {
  OnePassword,
  TwoKeys,
  Balsamiq,
  CaseWare,
  Ciena,
  Cse,
  DigitalOcean,
  JetBrains,
  Kinaxis,
  MarchNetworks,
  Martello,
  Rbc,
  RossVideo,
  ...themedLogos
}
