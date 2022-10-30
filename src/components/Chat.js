import { HashtagIcon, GiftIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import ava from '../img/ava.jpg'



export const Chat = () => {
   return (
      <div className='flex flex-col h-screen justify-between'>
         <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
            <div className="flex items-center space-x-1">
               <HashtagIcon className="h-6 text-[#72767d]" />
               <h4 className="text-white font-semibold">Welcome</h4>
            </div>
            <div className="flex space-x-3">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
               </svg>
               <div className="flex bg-[#202225] text-xs p-1 rounded-md">
                  <input
                     type="text"
                     placeholder="Search"
                     className="bg-[#202225] focus:outline-none text-white pl-1 placeholder-[#72767d]"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-[#72767d] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
               </svg>
            </div>
         </header>
         <main className='flex-grow static overflow-y-scroll scrollbar-hide font-bold text-white'>



            <div className="flex items-center absolute bottom-[4em] p-1 pl-5 my-5 mr-2 hover:bg-[#32353B] group">
               <img
                  src={ava}
                  alt=""
                  className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"
               />
               <div className="flex flex-col">
                  <h4 className="flex items-center space-x-2 font-medium">
                     <span className="hover:underline text-white text-sm cursor-pointer">
                        test
                     </span>
                     <span className="text-[#72767d] text-xs">
                        12:11
                     </span>
                  </h4>
                  <p className="text-sm text-[#dcddde]">message</p>
               </div>
               <div
                  className=" hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245] hover:text-white cursor-pointer"
               >
                  <TrashIcon className="h-5 hidden group-hover:inline" />
               </div>

            </div>



         </main>
         <div className='flex items-center p-2.5 bg-[#40444b] mx-5 mb-3 rounded lg justify-between'>
            <PlusCircleIcon className="icon mr-4" />
            <form className="flex-grow">
               <input
                  type="text"
                  placeholder='Message #welcome'
                  className="bg-transparent focus:outline-none text-[#dcddde] w-full placeholder-[#72767d] text-sm"
               />
               <button hidden type="submit">
                  Send
               </button>
            </form>
            <GiftIcon className="icon mr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
            </svg>
         </div>

      </div>
   );
}






