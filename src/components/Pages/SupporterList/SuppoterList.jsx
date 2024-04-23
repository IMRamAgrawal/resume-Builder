import React, { useState } from 'react';

const SuppoterList = () => {
  const [changeDivFlag, SetchangeDivFlag] = useState({
    Supporters: true,
    Supporting: false,
  });

  function SupportersHandler() {
    SetchangeDivFlag({
      Supporters: true,
      Supporting: false,
    })
  }

  function SupportingHandler() {
    SetchangeDivFlag({
      Supporters: false,
      Supporting: true,
    })
  }

  return (
    <div className="p-7 mt-5">
      <div className='flex justify-center gap-2'>
        {/* <div className="w-[230px] h-[460px] bg-white p-5 space-y-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="flex gap-10">
                <div className="h-16 w-16 bg-[#d1d1d1] rounded-[40px] flex items-center justify-center"></div>
                <div className="h-16 w-16"><img src="Images/qr.png" alt="scanner" /></div>
              </div>
              <h3>User Name</h3>
              <p className='text-[#787878]'>Impact You Create</p>
          </div> */}

        <div className="w-[45rem] h-[90vh] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-y-auto">
          <div className="flex w-[100]">
            <div className=" bg-white w-full text-gray-500 text-xl font-semibold flex items-center justify-start p-4 ">
              <div className={` cursor-pointer p-3 text-lg px-8  ${changeDivFlag.Supporters ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={SupportersHandler}><span id="Supporters">Supporters</span></div>
              <div className={`cursor-pointer p-3 text-lg px-8  ${changeDivFlag.Supporting ? 'text-[#003d4d] border-b-4 border-b-[#003d4d]' : null}`} onClick={SupportingHandler}><span id="Job Applications">Supporting</span></div>
            </div>
          </div>





          <div className={`flex flex-col ${changeDivFlag.Supporters ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>

            <p className='text-[#4c919b] text-sm text-start pr-7 cursor-pointer pl-10'>Wow! You are now Supported by <span> 1820 </span> People</p>

            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="z" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Surveer Sing <br /> <span className="text-sm">Senior Technical Officer at ZealYug</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Support</button></div>

            </div>
            <hr />

            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Vikram Singhania<br /> <span className="text-sm">Student at Lovely University</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Support</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Kristy Shastri<br /> <span className="text-sm">Student at Guru Gobind Singh Indraprastha University</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Supporting</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Amisha Tiwari<br /> <span className="text-sm">CEO and Founder at Chaat Wala</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Supporting</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Support</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Support</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Support</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">Support</button></div>

            </div>
            <hr />


          </div>

          <div className={`flex flex-col ${changeDivFlag.Supporting ? 'visible scale-100 static z-50' : 'invisible absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0'}`}>

            <p className='text-[#4c919b] text-sm text-start pr-7 cursor-pointer pl-10'>Great Heart! You are now Supporting  <span>420 </span> People</p>


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Surveer Sing <br /> <span className="text-sm">Senior Technical Officer at ZealYug</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />

            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Vikram Singhania<br /> <span className="text-sm">Student at Lovely University</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Kristy Shastri<br /> <span className="text-sm">Student at Guru Gobind Singh Indraprastha University</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Amisha Tiwari<br /> <span className="text-sm">CEO and Founder at Chaat Wala</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


            <div className="flex gap-4 p-5 items-center justify-around">
              {/* justify-center items-center  */}
              {/* <div className=""> */}
              <div className=" flex items-center justify-center">
                <img className="rounded-full bg-[#d1d1d1] w-[40px] h-[40px]" src="" alt="#" />
                <h3 className="w-[300px] text-base ml-4">Diya Sharma<br /> <span className="text-sm">Front-End Developer at Google</span> </h3>
              </div>
              {/* </div> */}
              <div className=""><button className="border px-5 py-1 rounded-full hover:bg-[#57a7b320] bg-none text-xs shadow-md ">chat</button></div>

            </div>
            <hr />


          </div>
        </div>



        <div className="w-[250px] h-[90vh] flex-row  ml-2 ">
          <div className="justify-center h-[3rem]">
            <input type="text" className="p-2 pl-4 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] " placeholder="🔍 Search" />
          </div>


          <div
            className="bg-[#ffffff] rounded-[15px] w-[250px] h-[35vh] pt-6 relative"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <p className="text-[#000000] text-center text-sm"> Your Next Referral </p>

            <button button className="px1 py-1 rounded-full  text-xs  items-center  w-[120px] h-[40px] absolute bottom-6 right-4 text-[#ffffff]"
              style={{
                background:
                  "linear-gradient(98.81deg, rgba(0, 61, 77, 1.00) 0%,rgba(87, 167, 179, 1.00) 100%)",
                boxShadow:
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              }} >More Benefits</button> 

          </div>

          <div
            className="bg-[#ffffff] rounded-[15px] w-[250px] h-[35vh] pt-6 relative mt-6"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          >
             <img className="rounded-full bg-[#d1d1d1] w-[35px] h-[35px] absolute top-4 right-28 " src="" alt="" />

            <p className="text-[#000000] text-center text-sm pt-8"> Jobs Looking for You </p>

            <button button className="px1 py-1 rounded-full  text-xs  items-center  w-[120px] h-[40px] absolute bottom-6 right-4 text-[#ffffff]"
              style={{
                background:
                  "linear-gradient(98.81deg, rgba(0, 61, 77, 1.00) 0%,rgba(87, 167, 179, 1.00) 100%)",
                boxShadow:
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              }} >View More</button> 

          </div>


        </div>


      </div>
    </div>
  )
}

export default SuppoterList;