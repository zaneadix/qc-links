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
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  scaleRatio: 2,
  headerFontFamily: stack,
  bodyFontFamily: stack,
  googleFonts: [
    {
      name: "Playfair Display",
      styles: ["400", "900"],
    },
    {
      name: "Montserrat",
      styles: ["300", "400", "500", "600", "700"],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography
