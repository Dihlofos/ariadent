import commonNl from './common/nl'
import commonEn from './common/en'
import indexNl from './pages/index/nl'
import indexEn from './pages/index/en'
import insuranceNl from './pages/insurance/nl'
import insuranceEn from './pages/insurance/en'
import patientsNl from './pages/patients/nl'
import patientsEn from './pages/patients/en'
import addressNl from './pages/address/nl'
import addressEn from './pages/address/en'
import aboutNl from './pages/about/nl'
import aboutEn from './pages/about/en'
import { applyTypography } from './typography'

export const SUPPORTED_LOCALES = ['nl', 'en'] as const
export const DEFAULT_LOCALE = 'nl'

export const localeData = {
  nl: applyTypography({
    common: commonNl,
    pages: {
      index: indexNl,
      insurance: insuranceNl,
      patients: patientsNl,
      address: addressNl,
      about: aboutNl,
    },
  }, 'nl'),
  en: applyTypography({
    common: commonEn,
    pages: {
      index: indexEn,
      insurance: insuranceEn,
      patients: patientsEn,
      address: addressEn,
      about: aboutEn,
    },
  }, 'en'),
}
