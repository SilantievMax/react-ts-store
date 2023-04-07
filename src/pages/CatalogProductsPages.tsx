import React from 'react'

import Catalog from 'components/Catalog/Catalog'
import Sorting from 'components/Sorting/Sorting'

const CatalogProductsPages = () => {
  return (
    <>
      <Sorting heading='Косметика и гигиена' />
      <Catalog />
    </>
  )
}

export default CatalogProductsPages
