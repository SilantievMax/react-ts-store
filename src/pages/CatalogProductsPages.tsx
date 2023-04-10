import React from 'react'

import Catalog from 'components/Catalog/Catalog'
import Sorting from 'components/Sorting/Sorting'

const CatalogProductsPages = () => {
  return (
    <div data-testid="catalog-products-pages">
      <Sorting heading='Косметика и гигиена' />
      <Catalog />
    </div>
  )
}

export default CatalogProductsPages
