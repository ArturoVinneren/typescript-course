import React from 'react'
import { ProductContext, useProduct } from 'vtex.product-context'

type Product = {
    brand: string;
    brandId: string;
    cacheId: string;
    categoryId: string;
    description: string;
    link: string;
    metaDescription: string;
    productId: string;
    productReference: string;
    titleTag: string;
}


const ProductField = ({field}: {field: string}) => {
  const { product } = useProduct() as ProductContext

  const checkField = (product: Partial<Product> | undefined) => {
    const value = (product as any)?.[field]
  
    if (!value) return ''
    if (typeof value === 'object') return ''
    
    return value
  }
  
  console.log({product, field});
  return (
    <>{checkField(product)}</>
  )
}

ProductField.schema = {
  title: "Product Field",
  type: "object",
  properties: {
    field: {
      title: "Field",
      type: "string",
    }
  }
}

export default ProductField