import { OPTION_PAGING_LIMIT_12, OPTION_PAGING_LIMIT_13, OPTION_PAGING_LIMIT_18, OPTION_PAGING_LIMIT_6, OPTION_PAGING_LIMIT_8, OPTION_PAGING_LIMIT_9, OPTION_PAGING_LIMIT_PAGINATION, OPTION_PAGING_LIMITS } from "../../../styled/options.config"

export const REACT_SELECT_OPTIONS: any = {
  default: OPTION_PAGING_LIMITS,
  'version-1': OPTION_PAGING_LIMIT_PAGINATION,
  'version-2': OPTION_PAGING_LIMIT_8,
  'version-18': OPTION_PAGING_LIMIT_18,
  'version-3': OPTION_PAGING_LIMIT_6,
  'version-4': OPTION_PAGING_LIMIT_9,
  'version-12': OPTION_PAGING_LIMIT_12,
  'version-13': OPTION_PAGING_LIMIT_13,
}

export type TLimitOption = 'default' | 'version-1' |'version-2' | 'version-3' | 'version-4' | 'version-12' | 'version-13'
