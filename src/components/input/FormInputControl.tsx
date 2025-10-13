import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled from 'styled-components'
import RequiredInfo from '../Info/RequiredInfo'

const WarpInput = styled.div``

const FormInputControl: React.FC<{
  readOnly?: boolean
  disabled?: boolean
  labelName?: string
  required?: boolean
  placeholder?: string
  formGroupAs?: any
  formGroup?: boolean
  errorDiv?: boolean
  as?: 'textarea' | any
  rows?: any
  isInvalid?: any
  message?: any
  maxlength?: number
  max?: any
  min?: any
  register?: UseFormRegisterReturn
  type?: 'text' | 'password' | 'number' | 'color' | 'email' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local' | 'month'
  className?: string
  classNameLabel?: string
  classNameControl?: string
  size?: 'lg' | 'sm'
  classNameInput?: 'bg-transparent' | string
  id?: any
  autoFocus?: boolean
  additionalOptions?: any
  onKeyUp?: any
  onKeyDown?: any
  style?: any
  defaultValue?: any
  // New props for prefix/suffix
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
  prefixClassName?: string
  suffixClassName?: string
}> = ({
  labelName,
  required = false,
  placeholder,
  isInvalid,
  message,
  maxlength,
  max,
  min = 0,
  register = {},
  type = 'text',
  formGroup = true,
  errorDiv = true,
  formGroupAs = undefined,
  as = undefined,
  rows = undefined,
  className = 'mb-3',
  classNameLabel = '',
  classNameControl = '',
  size,
  classNameInput,
  autoFocus = false,
  additionalOptions = {},
  onKeyUp,
  onKeyDown,
  readOnly = false,
  disabled = false,
  style,
  defaultValue,
  prefix,
  suffix,
  prefixClassName = '',
  suffixClassName = '',
}) => {
  const handleOnKeyUp = (e: any) => {
    if (onKeyUp) {
      onKeyUp(e)
    }
  }

  const handleKeyDown = (e: any) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const renderFormControl = () => {
    const formControl = (
      <Form.Control
        type={type ?? 'text'}
        {...register}
        as={as}
        rows={rows}
        isInvalid={isInvalid}
        maxLength={maxlength}
        placeholder={placeholder ?? ''}
        autoFocus={autoFocus}
        onKeyUp={handleOnKeyUp}
        onKeyDown={handleKeyDown}
        max={max}
        min={min}
        size={size}
        className={classNameInput}
        {...additionalOptions}
        readOnly={readOnly}
        disabled={disabled}
        style={style}
        defaultValue={defaultValue}
      />
    )

    // If prefix or suffix exists, wrap with InputGroup
    if (prefix || suffix) {
      return (
        <InputGroup hasValidation={isInvalid}>
          {prefix && (
            <InputGroup.Text className={prefixClassName}>
              {prefix}
            </InputGroup.Text>
          )}
          {formControl}
          {suffix && (
            <InputGroup.Text className={suffixClassName}>
              {suffix}
            </InputGroup.Text>
          )}
        </InputGroup>
      )
    }

    return formControl
  }

  if (formGroup)
    return (
      <Form.Group as={formGroupAs} className={className}>
        {labelName && (
          <Form.Label className={classNameLabel}>
            {labelName} {' '}
            {required && <RequiredInfo />}
          </Form.Label>
        )}
        <WarpInput className={classNameControl}>
          {renderFormControl()}
          {errorDiv && <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>}
        </WarpInput>
      </Form.Group>
    )
  else
    return (
      <>
        {prefix || suffix ? (
          renderFormControl()
        ) : (
          <Form.Control
            type={type ?? 'text'}
            {...register}
            as={as}
            rows={rows}
            isInvalid={isInvalid}
            placeholder={placeholder ?? ''}
            onKeyUp={handleOnKeyUp}
            max={max}
            min={min}
            size={size}
            className={`${className} ${classNameInput}`}
            {...additionalOptions}
            readOnly={readOnly}
            disabled={disabled}  
            style={style}
            defaultValue={defaultValue}
          />
        )}
        {errorDiv && formGroup && <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>}
      </>
    )
}

export default FormInputControl