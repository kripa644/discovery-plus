import React from 'react';
import Button, {ButtonType, ButtonTheme} from './index';


export default {
    title: 'DiscoveryPlus/Button',
    component: Button,
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          { name: 'white', value: '#ffffff' },
          { name: 'light', value: '#f6f9fd' },
          { name: 'dark', value: '#121432' },
          { name: 'black', value: '#000000' },
        ],
      },
    },
  };
  
  export const Primary_Button = () => {
    return (
      <Button
        type={ButtonType.SUBMIT}
      >
        Sign In
      </Button>
    );
  };

  export const Secondary_Button = () => {
    return (
      <Button
        type={ButtonType.SUBMIT}
        theme={ButtonTheme.SECONDARY}
      >
        Recommended
      </Button>
    );
  };