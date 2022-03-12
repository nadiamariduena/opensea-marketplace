[![Puppycat_pose](https://emoji.gg/assets/emoji/8285-puppycat-pose.png)](https://emoji.gg/emoji/8285-puppycat-pose)

## Build OpenSea Blockchain Web 3.0 App with Next.js | Sanity.io | thirdweb

#### [check the video tutorial here](https://youtu.be/x3eRXeMB-4k)

<br>

#### Check this other tutorial for more details on this <u>Topic</u>

##### [Build your own NFT marketplace like OpenSea clone with solidity,openzeppelin and polygon (SUBSCRIBE)](https://youtu.be/7Q5E6RvLlUw)

<br>

---

<br>

# Docs

> **Blockchain development:** Smart Contracts, security, IDE, Truffle & hardhat, Etherscan, Dapp | **NFT:** ERC's ... [all here](./z_articles.md) ✋

<br>
<br>

## Interesting articles & links:

##### How to make money with NFT as a developer?

[How to make money with NFT as a developer?](https://youtu.be/5_Wu_X4LnAw)

<br>

##### NFT Marketplaces

> NFT marketplace rankings and analysis. Find non-fungible token trading volumes, number of traders per NFT marketplace and more key metrics.

[NFT Marketplaces](https://dappradar.com/nft/marketplaces) ✋

<br>

---

<br>

# Login:

#### Login in Metamask : [metamask](https://metamask.io/)

#### Login in ThirdWeb : [Thirdweb](https://bit.ly/3EJLftx)

#### Login [Opensea](https://testnets.opensea.io/)

 <br>

> **yarn dev** to start server on 3000 and **sanity start** to start server sanity on 3333 🌵

## <br>

<br>
<br>
<!-- [<img src="./z_img-read/toaster-notification-in-action.gif"/>]() -->
# 🍨 🥭

<br>

# Collections

#### Now we need to get back to the collections, if you remember we already started it a bit [Here](https://github.com/nadiamariduena/opensea-marketplace/tree/4-header-tailwing-routing), so now we need to make it work:

- SO this is what we have in collections

```javascript
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const collection = () => {
  const router = useRouter()
  //
  console.log(router.query)
  console.log(router.query.collectionId)
  return (
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  )
}

export default collection
```

<br>

### Start by adding the style

```javascript
const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  // h-20	height: 5rem; /* 80px */
  //w-screen	width: 100vw;
  //
  bannerImage: `w-full object-cover`,
  // w-full	width: 100%;  object-cover https://tailwindcss.com/docs/object-fit
  //
  infoContainer: `w-screen px-4`,
  // w-screen	width: 100vw;
  //
  //
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  //
  //
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  //mb = margin-bottom https://shuffle.dev/tailwind/classes/margins/mb-auto
  //
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}
```

<br>
<br>

#### Now Add the following:

- Here we will need to add the **provider coming from the web3** , than we will need to add the **collectionId**

<br>

```javascript
import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


//
import { useWeb3 } from '@3rdweb/hooks' ✋
import { client } from '../../lib/sanityClient'  ✋
//
/*



*/
const collection = () => {
  const router = useRouter()

  //
  const { provider } = useWeb3() ✋
  const { collectionId } = router.query ✋
  //
```

<br>

#### Set up an <u>states</u> for collections, nft's & listings coming from the collections we created in the [thirdweb](https://thirdweb.com/dashboard)

- the state is going to give us the possibility to have access to all I mentioned above

```javascript
const [collection, setCollection] = useState({})
const [nfts, setNfts] = useState([])
const [listings, setListings] = useState([])
```

<br>

- the state is going to get **access to all of the below**

<br>

[<img src="./z_img-read/states-to-get-access-thecollection.gif"/>]()

<br>
<br>

# 🌈 [INFURA ](https://infura.io/)

- "Our suite of high availability **APIs** and Developer Tools provide quick, reliable access to the Ethereum and **IPFS networks** so you can focus on building and scaling next generation software."

<br>

### We are going to need to open an account with INFURA

> ##### "Another service that you will use is INFURA which is an API that runs ethereum clients for you."

##### ⚠️ its not easy to run ethereum client, so infura is very useful when you want to send a transaction to mainnet

<br>

#### Once you have your [INFURA ](https://infura.io/) account, open an [ALCHEMY](https://www.alchemy.com/) account

<br>

#### How does Alchemy work?

> It replaces the **nodes** that businesses use to read and write blockchains with a faster, more scalable decentralized architecture. **It also provides tools for analytics, monitoring, alerting, logging and debugging for cryptocurrency-connected software**

<br>

> “Right now people are trying to build skyscrapers with picks and shovels. We need to give them construction equipment,” Alchemy co-founder and CEO Nikil Viswanathan tells me. “None of this exists for blockchain.”

##### read more: [Alchemy is secretly fising blockchain nightmare](https://consent.yahoo.com/v2/collectConsent?sessionId=3_cc-session_f0f9b10d-bde1-442d-a23d-c50d9a4bd975)

<br>

- So this is how they look like, but its not over yet

[<img src="./z_img-read/infura-alchemy.gif"/>]()

<br>
<br>

#### Complete the account with [ALCHEMY](https://www.alchemy.com/)

[<img src="./z_img-read/alchemy-completing-account.gif"/>]()

<br>

#### While in Alchemy, create a <u>new app</u>

- Grab the **http key** (in the img i took the other one, but you have to take the http one)

<br>

- 🔴 I will be deleting this at the end of the project, so its useless for you to copy it

```javascript
// HTTP KEY:   https://eth-rinkeby.alchemyapi.io/v2/oneD5PzlO3p18PfmfbguZhfsDWCUvhI2
```

[<img src="./z_img-read/alchemy-api.gif"/>]()

<br>
<br>

---

<br>
<br>

# 🐄

#### Now lets create a function that will help us to get access to the <u>NFT module</u>

##### [Build OpenSea Blockchain Web 3.0 App with Next.js | Sanity.io | thirdweb](https://youtu.be/x3eRXeMB-4k?t=4126)

<br>

> In this function we will use **Memo** , memo is kind of like a **useEffect** but also has some caching (cache) build into it.

```javascript
const nftModule = useMemo(() => {
  //
})
```

### Memo functions 🌞

> Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs are supplied again.

<br>

> (Or **"memoised function"**) A function that remembers which arguments it has been called with and the result returned and, if called with the same arguments again, returns the result from its memory rather than recalculating it. Memo functions were invented by Professor Donald Michie of Edinburgh University.s

<br>

## Lets continue

##### In the tutorial he didnt explain how to get the api key from infura, so go there and create an app like you did with the alchemy one, once the app is done you will have api's to use, but here below we will be using the <u>alchemy one</u>.

<br>

- the dependency is going to be the provider, so if the provider **dont exist** return it, otherwise e are going to create a thirdweb sdk: **new ThirdwebSDK**, to get our signer **provider.getSigner()**, and we are going to use our API key: **h ttps://eth-rinkeby...**, and than we are going to return the NFT MODULE: **sdk.getNFTModule(collectionId)**

<br>

```javascript
const nftModule = useMemo(() => {
  if (!provider) return

  const sdk = new ThirdwebSDK(
    provider.getSigner(),
    'https://eth-rinkeby.alchemyapi.io/v2/oneD5PzlO3p18PfmfbguZhfsDWCUvhI2'
  )
  return sdk.getNFTModule(collectionId)
}, [provider])
```

<br>
<br>

#### Now lets get another function that gets all the nft's inside a collection

- the dependency is going to be this **[nftModule]**, so whenever a nftModule is loaded from here **const nftModule** (the function above), this is **useEffect** will run, but if the **(!nftModule)** dont exist then we are going to return it, but if does exist we are going the **IIFE (Immediately Invoked Function Expression)** that is going to call itself immediately and when it happens, we will be getting the nfts, this will update the nft's variable here: **setNfts(nfts)**

<br>

```javascript
useEffect(() => {
  if (!nftModule) return
  ;(async () => {
    const nfts = await nftModule.getAll()

    setNfts(nfts)
  })()
}, [nftModule])
```

<br>

## Marketplace

<br>

#### Now we are going to get access to the marketplace module

- Like you see it here in the beginning of the gif

[<img src="./z_img-read/states-to-get-access-thecollection.gif"/>]()

<br>

```javascript
const marketPlaceModule = useMemo(() => {
  if (!provider) return

  const sdk = new ThirdwebSDK(
    provider.getSigner(),
    'https://rinkeby.infura.io/v3/a464b9152d8c466c8a94a514fce8e837'
  )
  return sdk.getMarketplaceModule('0xCdA1334a27C272c7cFF02bc2CC1563b60e540402')
}, [provider])
```

<br>

[<img src="./z_img-read/opensea-marketplace-id.gif"/>]()
