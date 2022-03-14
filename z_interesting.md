# 🍨

### Create the <u>Purchase.js</u>

- Inside the **components/nft/** , create the **Purchase.js**

<br>

##### Import the <u>Purchase.js</u> inside the <u>[nftId].js</u> ,so that we can see what we will do:

- Pass the props, so that we can use them inside the **Purchase.js**

```javascript
import Purchase from '../../components/nft/Purchase'

/*






*/
return (
  <div>
    <Header />
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.topContent}>
          <div className={style.nftImgContainer}>
            <NFTImage selectedNft={selectedNft} />
          </div>
          <div className={style.detailsContainer}>
            <GeneralDetails selectedNft={selectedNft} />
            👍 <Purchase
              isListed={router.query.isListed}
              selectedNft={selectedNft}
              listings={listings}
              marketPlaceModule={marketPlaceModule}
            />
          </div>
        </div>
        <ItemActivity />
      </div>
    </div>
  </div>
)
```

<br>

#### Now Import the following

```javascript
import { useEffect, useState } from 'react'

import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast' //for notifications

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,

  //py-2  is padding: https://tailwindcss.com/docs/padding
  //border-radius  rounded-lg
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}
```

<br>

#### Use the props

- Use the props coming from the **[nftId].js**

<br>

##### To not confuse things, lets start with this:

```javascript
const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      purchase
    </div>
  )
}

export default MakeOffer
```

<br>
<br>

### The states

```javascript
const [selectedMarketNft, setSelectedMarketNft] = useState()
const [enableButton, setEnableButton] = useState(false)
```

<br>

#### The useEffect and other functions

- here we will handle the access to the items that are listed and the ones that aren't listed, once we got that, we will create the function related to the notification **(after succesfully purchasing an nft)**, then we will create the payment function and the **calling(**) of the **confirmPurchase**

<br>

```javascript
//
//
const [selectedMarketNft, setSelectedMarketNft] = useState()
const [enableButton, setEnableButton] = useState(false)

/*



*/
useEffect(() => {
  if (!listings || isListed === 'false') return
  ;(async () => {
    // 2 then set that to the selected market nft
    setSelectedMarketNft(
      //1 look for the marketnft and if the market nft matches the selected nft, if it does...
      listings.find((marketNft) => marketNft.asset?.id === selectedNft.id)
    )
  })()
}, [selectedNft, listings, isListed])
/*





*/
useEffect(() => {
  //3 then if none of the selectedMarketNft are set , finish it/return
  if (!selectedMarketNft || !selectedNft) return
  //4 it will be enabled if there is nothing selected
  setEnableButton(true)
  //
  //5 then we are going to track the nft states
}, [selectedMarketNft, selectedNft])
/*





*/
const confirmPurchase = (toastHandler = toast) =>
  toastHandler.success(`Purchase successful!`, {
    //6 We will have a purchase NOTIFICATION 🔥
    style: {
      background: '#04111d',
      color: '#fff',
    },
  })
/*


                  here below:
                THE BUY FUNCTION


*/
const buyItem = async (
  //
  //7
  listingId = selectedMarketNft.id,
  //quantity by default will be 1, because you dont buy in pairs
  quantityDesired = 1,
  module = marketPlaceModule
  //
) => {
  console.log(listingId, quantityDesired, module, 'david')

  await module
    //8 here we are using 3web buyout direct listings method
    //that will allows you to easily buy an nft
    .buyoutDirectListing({
      listingId: listingId,
      quantityDesired: quantityDesired,
    })
    //9
    .catch((error) => console.error(error))
  //10 call the toast function for the notification
  confirmPurchase()
}
```

<br>

<br>

#### Now the frontend

```javascript
return (
  <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
    <Toaster position="bottom-left" reverseOrder={false} />
    {isListed === 'true' ? (
      <>
        <div
          onClick={() => {
            enableButton ? buyItem(selectedMarketNft.id, 1) : null
          }}
          className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
        >
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText}>Buy Now</div>
        </div>
        <div
          className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
        >
          <HiTag className={style.buttonIcon} />
          <div className={style.buttonText}>Make Offer</div>
        </div>
      </>
    ) : (
      <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
        <IoMdWallet className={style.buttonIcon} />
        <div className={style.buttonText}>List Item</div>
      </div>
    )}
  </div>
)
```

<br>
<br>

[<img src="./z_img-read/result-purchase-succesful.gif"/>]()

<br>

# 🌈

## Lets think about: ... what is making the button work?:

- we will **ignore** the function related to the notification, I will just focus on the payment

<br>
<br>

```javascript
//
//
// The logic behind the purchase function
//
//3 args:
//listingId = selectedMarketNft.id,
//quantityDesired = 1,
//module = marketPlaceModule
//
const buyItem = async (
  listingId = selectedMarketNft.id,
  quantityDesired = 1,
  module = marketPlaceModule
) => {
 🔥
  await module
    .buyoutDirectListing({
      listingId: listingId,
      quantityDesired: quantityDesired,
    })
    .catch((error) => console.error(error))

  confirmPurchase()
}

//
//
//      THE BUTTON
//
;<div
  onClick={() => {
    enableButton ? buyItem(selectedMarketNft.id, 1) : null
  }}
  className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
>
  <IoMdWallet className={style.buttonIcon} />
  <div className={style.buttonText}>Buy Now</div>
</div>
```
