import React, { useContext } from 'react';
import Frame, { FrameContext } from 'react-frame-component';
import { StyleSheetManager } from 'styled-components';

export const StyledFrame = (props) => {
  const { style, children, ...otherProps } = props;

  return (
    <Frame
      style={{"border":"none", ...style}}
      {...otherProps}
    >
      <InjectFrameStyles>{props.children}</InjectFrameStyles>
    </Frame>
  );
};

const InjectFrameStyles = (props) => {
  const { document } = useContext(FrameContext);
  return <StyleSheetManager target={document.head}>{props.children}</StyleSheetManager>;
};
