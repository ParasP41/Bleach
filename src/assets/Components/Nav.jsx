import React from 'react'
import { Navbar } from "flowbite-react";
export default function Nav() {
  return (
    <>
        <Navbar className="bg-[url('https://i.pinimg.com/736x/93/55/e5/9355e5ed3fcea4b307378b2efde663eb.jpg')] bg-cover rounded-none text-white" fluid rounded>
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">BLEACH</span>
      <Navbar.Toggle/>
      <Navbar.Collapse >
        <Navbar className='cursor-pointer bg-transparent text-[17px]' href="/">Gotei 13</Navbar>
        <Navbar className='cursor-pointer bg-transparent text-[17px]'  href="/">
        Lieutenant</Navbar>
        <Navbar className='cursor-pointer bg-transparent text-[17px]' href="/">Squad 0</Navbar>
        <Navbar className='cursor-pointer bg-transparent text-[17px]' href="/">Soul King</Navbar>
        <Navbar className='cursor-pointer bg-transparent text-[17px]' href="/">Soul King</Navbar>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}
