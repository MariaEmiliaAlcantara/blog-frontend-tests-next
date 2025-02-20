"use client"

import { useCart } from "@/hooks/useCart"
import { Button } from "./ui/button"
import { Product } from "@/interfaces/product.interface"
import React from "react"

interface AddToCartButtonProps {
  product: Product
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
}) => {
  const { addToCart } = useCart()

  return (
    <Button
      className="w-full bg-green900"
      onClick={() => {
        addToCart(product)
      }}
    >
      Add to Cart
    </Button>
  )
}
