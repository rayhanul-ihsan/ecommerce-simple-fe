export const ReactSelectStyle = {
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    color: '$input-color',
    padding: '0.1366rem 0.8rem',
    borderRadius: '0.42857rem;',
    borderWidth: '1px',
    fontFamily: 'Inter',
    maxHeight: '50px',
    overflow: 'hidden',
    textAlign: 'left',
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
  input: (styles: any) => ({
    ...styles,
    color: 'var(--black-800)',
    margin: '0',
    fontFamily: 'Inter',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    textAlign: 'left',
    color: 'var(--black-300)',
    fontFamily: 'Inter',
    fontSize: '0.93333rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.4rem',
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    textAlign: 'left',
    padding: '0',
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
    fontFamily: 'Inter',
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    fontWeight: '500',
    fontFamily: 'Inter',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
    fontWeight: '500',
    fontFamily: 'Inter',
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
    textAlign: 'left',
    backgroundColor: 'var(--white)',
    fontFamily: 'Inter',
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    fontFamily: 'Inter',
    color: 'var(--black)',
    textAlign: 'left',
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
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
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

export const ReactSelectStyleLight = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    borderColor: 'var(--white, #ccc)',
    color: '$input-color',
    padding: '.3rem',
    '&:focus': {
      ...styles[':focus'],
      backgroundColor: 'var(--white)',
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
  input: (styles: any) => ({
    ...styles,
    color: 'var(--black-800)',
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: 'var(--white)',
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
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'var(--black-500)',
    backgroundColor: 'var(--black-100)',
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

const rounded = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: '0.13333rem',
    content: '" "',
    display: 'block',
    marginRight: 8,
    width: '0.8rem',
    height: '0.8rem',
  },
})

export const ReactSelectStyleWithColorsRounded = {
  ...ReactSelectStyle,
  singleValue: (styles: any, { data }: any) => ({
    ...styles,
    ...rounded(data.color),
    color: 'var(--black)',
  }),
}

export const ReactSelectStyleFigma = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    padding: '0 1rem',
    backgroundColor: isDisabled ? 'var(--black-25)' : 'var(--white)',
    borderColor: 'var(--black-150)',
    borderRadius: '0.42857rem',
  }),
}
