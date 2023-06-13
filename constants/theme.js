const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  colorPrimary0: "#60329D",
  colorPrimary1: "#C9B3E6",
  colorPrimary2: "#AE90D7",
  colorPrimary3: "#2C075D",
  colorPrimary4: "#220449",

  colorSecondary0: "#962696",
  colorSecondary1: "#E4ACE4",
  colorSecondary2: "#D387D3",
  colorSecondary3: "#590059",
  colorSecondary4: "#460046",

  colorTertiary0: "#3B3BA2",
  colorTertiary1: "#B8B8E8",
  colorTertiary2: "#9797D9",
  colorTertiary3: "#0E0E60",
  colorTertiary4: "#08084B",

  colorComplement0: "#E7D73A",
  colorComplement1: "#FFF9C1",
  colorComplement2: "#FFF7A3",
  colorComplement3: "#8A7D00",
  colorComplement4: "#6C6200",
};

export const colors = {
  primary: {
    main: "#6B3FA0",
    light1: "#AF8FD5",
    light2: "#875FB7",
    dark1: "#572693",
    dark2: "#401573",
  },
  secondary1: {
    main: "#C6E34D",
    light1: "#E9FAA1",
    light2: "#DDF675",
    dark1: "#B0D028",
    dark2: "#88A412",
  },
  secondary2: {
    main: "#ECC750",
    light1: "#FFE9A4",
    light2: "#FFDF79",
    dark1: "#D8AE29",
    dark2: "#AA8613",
  },
};

const FONT = {
  regular: "BahijBaream",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
