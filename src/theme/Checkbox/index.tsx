import React from 'react';

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './checkbox.styled';

const Checkbox: React.FC<IProps> = ({ className, checked, labelWrap = true, ...props }) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};

export default Checkbox;
