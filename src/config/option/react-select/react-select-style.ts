import { ReactSelectUser, 
  ReactSelectInputGroup,
  ReactSelectNoBorder,
  ReactSelectRoundedPill,
  ReactSelectSmallStyle,
  ReactSelectStyle2,
  ReactSelectStyleForm,
  ReactSelectStyleTransparent,
  ReactSelectStyleV3,
  ReactSelectStyleV4,
  ReactSelectStyleV5,
  ReactSelectStyleV6,
  ReactSelectStyleV7, } from '../../../styled/react-select/react-select.configV2'
import { ReactSelectUserStyle, ReactSelectStyle, ReactSelectStyleWithColorsRounded } from '../../../styled/react-select/react-select.config'

export const REACT_SELECT_STYLE: any = {
  default: ReactSelectStyle,
  'default-transparent': ReactSelectStyleTransparent,
  'version-2': ReactSelectStyle2,
  'version-3': ReactSelectStyleV3,
  'version-4': ReactSelectStyleV4,
  'version-5': ReactSelectStyleV5,
  'version-6': ReactSelectStyleV6,
  'version-7': ReactSelectStyleV7,
  user: ReactSelectUserStyle,
  small: ReactSelectSmallStyle,
  roundedPill: ReactSelectRoundedPill,
  colorRounded: ReactSelectStyleWithColorsRounded,
  form: ReactSelectStyleForm,
  inputGroup: ReactSelectInputGroup,
  'no-border': ReactSelectNoBorder,
  'select-user': ReactSelectUser,
}

export type TStyle =
  | 'default'
  | 'colorRounded'
  | 'roundedPill'
  | 'default-transparent'
  | 'version-2'
  | 'version-3'
  | 'version-4'
  | 'version-5'
  | 'version-6'
  | 'version-7'
  | 'user'
  | 'small'
  | 'form'
  | 'inputGroup'
  | 'no-border'
  | 'select-user'
