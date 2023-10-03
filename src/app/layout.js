"use client"
import AuthProvider from '@/providers/AuthProvider'
import './globals.css'
import { usePathname, useRouter } from 'next/navigation'
import { Poppins } from 'next/font/google'
import { LeftBar } from '@/components/leftBar/LeftBar'
import { RightBar } from '@/components/rightBar/RightBar'
import { FooterPlayer } from '@/components/footerPlayer/FooterPlayer'
import { UiContext, UiProvider } from '@/providers/UiContext/MainUi'
import { useContext, useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable:'--font-roboto',
  weight: ['300','400','500','600','700','800','900'],
})

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const path = usePathname()
    return (
    <html lang="en">
        <body className={poppins.className} >
          {path.includes("dashboard") ?
           <AuthProvider>
              {children}
           </AuthProvider>
            :
            <AuthProvider>
            <UiProvider>
            <div className="h-screen flex flex-col">
                <div className="w-screen h-5/6 grid grid-cols-11 grid-rows-1 gap-2 p-2">
                <LeftBar />
                  {children }
                  <RightBar />   
              </div>
              <div className="h-1/6 flex">
                <FooterPlayer />
              </div>
              </div>
              </UiProvider>
          </AuthProvider>
          }
      </body> 
    </html>
  )

}