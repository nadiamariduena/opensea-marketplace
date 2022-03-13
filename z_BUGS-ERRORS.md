# 🔴 Err 1.

### Img not showing

#### When we click on the image inside the <u>collection</u> page, we are redirected into another page, this page is the the:

- [nftId].js

#### Normally after we set up the component containing the _Img_ in this case <u>components/nft/NFTImage.js</u>, that will be passed through PROPS to the <u>pages/nfts/[nftId].js </u> this image should show up, but it didnt.

<br>

# 🐖

#### The first mistake I noticed

- I confused the **id** coming from the **thirdweb** (where i store the market and the nfts)

#### The error

```javascript
Unhandled Runtime Error
Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"code":-32000,"message":"execution reverted"}, method="call", transaction={"from":"0x557C9888F57A1793FCB2d3ddCEa2bdAb9C301f81","to":"0xCdA1334a27C272c7cFF02bc2CC1563b60e540402","data":"0x75794a3c","accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.6.0)
```

<br>

#### 🌞 The reason:

- I confused the key of the **sdk.getNFTModule( )** inside the **[nftid].js**, i added the market key to both instead of having a different key for each like you see in the gif

<br>

```javascript
//
//                  BEFORE
//
return sdk.getNFTModule('0xCdA1334a27C272c7cFF02bc2CC1563b60e540402')
//
//
//                  AFTER
return sdk.getNFTModule('0xB4D9B62983AD4027533905D1DbFcEE732Bc0CEC7')
```

<br>

[<img src="./z_img-read/error-NFTImage.gif"/>]()

<br>

### The correct code

```javascript
import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'

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
  // get all NFTs in the collection
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

      <NFTImage selectedNft={selectedNft} />
    </div>
  )
}

export default Nft
```

<br>
<br>

---

<br>
<br>

# 🔴 Err 2.

<br>

- Collection page

### After I corrected this issue I noticed that the banner and the image avatar of the user (the one in the center top of the page) of the collection page, wasn't showing...

<br>

- I thought that i might did something wrong with the code, so i tried to find an error in the **type** etc..but everything was okay, eventually i ended up deleting the 2 last component i added to see if the **image issue** persisted, but nothing.

<br>

#### 🌈 Some how I noticed

- That the server wasn't running in **localhost 3000** and that it was running in **3001** now, because apparently the 3000 was being using somewhere else, in the beginning i didnt think it will be an issue...

#### then I thought, what if the images dont show because of the server running in another port?

<br>

- So I **closed** Visual studio instead of **killing all the servers**, then i open it again and started the server again to see if it would run in **PORT 3000** like before when i started using the images , and **BINGO** , the banner and the avatar are visible again.

<br>

#### I came up with this, because I had a similar issue when working with images coming from MONGODB (since they are stored in an specific port and dont show if you run your server in a different port)

<br>
<br>
