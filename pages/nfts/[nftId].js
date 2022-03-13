import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'

//
//
//
//
const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

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


the following 2 functions work together, 
the same for the other 2 (market...)

*/

  //
  //               Grab the nfts
  //
  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/oneD5PzlO3p18PfmfbguZhfsDWCUvhI2'
    )
    return sdk.getNFTModule('0xB4D9B62983AD4027533905D1DbFcEE732Bc0CEC7')
  }, [provider])
  /*


*/
  // get all NFTs from above that are in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()

      const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId)

      setSelectedNft(selectedNftItem)
    })()
  }, [nftModule])
  /*


                    
                    
                    Grab the market collection 




*/
  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/oneD5PzlO3p18PfmfbguZhfsDWCUvhI2'
    )

    return sdk.getMarketplaceModule(
      '0xCdA1334a27C272c7cFF02bc2CC1563b60e540402'
    )
  }, [provider])
  /*



*/
  // get all listings in the market collection
  //
  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])
  /*







*/
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            {/* -------- */}
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            {/* 
            
            General details
            
            */}
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  )
}

export default Nft
