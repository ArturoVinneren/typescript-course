import React, { useContext } from 'react'
import { ProductContext } from 'vtex.product-context'

const ProductField = ({field}) => {
  const { product } = useContext(ProductContext)

  const checkField = (value) => {
    if (!value) return ''
    if (typeof value === 'object') return ''
    
    return value
  }
  
  console.log({product});
  return (
    <>{checkField(product?.[field])}</>
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