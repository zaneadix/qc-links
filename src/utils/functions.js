let formatIngredient = ({ measurement, name, unit }) => {
  if (unit) {
    let plural = false
    unit = unit.trim()

    if (/^\d+$/i.test(measurement)) {
      plural = parseInt(measurement) > 1
    } else if (/^\d+[- ]\d+\/\d+$/.test(measurement)) {
      plural = true
    } else if (/\d+\/\d+$/.test(measurement)) {
      plural = parseInt(measurement.split("/")[0])
    }

    unit = plural ? `${unit}s` : unit

    return `${measurement} ${unit} ${name}`
  }

  return `${measurement} ${name}`
}

export { formatIngredient }
