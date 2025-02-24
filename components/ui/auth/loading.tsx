import Image from "next/image";

import React from 'react'

function Loading() {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
      <Image
        src="/logo.svg"
        alt="loading"
        width={50}
        height={50}
        className="animate-pulse duration-700"
      />
    </div>
  )
}

export default Loading
