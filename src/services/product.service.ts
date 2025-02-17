import { Product } from "@/interfaces/product.interface"

export async function getHighlightedProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products/highlighted")
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos destacados")
  }
  return response.json()
}
