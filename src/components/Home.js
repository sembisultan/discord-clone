import React from 'react'
import ava from '../img/ava.jpg'
import discordImg from '../img/20-200938_discord-png.webp';
import { Chat } from './Chat'
import { ChevronDownIcon, PlusIcon, HashtagIcon, MicrophoneIcon, CogIcon, PhoneIcon } from '@heroicons/react/24/solid'







export const Home = () => {
   return (
      <div className="flex h-screen">
         <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
            <div className="server-default hover:bg-[#5865f2]">
               <img src={discordImg} alt="" className="h-5" />
            </div>
            <hr className=" border-gray-700 border w-8 mx-auto" />
            <img src={ava} alt="" className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' />
            <img src={ava} alt="" className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' />
            <img src={ava} alt="" className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' />
            <img src={ava} alt="" className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' />

            <div className='server-default hover:bg-[#3ba55c] group'>
               <PlusIcon className="text-[#3ba55c] h-7 group-hover:text-white" />
            </div>
            <div className='server-default hover:bg-[#3ba55c] group'>
               <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3ba55c] h-7 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
         </div>

         <div className='bg-[#2f3136] flex flex-col min-w-max'>
            <h2 className='flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer'>
               Game Center
               <ChevronDownIcon className='h-5 ml-2' />
            </h2>

            <div className="text-[#8e9297] flex-grow overflow-y-scrol scrollbar-hide">
               <div className="flex items-center p-2 mb-2">
                  <ChevronDownIcon className="h-3  mr-2" />
                  <h4 className="font-semibold ">Doorbell</h4>
               </div>

               <div
                  className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
               >
                  <HashtagIcon className="h-5 mr-2" />
                  <p> Welcome</p>
                  <PlusIcon
                     className="h-6 ml-auto cursor-pointer hover:text-white"
                  />
               </div>

               <div className="flex items-center p-2 mb-2">
                  <ChevronDownIcon className="h-3  mr-2" />
                  <h4 className="font-semibold ">INFO</h4>
               </div>

               <div
                  className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
               >
                  <HashtagIcon className="h-5 mr-2" />
                  <p> Rules</p>
                  <PlusIcon
                     className="h-6 ml-auto cursor-pointer hover:text-white"
                  />
               </div>
               <div
                  className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
               >
                  <HashtagIcon className="h-5 mr-2" />
                  <p> Hello-goodbye</p>
                  <PlusIcon
                     className="h-6 ml-auto cursor-pointer hover:text-white"
                  />
               </div>

            </div>


            <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
               <div className="flex items-center space-x-1">
                  <img
                     src={ava}
                     alt=""
                     className="h-10 rounded-full"
                  />
                  <h4 className="text-white text-xs font-medium">
                     LO4D.test
                     <span className="text-[#b9bbbe] block">
                        #3212
                     </span>
                  </h4>
               </div>

               <div className="text-gray-400 flex items-center">
                  <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                     <MicrophoneIcon className="h-5 icon " />
                  </div>
                  <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                     <PhoneIcon className="h-5 icon" />
                  </div>
                  <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                     <CogIcon className="h-5 icon" />
                  </div>
               </div>


            </div>

         </div>

         <div className="bg-[#36393f] flex-grow">
            <Chat />
         </div>
      </div >
   )
}


