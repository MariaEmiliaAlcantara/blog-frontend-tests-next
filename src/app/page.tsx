import { ProductCard } from "@/components/ProductCard"
import { Product } from "@/interfaces/product.interface"
import { getHighlightedProducts } from "@/services/product.service"

export default async function Home() {
  const products: Product[] = await getHighlightedProducts()

  return (
    <div className="container mx-auto py-16 px-12 flex flex-col gap-8 items-center">
      <h1 className="font-sans text-gray-800 text-4xl font-bold mb-6">
        Produtos em Destaque
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
