'use client'
import HomePage from './HomePage'
import 'tailwindcss/tailwind.css'
import React from 'react';
import Signing from './Signing';
import { LocationProvider } from '../../src/context';
export default function Home() {
  
   return (
    <LocationProvider>
    <main className='bg-white'>
    <HomePage />
    </main>
    </LocationProvider>
  )
}
