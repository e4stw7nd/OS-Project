import React from 'react'

export default function MicButton({recording,clickHandler}) {
  const running="gradient-to-r from-green-500 to-green-100";
  const stopped="gradient-to-r from-red-700 to-red-400";

  return (
    <div>
      <button className={`bg-${recording?running:stopped} flex justify-around rounded-full m-1 h-14 w-14 md:h-20 md:w-20 md:pt-10 pt-7 border-[1px] border-black`} onClick={clickHandler}>
      <i class="fa-solid fa-microphone fa-2xl"></i>
      </button>
    </div>
  )
}
