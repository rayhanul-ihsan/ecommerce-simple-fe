import React, { useMemo } from 'react'
import styled from 'styled-components';

const DivImage = styled.div`
  background-image: url(/static/avatar.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

type Props = { src: string, defaultImage?: string, className?: string, style?: any }

function LazyBackgroundImage({ src, defaultImage='/static/avatar.svg', className, style = {} }: Props) {
  const srcOrigin: any = useMemo(() => {
    const imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => src
    return src
  }, [src]);

  return (
    <DivImage className={className} style={{ backgroundImage: `url(${srcOrigin || defaultImage})`, ...style }} />
  )
}

export default LazyBackgroundImage