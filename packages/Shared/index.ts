type ColorLevelProps = {
  background: string;
  text: string;
};

type ThemeColorLevel = {
  primary: ColorLevelProps;
  secondary: ColorLevelProps;
};

type ThemeCollection = {
  light: ThemeColorLevel;
  dark: ThemeColorLevel;
  halloween: ThemeColorLevel;
  xmas: ThemeColorLevel;
};

export const Theme: ThemeCollection = {
  light: {
    primary: {
      background: '',
      text: '',
    },
    secondary: {
      background: '',
      text: '',
    },
  },

  dark: {
    primary: {
      background: '',
      text: '',
    },
    secondary: {
      background: '',
      text: '',
    },
  },

  halloween: {
    primary: {
      background: '',
      text: '',
    },
    secondary: {
      background: '',
      text: '',
    },
  },

  xmas: {
    primary: {
      background: '',
      text: '',
    },
    secondary: {
      background: '',
      text: '',
    },
  },
};
