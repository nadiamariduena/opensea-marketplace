import React from 'react'
import { useRouter } from 'next/router'

const collection = () => {
  const router = useRouter()
  //
  console.log(router.query)
  console.log(router.query.collectionId)
  return <h2>{router.query.collectionId}</h2>
}

export default collection
