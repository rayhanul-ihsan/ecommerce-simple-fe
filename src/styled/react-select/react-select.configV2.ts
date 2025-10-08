export const ReactSelectStyle = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--primary-10)',
    borderColor: 'var(--black-75, #ccc)',
    color: '$input-color',
    padding: '.3rem',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-10)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--black-75, #ccc)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
  input: (styles: any) => ({
    ...styles,
    color: 'var(--black-800)',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: 'var(--black-600)',
    fontSize: '1rem',
    fontWeight: 300,
    fontFamily: 'Inter',
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: 0,
    marginRight: 0,
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: 'transparent',
    marginTop: '6px',
    marginBottom: '6px',
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    padding: '0',
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    padding: '.5rem',
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    fontSize: '1rem',
    fontFamily: 'Inter',
    fontWeight: 300,
    marginLeft: 0,
    marginRight: 0,
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    fontSize: '1rem',
    fontFamily: 'Inter',
    fontWeight: 300,
    backgroundColor: 'var(--black-100)',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    fontSize: '1rem',
    fontFamily: 'Inter',
    fontWeight: 300,
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    ':hover': {
      color: 'var(--black)',
      backgroundColor: 'var(--primary-300)',
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    ':hover': {
      ...styles[':hover'],
      backgroundColor: 'var(--primary-50)',
    },
    ':focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-50)',
    },
  }),
}

export const ReactSelectStyleTransparent = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'transparent',
    borderColor: 'var(--black-75, #ccc)',
    color: '$input-color',
    padding: '.3rem',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'transparent',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--black-75, #ccc)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
  input: (styles: any) => ({
    ...styles,
    color: 'var(--black-800)',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: 'var(--black-600)',
    fontSize: '1rem',
    fontWeight: 300,
    fontFamily: 'Inter',
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: 'transparent',
    marginTop: '6px',
    marginBottom: '6px',
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    padding: '0',
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    padding: '.5rem',
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    fontSize: '1rem',
    fontFamily: 'Inter',
    fontWeight: 300,
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    fontSize: '1rem',
    fontFamily: 'Inter',
    fontWeight: 300,
    backgroundColor: 'var(--black-100)',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    fontSize: '1rem',
    fontFamily: 'Inter',
    fontWeight: 300,
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    ':hover': {
      color: 'var(--black)',
      backgroundColor: 'var(--primary-300)',
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    ':hover': {
      ...styles[':hover'],
      backgroundColor: 'var(--primary-50)',
    },
    ':focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-50)',
    },
  }),
}

export const ReactSelectStyleV3 = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.1366rem 0.8rem',
    borderRadius: '0.85714rem',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
}

export const ReactSelectStyleV4 = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.1366rem 0.8rem',
    borderRadius: '0.57143rem',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
}

export const ReactSelectStyleV5 = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--c6-25)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.1366rem 0.8rem',
    borderRadius: '0.57143rem',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    boxShadow: '0 0 0 1px var(--c6-25)',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--c6-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
}

export const ReactSelectStyleV6 = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.1366rem 0.8rem',
    borderRadius: '0.57143rem',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    boxShadow: '0 0 0 1px var(--c6-25)',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--c6-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
}

export const ReactSelectStyleV7 = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0 0.57143rem',
    borderRadius: '0.42857rem',
    // fontSize: '0.85714rem',
    // fontWeight: '500',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    backgroundColor: 'transparent',
    fontWeight: '500',
    // fontFamily: 'Inter',
    border: '1px solid var(--black-75)',
    borderRadius: '0.85714rem',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'transparent',
    fontWeight: '500',
    // fontFamily: 'Inter',
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'var(--danger-400)',
    backgroundColor: 'transparent',
    ':hover': {
      color: 'var(--danger)',
      backgroundColor: 'transparent',
    },
  }),
}

export const ReactSelectRoundedPill = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.1366rem 0.8rem',
    borderRadius: 'var(--border-radius-pill)',
    borderWidth: '1px',
    transition: 'none',
    // fontFamily: 'Inter',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
}

export const ReactSelectStyleForm = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.33rem 1.14286rem',
    borderRadius: '0.85714rem',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-25)',
      borderColor: 'var(--black-75)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--black-75)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--black-75)',
    },
    minHeight: '30px',
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    backgroundColor: 'transparent',
    fontWeight: '500',
    // fontFamily: 'Inter',
    border: '1px solid var(--black-75)',
    borderRadius: '0.85714rem',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'transparent',
    fontWeight: '500',
    // fontFamily: 'Inter',
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'var(--danger-400)',
    backgroundColor: 'transparent',
    ':hover': {
      color: 'var(--danger)',
      backgroundColor: 'transparent',
    },
  }),
}

export const ReactSelectInputGroup = {
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    width: '100%',
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.35714rem 1.14286rem',
    borderRadius: '0 0.85714rem 0.85714rem 0',
    borderWidth: '1px',
    // fontFamily: 'Inter',
    transition: 'none',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-25)',
      borderColor: 'var(--primary-400)',
      boxShadow: '0 0 0 0.25rem rgba(var(--primary-rgb), 0.25)',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--primary-400)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--primary-400)',
    },
    minHeight: '30px',
  }),
  input: (styles: any) => ({
    ...styles,
    color: 'var(--black-800)',
    margin: '0',
    // fontFamily: 'Inter',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: 'var(--black-300)',
    // fontFamily: 'Inter',
    fontSize: '$input-font-size',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.4rem',
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: '0',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: 'transparent',
    marginTop: '6px',
    marginBottom: '6px',
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    padding: '0',
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    padding: '.5rem',
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    fontWeight: '500',
    // fontFamily: 'Inter',
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    fontWeight: '500',
    // fontFamily: 'Inter',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    fontWeight: '500',
    // fontFamily: 'Inter',
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    ':hover': {
      color: 'var(--black)',
      backgroundColor: 'var(--primary-300)',
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    // fontFamily: 'Inter',
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    // fontFamily: 'Inter',
    color: 'var(--black)',
    ':hover': {
      ...styles[':hover'],
      backgroundColor: 'var(--primary-50)',
    },
    ':focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-50)',
    },
  }),
}

export const ReactSelectStyle2 = {
  ...ReactSelectStyle,
  container: (styles: any) => ({
    ...styles,
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: 0,
  }),
  indicatorsContainer: (styles: any) => {
    return {
      ...styles,
      padding: 0,
      '>div': {
        padding: 0,
      },
    }
  },
  input: (styles: any) => ({
    ...styles,
  }),
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-100)',
    borderRadius: '40rem',
    color: '$input-color',
    fontFamily: 'Inter',
    lineHeight: '1.2rem',
    fontSize: '1rem',
    fontWeight: 400,
    minHeight: 0,
    padding: '0.75714rem 1.14286rem',
    // This line disable the blue border
    boxShadow: 'none',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--white)',
      borderColor: 'var(--black-100)',
      boxShadow: 'none',
    },
    ':hover': {
      ...styles[':hover'],
      borderColor: 'var(--black-100)',
    },
    ':active': {
      ...styles[':active'],
      borderColor: 'var(--black-100)',
    },
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: 'var(--black-200)',
    fontSize: '1rem',
    fontWeight: 300,
    fontFamily: 'Inter',
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    ':hover': {
      ...styles[':hover'],
      backgroundColor: 'var(--primary-50)',
    },
    ':focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-50)',
    },
  }),
}

export const ReactSelectUserStyle = {
  ...ReactSelectStyle,
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--primary-10)',
    border: 'none',
    color: '$input-color',
    fontFamily: 'Inter,sans-serif',
    fontSize: '1rem',
    fontWeight: 300,
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-10)',
      border: 'none',
      boxShadow: 'none',
    },
    ':hover': {
      ...styles[':hover'],
      border: 'none',
    },
    ':active': {
      ...styles[':active'],
      border: 'none',
    },
    minHeight: 'calc(1.5em + 1.5rem)',
  }),
}

export const ReactSelectSmallStyle = {
  ...ReactSelectStyle,
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--primary-10)',
    border: 'none',
    color: '$input-color',
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: 300,
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--primary-10)',
      border: 'none',
      boxShadow: 'none',
    },
    ':hover': {
      ...styles[':hover'],
      border: 'none',
    },
    ':active': {
      ...styles[':active'],
      border: 'none',
    },
    minHeight: '2rem',
  }),
}

export const ReactSelectNoBorder = {
  ...ReactSelectStyle,
  control: () => ({
    ...ReactSelectStyle.control,
    border: '0px solid transparent',
    display: 'flex',
  }),
}

export const ReactSelectUser = {
  ...ReactSelectStyle,
  control: () => ({
    ...ReactSelectStyle.control,
    borderRadius: '0.375rem',
    border: '1px solid var(--black-75)',
    display: 'flex',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    backgroundColor: 'var(--black-50)',
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'var(--black)',
    backgroundColor: 'var(--black-50)',
  }),
}
