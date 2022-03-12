import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

//
import { useWeb3 } from '@3rdweb/hooks'
//
//
//
const collection = () => {
  const router = useRouter()
  //
  const { provider } = useWeb3()
  const { collectionId } = router.query
  const [collection, setCollection] = useState({})
  const [nfts, setNfts] = useState([])
  const [listings, setListings] = useState([])
  //
  //
  //

  /*
1
- the dependency is going to be the provider, 
so if the provider **dont exist** return it, 
otherwise e are going to create a thirdweb 
sdk: **new ThirdwebSDK**, to get our signer 
**provider.getSigner()**, and we are going 
to use our API key: **h ttps://eth-rinkeby...**, 
and than we are going to return the
 NFT MODULE: **sdk.getNFTModule(collectionId)**


*/
  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/oneD5PzlO3p18PfmfbguZhfsDWCUvhI2'
    )
    return sdk.getNFTModule(collectionId)
  }, [provider])
  //
  //2 so here will be the same but this time is for the nft (read the descript in the branch 7 )
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()

      setNfts(nfts)
    })()
  }, [nftModule])
  //
  //

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/oneD5PzlO3p18PfmfbguZhfsDWCUvhI2'
    )
    return sdk.getMarketplaceModule(
      '0x93A771F7ce845C33381f677489cF21a5964EDD0b'
    )
  }, [provider])
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
