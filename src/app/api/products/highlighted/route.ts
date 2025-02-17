import { NextResponse } from "next/server"
import products from "@/mock/products.json"

export async function GET() {
  const highlightedProducts = products.filter((product) => product.highlight)
  return NextResponse.json(highlightedProducts)
}
