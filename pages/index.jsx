import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import Header from '../components/Header'
import Hero from '../components/Hero'

//
//
const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}
//
//

const Home = () => {
  //
  //
  const { address, connectWallet } = useWeb3()

  //
  useEffect(() => {
    // 1 If there is no address just return and get out
    if (!address)
      return //
      // 2 if there is, then you will do the following:
    ;(async () => {
      //
      // 3 inside of the async function, we create a user DOC, we will give it the wallet address
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }
      //
      // 4 then we tell SANITY, go ahead and create the user if "the user dont exist"
      const result = await client.createIfNotExists(userDoc)

      // 5 the we call the function right away
    })()
    //
    //
  }, [address])
  //
  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          {/* button  ✋*/}
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          {/* ✋  */}
          <div className={style.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
