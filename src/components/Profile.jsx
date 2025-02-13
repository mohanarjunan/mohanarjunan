import Image from 'next/image'
import React from 'react'
import css from "@/utils/scss/modules/Profile.module.scss"

export default function Profile() {
  return (
    <>
      <div className={`absolute w-[350px] h-[350px] border-[10px] border-primaryLight rounded-full left-1/2 -translate-x-1/2 bottom-0 ${css.outer}`}>
      </div>
    </>
  )
}
