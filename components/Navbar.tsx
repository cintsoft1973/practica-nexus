import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="bg-white bordcer-b border-gray-200 shadow-sm">
            <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
                <div className='flex gap-6'>
                    <Link href="/inicio" className='text-xl font-bold text-gray-900'>Nextflix por OPQ</Link>
                </div>
                <div className='flex items-center gap-6 text-gray-600 font-medium'>
                    <Link href="/inicio" className='hover:text-blue-600 transition-colors duration-300'>Inicio</Link>
                    <Link href="/acerca" className='hover:text-blue-600 transition-colors duration-300'>Acerca de</Link>
                    <Link href="/series" className='hover:text-blue-600 transition-colors duration-300'>Series</Link>
                    <Link href="/reportes" className='hover:text-blue-600 transition-colors duration-300'>Reportes</Link>
                </div>
            </div>
        </nav>
    )
}