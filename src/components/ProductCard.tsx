import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/interfaces/product.interface"

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-sans text-lg text-green900 font-semibold">
          {product.name}
        </CardTitle>
        <CardDescription className="font-sans text-sm text-green900">
          {product.description}
        </CardDescription>
        <p className="mt-2 text-lg text-rose font-bold">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full bg-green900">Adicionar ao Carrinho</Button>
      </CardFooter>
    </Card>
  )
}
