export function date(time) {
  const date = new Date(time * 1000).toLocaleDateString()
  return date
}

export function toThousandths(num) {
  const reg = /(\d)(?=(?:\d{3})+$)/g
  return (num + '').replace(reg, '$1,')
}

export function split(product) {
  const description = product.description
  const descriptionSplit = description.split('')
  return descriptionSplit
}
