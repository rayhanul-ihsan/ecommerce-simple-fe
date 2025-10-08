import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

import { uniqBy } from 'lodash';

import { REACT_SELECT_STYLE, TStyle } from '../../config/option/react-select/react-select-style'

export default function SelectStaticNonForm({
  placeholder = 'Choose...',
  options,
  defaultValue,
  isDisabled = false,
  isClearable = false,
  isCreateTable = false,
  isMulti = false,
  labelField = 'label',
  valueField = 'value',
  styles = 'default',
  callbackOnChange,
  additionalOptions = {},
}: ISelectStaticNonForm) {
  const [valueSelect, setValueSelect] = useState<any>()
  const [listOptions, setListOptions] = useState<any>([])

  useEffect(() => {
    if (options) {
      const datas = options?.map((d: any) => {
        return { ...d, label: d[labelField], value: d[valueField] }
      })

      setListOptions(datas)
    }
  }, [options])

  useEffect(() => {
    if (defaultValue) {
      setTimeout(() => {
        const newValue: any = { ...defaultValue, label: defaultValue[labelField], value: defaultValue[valueField] }
        const datas = options?.map((d: any) => {
          return { ...d, label: d[labelField], value: d[valueField] }
        })
        setListOptions(uniqBy([...listOptions, ...datas, newValue], 'value'))
        setValueSelect(newValue?.value)
      }, 500)
    }
  }, [defaultValue, options])

  const onChange = (value: any) => {
    const newValue: any = isMulti ? value?.map((x: any) => x.value) : value?.value
    setValueSelect(newValue)
    if (callbackOnChange) callbackOnChange(value)
  }

  return (
    <>
      {isCreateTable ? (
        <CreatableSelect
          isClearable={isClearable}
          placeholder={placeholder}
          options={listOptions}
          value={listOptions.filter((c: any) => c.value == valueSelect)}
          onCreateOption={(val: string) => {
            onChange(val)
          }}
          onChange={(val: any) => {
            onChange(val)
          }}
          styles={REACT_SELECT_STYLE[styles]}
          menuPlacement="auto"
        />
      ) : (
        <Select
          placeholder={placeholder}
          styles={REACT_SELECT_STYLE[styles]}
          value={
            isMulti
              ? valueSelect
                ? valueSelect?.map((x: any) => listOptions?.filter((y: any) => x == y.value)[0])
                : []
              : listOptions.filter((c: any) => c.value == valueSelect)
          }
          onChange={(val: any) => onChange(val)}
          options={listOptions}
          isDisabled={isDisabled}
          isClearable={isClearable}
          isMulti={isMulti}
          menuPlacement="auto"
          {...additionalOptions}
        />
      )}
    </>
  )
}

interface ISelectStaticNonForm {
  placeholder?: string
  options: any
  defaultValue?: any
  isDisabled?: boolean
  isClearable?: boolean
  isCreateTable?: boolean
  isMulti?: boolean
  labelField?: any
  valueField?: any
  styles?: TStyle
  callbackOnChange?: any
  additionalOptions?: any
}
