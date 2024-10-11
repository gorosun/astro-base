import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'mouse entered' },
    onMouseLeave: { action: 'mouse left' },
  },
};

export default preview;