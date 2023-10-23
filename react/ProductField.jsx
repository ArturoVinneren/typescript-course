import React from 'react'

const ProductField = ({field}) => {
  return (
    <>{field}</>
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