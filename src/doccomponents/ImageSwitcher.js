import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const ImageSwitcher = ({lightImageSrc, darkImageSrc, alt, width, height, title, align, titleAlign}) => {
  const { isDarkTheme } = useThemeContext();

  return (
   <img src={isDarkTheme ? darkImageSrc : lightImageSrc}
    alt={alt}
    height={height}
    width={width}
    title={title}
    align={align}
    titleAlign={titleAlign}/>
  );
};

export default ImageSwitcher;