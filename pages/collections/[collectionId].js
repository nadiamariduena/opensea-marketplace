import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

//
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
//
//

const collection = () => {
  const router = useRouter()

  //
  const { provider } = useWeb3()
  const { collectionId } = router.query
  //
  const [collection, setCollection] = useState({})
  const [nfts, setNfts] = useState([])
  const [listings, setListings] = useState([])
  //
  //

  // console.log(router.query)
  // console.log(router.query.collectionId)
  //
  //
  return (
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  )
}

export default collection
