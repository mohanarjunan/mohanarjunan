import { UnderDevelopment } from '@/components/system/UnderDevelopment'
import React from 'react'

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function ContactPage() {
  return (
    <>
      <UnderDevelopment releaseDate='01 Oct 2026' /> 
    </>
  )
}
