import { addDecorator } from '@storybook/react';
import {
  RouterDecorator,
  StyleDecorator,
} from '../../src/shared/config/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
