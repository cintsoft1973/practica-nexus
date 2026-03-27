import React from 'react'
import Button from './Button';
type ProductCardProps = {
    title: string;
    description: string;
    image: string;
    price: number;

}
export default function ProductCard({ title, description, price, image }: ProductCardProps) {
    return (
        <div className='bg-white rounded-lg shadow-md rounded-xl p-4 overflow-hidden w-72 hover: shadow-lg transition-shadow duration-300 cursor-pointer'>
            <img src={image} alt={title} />
            <div className='p4 flex flex-col'>
                <h2 className='font-semibold text-lg text-gray-800'>{title}</h2>
                <p className='text-sm text-gray-500'>{description}</p>
                <div className='flex items-center justify-between items-centeer mt-2'>
                    <span className='text-lg font-bold text-blue-600'>{price}</span>
                    <Button onClick={() => alert('hola')}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )
}