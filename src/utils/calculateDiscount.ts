export function calculateDiscount({
  price,
  discountPercentage,
}: {
  price: number
  discountPercentage: number
}): number {
  return price - (price * discountPercentage) / 100
}
