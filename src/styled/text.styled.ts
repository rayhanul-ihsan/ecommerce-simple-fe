import styled from 'styled-components'

export const TextDanger = styled.span`
  color: var(--danger) !important;
`

export const TextMuted = styled.p`
  color: var(--black-500) !important;
`

export const TextSub1 = styled.p`
  font-size: 0.86rem;
  margin: 0;
  color: var(--black-700);
`

export const TitleNews = styled.p`
  font-size: 1.14rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.4rem;
`
export const P16Regular = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.45rem; /* 145% */
`
export const P16Medium = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.71429rem;
`
export const P16High = styled.p`
  font-size: 1.06667rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.54667rem; /* 145% */
`

export const P12Regular = styled.p`
  font-size: 0.78rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571rem; /* 150% */
`
export const P12Medium = styled.p`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12rem; /* 150% */
`
export const P12High = styled.p`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12rem; /* 145% */
`

export const P14Regular = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
`
export const P14Medium = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
`
export const P14High = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.26875rem; /* 145% */
`
export const P18High = styled.p`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.63125rem; /* 145% */
`
export const P18Highs = styled.p`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.63125rem; /* 145% */
`
export const P18HighBold = styled.p`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.74rem; /* 145% */
`
export const P20High = styled.p`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 120% */
  letter-spacing: -0.025rem;
`
export const P28High = styled.p`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.1rem; /* 120% */
  letter-spacing: -0.035rem;
`
export const P32High = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem; /* 120% */
  letter-spacing: -0.04rem;
`
export const P36High = styled.p`
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.7rem; /* 120% */
  letter-spacing: -0.09rem;
`

export const PClamp = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const PClamp5 = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const P16Clamp2 = styled(P16High)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const P16Clamp4 = styled(P16High)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const P14HighClamp1 = styled(P14High)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const P14MediumClamp1 = styled(P14Medium)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const P14HighClampNew1 = styled(P14High)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
  min-width: 15rem;
`
export const P16Clamp1 = styled(P16High)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`
export const P16MediumClamp1 = styled(P16Medium)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
  max-width: 8rem;
`
export const P16RegularClamp1 = styled(P16Regular)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 10rem;
`

export const PClamp1Line = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 2rem;
`
export const PClamp1Linecustome = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 2rem;
  max-width: 8rem;
`
export const PClamp1LinecustomeV2 = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 2rem;
  max-width: 45rem;
`
export const PClamp3Linecustome = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 2rem;
  max-width: 10rem;
`
