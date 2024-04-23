import React from "react";
import { useNavigate } from "react-router-dom";

const BlogView = () => {
    const navigate = useNavigate();
  function goToBlog() {
    navigate("/Blog");
  }
  return (
    <>
      <div class="bg-white overflow-hidden w-full pt-16 px-28">
        <div class="lg:flex justify-center">
          <div class="md:shrink-0">
            <img
              class="w-full object-cover md:h-[460px] md:w-full"
              src="https://i.imgur.com/i6llaqn.png"
              alt=""
            />
          </div>
          <div class=" px-8 py-3 md:w-[648px] md:h-[405px]">
            <p class="w-full text-black text-xl font-bold  mb-14">
              How to engage employees in performance management through
              intrinsic motivation
            </p>
            <div class="uppercase tracking-wide text-sm font-semibold flex justify-between  mb-8">
              <p class="text-black text-sm font-bold">January 19, 2023</p>
              <p class="text-[#434141] text-xs font-normal">5 min read</p>
              <button>
                <svg
                  class="pb-2"
                  width="41"
                  height="44"
                  viewBox="0 0 41 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="&#240;&#159;&#166;&#134; icon &#34;Alternate Share&#34;">
                    <path
                      id="Vector"
                      d="M32.1222 27.0898C30.0591 27.0898 28.1629 27.7518 26.666 28.8587L17.3135 23.4362C17.5905 22.274 17.5905 21.0697 17.3135 19.9075L26.666 14.4849C28.1629 15.592 30.0591 16.2539 32.1222 16.2539C36.9605 16.2539 40.8828 12.6153 40.8828 8.12695C40.8828 3.63859 36.9605 0 32.1222 0C27.2839 0 23.3616 3.63859 23.3616 8.12695C23.3616 8.73292 23.4337 9.32314 23.5693 9.89126L14.2168 15.3138C12.7199 14.2068 10.8237 13.5449 8.7606 13.5449C3.92229 13.5449 0 17.1835 0 21.6719C0 26.1602 3.92229 29.7988 8.7606 29.7988C10.8237 29.7988 12.7199 29.1369 14.2168 28.0299L23.5693 33.4525C23.4311 34.0318 23.3614 34.6234 23.3616 35.2168C23.3616 39.7052 27.2839 43.3438 32.1222 43.3438C36.9605 43.3438 40.8828 39.7052 40.8828 35.2168C40.8828 30.7284 36.9605 27.0898 32.1222 27.0898Z"
                      fill="black"
                      fill-opacity="0.65"
                    />
                  </g>
                </svg>
              </button>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex text-center justify-center">
                <img
                  className=" h-7 w-7"
                  src="https://i.imgur.com/8pudP1n.png"
                  alt="image"
                />
                <p class=" ml-4 text-black text-opacity-30 font-bold text-base">
                  By Paulo
                </p>
              </div>

              <button className=" w-[90px] h-6 rounded-[20px] border border-stone-300">
                <p className="text-black text-xs font-semibold text-center  p-1">
                  {" "}
                  <span className="font-bold">+</span> Support
                </p>
              </button>
            </div>

            <div class="w-[410px] md:w-full">
              <p className="text-base mt-7">
                How is performance management without compensation possible ?
                Learn additional ways that employees can be recognized and
                rewarded.
              </p>
            </div>

            {/* <p class="w-[283px] mt-4 text-[#003D4D] text-[15px] font-normal">
                        How is performance management without compensation possible ?
                        Learn additional ways that employees can be recognized and
                        rewarded.
                    </p>
                    <div class="flex justify-between mt-6">
                        <button class="w-[179px] h-16 bg-white rounded-[300px] shadow-xl border border-slate-200 pl-12">
                            <p class="w-[79px] h-9 text-[#003D4D] text-[27px] font-bol">
                                READ
                            </p>
                        </button>
                        <p class="mt-8">By Paulo</p>
                    </div> */}
          </div>
        </div>

        <div class=" pt-10 text-justify">
          <p className="pb-8">
            {" "}
            fermentum libero. Integer dapibus, mauris vitae luctus laoreet,
            mauris risus bibendum lacus, ac ullamcorper libero urna vel mauris.
            Mauris sed eleifend velit. Nulla non ligula consectetur, tempus sem
            et, rutrum metus. Donec eu tellus vestibulum, malesuada urna ac,
            fermentum quam. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
          <p className="pb-8">
            Sed in tincidunt mi, id euismod nibh. Aenean ac lacinia enim. Fusce
            in mi varius, vulputate ipsum at, tincidunt risus. Morbi eu odio nec
            nisl ultrices accumsan. Curabitur at libero dapibus, ullamcorper
            elit vitae, pulvinar massa. Donec rhoncus ipsum eget pulvinar
            efficitur. Vestibulum rutrum leo ac mi consectetur tincidunt.
            Vestibulum sit amet eros ultricies, viverra nunc sed, facilisis leo.
          </p>
          <p className="pb-8">
            Nam a purus lectus. Proin vel pulvinar purus. Aliquam dignissim
            lectus et odio pulvinar, at faucibus tellus feugiat. Integer luctus
            diam vel lacus placerat pulvinar. Suspendisse potenti. Aliquam
            semper sem eu volutpat semper. Mauris et risus et metus porta
            dapibus sed a leo. Morbi ut consectetur leo. Quisque vel lectus
            ante. Nulla tristique placerat ipsum, eget posuere erat feugiat sit
            amet. Sed a augue gravida, lacinia arcu eu, tincidunt erat. Donec
            vulputate semper gravida. Morbi non tristique elit. In vulputate
            mollis diam vitae tincidunt. Fusce sit amet ullamcorper ipsum.
          </p>
          <p className="pb-8">
            Phasellus ultricies, metus ac gravida hendrerit, erat lectus
            faucibus ante, sit amet condimentum ipsum metus vel nunc. Nullam id
            semper nulla. Fusce malesuada urna eget odio rhoncus lacinia.
            Pellentesque in ipsum diam. Nulla facilisi. Donec lacinia commodo
            ante, vitae lobortis sem consectetur vitae. Morbi sagittis nibh a
            justo congue, id commodo dui dapibus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin id augue nec urna hendrerit interdum. Sed in mauris at dui
            posuere aliquam.
          </p>
        </div>
      </div>
      <div class="flex justify-center p-8">
      <button onClick={goToBlog} class="flex items-center pl-6 w-[271px] h-16 bg-white rounded-[300px] shadow-inner border border-cyan-200">
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="&#240;&#159;&#166;&#134; icon &#34;Arrow Circle Left&#34;">
            <path
              id="Vector"
              d="M17.5 33.2495C7.83266 33.2495 0 25.8086 0 16.6247C0 7.44091 7.83266 0 17.5 0C27.1673 0 35 7.44091 35 16.6247C35 25.8086 27.1673 33.2495 17.5 33.2495ZM19.5393 23.6232L14.2117 18.7699H27.0968C28.0353 18.7699 28.7903 18.0526 28.7903 17.161V16.0885C28.7903 15.1969 28.0353 14.4796 27.0968 14.4796H14.2117L19.5393 9.62626C20.2238 9.00283 20.2379 7.96378 19.5675 7.32695L18.7913 6.59627C18.128 5.96613 17.0554 5.96613 16.3992 6.59627L7.03528 15.4851C6.37198 16.1153 6.37198 17.1342 7.03528 17.7576L16.3992 26.6532C17.0625 27.2833 18.1351 27.2833 18.7913 26.6532L19.5675 25.9225C20.2379 25.2857 20.2238 24.2466 19.5393 23.6232Z"
              fill="#003D4D"
            />
          </g>
        </svg>

        <p class=" pl-2 text-[#003D4D] text-[27px] font-bold">Back to blogs</p>
      </button>
      </div>
    </>
  );
};

export default BlogView;
