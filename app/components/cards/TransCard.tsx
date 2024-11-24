import { trans } from '@/app/constants/cards.constant'
import Image from 'next/image'
import React from 'react'

const TransCard = () => {
  return (
    <div className="max-w-md mx-auto mt-5 p-6 py-4 pb-[0.5rem] bg-white shadow-lg rounded-3xl">
      {trans?.length &&
        trans?.map((row, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                <Image
                  src={row?.icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-gray-800">{row?.hText}</h3>
                <p className="text-sm text-gray-500">{row.date}</p>
              </div>
            </div>

            <div
              className={`text-lg font-semibold ${row?.money >= 0 ? 'text-green-500' : 'text-red-500'}`}
            >
              {row.money >= 0 ? `+ $${row.money}` : `- $${Math.abs(row.money)}`}
            </div>
          </div>
        ))}
    </div>
  )
}

export default TransCard
