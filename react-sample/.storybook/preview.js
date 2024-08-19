/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    parameters: {
      actions: { argTypesRegex: "^on[A-Z].*"},
    }
  },
};

export default preview;
