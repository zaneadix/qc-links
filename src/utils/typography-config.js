import Typography from "typography"

let stack = [
  "Montserrat",
  "Avenir Next",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
]

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.45,
  scaleRatio: 2,
  headerFontFamily: stack,
  bodyFontFamily: stack,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["300", "600", "700"],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography
