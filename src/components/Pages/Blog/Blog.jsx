import React from "react";
import { useNavigate } from "react-router-dom";
import Popupblog from "./Popupblog";

const Blog = () => {
const navigate = useNavigate();
  function goToBlogView() {
    navigate("/BlogView");
  }

  return (
    <div>
      <div class="max-w-2xl bg-white overflow-hidden md:max-w-full p-4">
        <div class="md:flex justify-evenly h-full">
          <div class="md:shrink-0">
            <img
              class="h-72 w-full object-cover"
              src="https://i.imgur.com/h4UENMX.png"
              alt=""
            />
          </div>
          <div class="p-8 pt-14 md-w-full">
            <p class="text-black text-[38px] font-bold">
              See what could help you !
            </p>
            <p class="mt-2 mb-6 text-[#4FA5B2] text-[32px] font-bold">
              Read, ponder and stay <br /> updated with us..
            </p>
          <Popupblog/>
            
          </div>
        </div>
      </div>
      <div class="bg-white overflow-hidden w-full pt-12">
        <div class="md:flex justify-center">
          <div class="md:shrink-0">
            <img
              class="w-full object-cover md:h-[360px] md:w-full"
              src="https://i.imgur.com/i6llaqn.png"
              alt=""
            />
          </div>
          <div class=" px-8 py-3 md:w-[648px] md:h-[405px]">
            <div class="uppercase tracking-wide text-sm font-semibold flex justify-between">
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
            <p class="w-full text-black text-xl font-bold">
              How to engage employees in performance management through
              intrinsic motivation
            </p>
            <p class="w-full mt-6 text-[#003D4D] text-[15px] font-normal">
              How is performance management without compensation possible ?
              Learn additional ways that employees can be recognized and
              rewarded.
            </p>
            <div class="flex justify-between mt-6">
              <button onClick={goToBlogView} class="w-[179px] h-16 bg-white rounded-[300px] shadow-xl border border-slate-200 pl-12">
                <p class="w-[79px] h-9 text-[#003D4D] text-[27px] font-bol">
                  READ
                </p>
              </button>
              <p class="mt-8">By Paulo</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white overflow-hidden w-full pt-12">
        <div class="md:flex justify-center">
          <div class="md:shrink-0">
            <img
              class="w-full object-cover md:h-[360px] md:w-full"
              src="https://i.imgur.com/i6llaqn.png"
              alt=""
            />
          </div>
          <div class=" px-8 py-3 md:w-[648px] md:h-[405px]">
            <div class="uppercase tracking-wide text-sm font-semibold flex justify-between">
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
            <p class="w-full text-black text-xl font-bold">
              How to engage employees in performance management through
              intrinsic motivation
            </p>
            <p class="w-full mt-6 text-[#003D4D] text-[15px] font-normal">
              How is performance management without compensation possible ?
              Learn additional ways that employees can be recognized and
              rewarded.
            </p>
            <div class="flex justify-between mt-6">
              <button onClick={goToBlogView} class="w-[179px] h-16 bg-white rounded-[300px] shadow-xl border border-slate-200 pl-12">
                <p class="w-[79px] h-9 text-[#003D4D] text-[27px] font-bol">
                  READ
                </p>
              </button>
              <p class="mt-8">By Paulo</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white overflow-hidden w-full pt-12">
        <div class="md:flex justify-center">
          <div class="md:shrink-0">
            <img
              class="w-full object-cover md:h-[360px] md:w-full"
              src="https://i.imgur.com/i6llaqn.png"
              alt=""
            />
          </div>
          <div class=" px-8 py-3 md:w-[648px] md:h-[405px]">
            <div class="uppercase tracking-wide text-sm font-semibold flex justify-between">
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
            <p class="w-full text-black text-xl font-bold">
              How to engage employees in performance management through
              intrinsic motivation
            </p>
            <p class="w-full mt-6 text-[#003D4D] text-[15px] font-normal">
              How is performance management without compensation possible ?
              Learn additional ways that employees can be recognized and
              rewarded.
            </p>
            <div class="flex justify-between mt-6">
              <button onClick={goToBlogView} class="w-[179px] h-16 bg-white rounded-[300px] shadow-xl border border-slate-200 pl-12">
                <p class="w-[79px] h-9 text-[#003D4D] text-[27px] font-bol">
                  READ
                </p>
              </button>
              <p class="mt-8">By Paulo</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white overflow-hidden w-full pt-12">
        <div class="md:flex justify-center">
          <div class="md:shrink-0">
            <img
              class="w-full object-cover md:h-[360px] md:w-full"
              src="https://i.imgur.com/i6llaqn.png"
              alt=""
            />
          </div>
          <div class=" px-8 py-3 md:w-[648px] md:h-[405px]">
            <div class="uppercase tracking-wide text-sm font-semibold flex justify-between">
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
            <p class="w-full text-black text-xl font-bold">
              How to engage employees in performance management through
              intrinsic motivation
            </p>
            <p class="w-full mt-6 text-[#003D4D] text-[15px] font-normal">
              How is performance management without compensation possible ?
              Learn additional ways that employees can be recognized and
              rewarded.
            </p>
            <div class="flex justify-between mt-6">
              <button onClick={goToBlogView} class="w-[179px] h-16 bg-white rounded-[300px] shadow-xl border border-slate-200 pl-12">
                <p class="w-[79px] h-9 text-[#003D4D] text-[27px] font-bol">
                  READ
                </p>
              </button>
              <p class="mt-8">By Paulo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
