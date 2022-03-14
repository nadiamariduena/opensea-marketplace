import { useEffect, useState } from 'react'

import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
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


                purchase notification


*/
  const confirmPurchase = (toastHandler = toast) =>
    toastHandler.success(`Purchase successful!`, {
      style: {
        background: '#04111d',
        color: '#fff',
      },
    })
  /*


                  here below:
                THE BUY FUNCTION


*/
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
    // console.log(listingId, quantityDesired, module, 'rainbow')

    await module
      .buyoutDirectListing({
        listingId: listingId,
        quantityDesired: quantityDesired,
      })
      .catch((error) => console.error(error))

    confirmPurchase()
  }

  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="bottom-left" reverseOrder={false} />
      {/*  if listed, you will have this 2 buttons  */}
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
        //if they are not listed you will only have this button
        <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText}>List Item</div>
        </div>
      )}
    </div>
  )
}

export default MakeOffer
