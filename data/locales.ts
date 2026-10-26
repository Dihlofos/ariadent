import commonRu from './common/ru'
import commonEn from './common/en'
import indexRu from './pages/index/ru'
import indexEn from './pages/index/en'
import insuranceRu from './pages/insurance/ru'
import insuranceEn from './pages/insurance/en'
import patientsRu from './pages/patients/ru'
import patientsEn from './pages/patients/en'
import addressRu from './pages/address/ru'
import addressEn from './pages/address/en'
import aboutRu from './pages/about/ru'
import aboutEn from './pages/about/en'
import { applyTypography } from './typography'

export const SUPPORTED_LOCALES = ['ru', 'en'] as const
export const DEFAULT_LOCALE = 'ru'

export const localeData = {
  ru: applyTypography({
    common: commonRu,
    pages: {
      index: indexRu,
      insurance: insuranceRu,
      patients: patientsRu,
      address: addressRu,
      about: aboutRu,
    },
  }, 'ru'),
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
