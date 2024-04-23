import React from 'react'

const Notfound = () => {
    return (
        <div>

            <div className='h-[75vh] flex justify-center items-center'>
                <div>
                    <img src="https://i.imgur.com/7wDmMkr.png" alt="image" />
                </div>


                <div>

                    <div>
                        <img src="https://i.imgur.com/zXBCU99.png" alt="image" />
                    </div>

                    <div>

                        <h1 className='flex text-center justify-center font-bold text-4xl pb-4'>Something is Missing</h1>
                        <p className=' flex justify-center text-[17px]'>This page is missing or you <br /> entered the link incorrectly.</p>

                        <div className='flex  justify-center pt-10 '>
                            <button className=" flex flex-row center mr-4 rounded-lg bg-[#003d4d] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " data-ripple-light="true">
                                <div className='bg-[#003d4d] pr-2 text-base'>

                                    <svg className='flex items-center' width="" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="back arrow" d="M0 10.6098C0 10.8799 0.0906366 11.1217 0.26058 11.3208L7.88542 20.9209C8.0553 21.12 8.23662 21.2195 8.44056 21.2195C8.87105 21.2195 9.19962 20.8213 9.19962 20.2808C9.19962 20.0248 9.12032 19.7688 8.99569 19.5982L5.59681 15.3031L2.25459 11.4062L4.88305 11.5627H20.2913C20.7218 11.5627 21.039 11.1645 21.039 10.6098C21.039 10.055 20.7218 9.65686 20.2913 9.65686H4.88305L2.25459 9.81327L5.59681 5.91642L8.99569 1.62133C9.13167 1.43644 9.19962 1.19466 9.19962 0.938666C9.19962 0.398221 8.87105 0 8.44056 0C8.23662 0 8.04403 0.0995561 7.82873 0.369777L0.26058 9.89868C0.0906366 10.0978 0 10.3395 0 10.6098Z" fill="white" />
                                    </svg>

                                </div>
                                <div className='text-base'> Button</div>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            <div className='flex justify-center pt-12'>
                <span>Copyright ©  2023 ZealYug </span>
            </div>

        </div>
    )
}

export default Notfound