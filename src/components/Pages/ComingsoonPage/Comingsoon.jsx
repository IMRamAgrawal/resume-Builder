import React from 'react'

const Comingsoon = () => {
    return (
        <div className=' bg-gradient-to-b from-sky-300 to-white' >
            {/* <img src="https://i.imgur.com/oBU8OTU.png" alt="" /> */}
            <div className='flex flex-row justify-center items-center h-auto'>
                <div className='m-14 flex flex-col gap-3 justify-items-center'>
                    <h1 className='flex text-left  font-medium text-6xl pb-10'>Coming Soon</h1>
                    <p className='flex  text-lg mr-7 mb-5 w-fit'>Get ready to experience the most anticipated <br /> feature since sliced bread, coming soon to ZealYug!</p>
                    <p className='flex mb-6 text-lg'>Get Notified <span className='h-5 w-5'><img src="https://i.imgur.com/FxUmqkA.png" alt="" /></span> When We Launch</p>
                    {/* <hr /> */}
                    {/* <div> */}
                    <div className=" flex w-fit bg-white rounded-[28.50px] border  border-black backdrop-blur-[44px] p-1 justify-between">

                        <div className='flex justify-between '>
                            <input type="text" class=" w-auto bg-gray-50  text-gray-900 text-sm rounded-full block  p-2.5  dark:placeholder-gray-400 dark:text-black" placeholder="Please Enter your Email" />
                        </div>

                        {/* <div className='flex justify-center'> */}
                        <button className=" w-40 h-14 bg-gradient-to-b from-pink-400 to-blue-200 rounded-full shadow backdrop-blur-[45px] flex items-center justify-center max-[350px]:w-24 max-[350px]:h-10 ">
                            Notify Me
                        </button>
                        {/* </div> */}

                    </div>
                    {/* </div> */}
                    

                </div>


                <div className='flex m-5 pt-10 max-[768px]:hidden'>
                    <img src="https://i.imgur.com/q95Sh4T.png" alt="" />
                </div>

            </div>

            <img src="https://i.imgur.com/DTC3qMy.png" alt="" />


        </div>
    )
}

export default Comingsoon