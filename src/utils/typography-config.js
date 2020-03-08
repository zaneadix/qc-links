import Typography from "typography"

let baseStack = ["Playfair Display", "Georgia", "serif"]

let headerStack = [
  "Montserrat",
  "Avenir Next",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
]

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 1.9,
  bodyFontFamily: baseStack,
  headerFontFamily: headerStack,
  headerWeight: 300,
  includeNormalize: true,
  googleFonts: [
    {
      name: "Playfair Display",
      styles: ["400", "900"],
    },
    {
      name: "Montserrat",
      styles: ["300", "500"],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography
