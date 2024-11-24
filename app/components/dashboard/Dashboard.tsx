"use client"
import React from 'react';
import CreditCard from '../cards/CreditCard';
import { cardDark, cardWhite } from '@/app/constants/cards.constant';
import TransCard from '../cards/TransCard';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import PayCard from '../cards/PayCard';
import LineChart from '../charts/LineChart';
import { userImage } from '@/app/constants/cards.constant';


const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
                <div className="">
                    <h6 className="font-semibold text-[#343C6A]">My Cards</h6>
                    <CreditCard
                        balance={cardDark?.balance}
                        dark={cardDark?.dark}
                        cardNumber={cardDark?.cardNumber}
                        cardholder={cardDark?.name}
                        validThru={cardDark?.valid}
                    />
                </div>
                <div className="">
                    <h6 className="font-semibold text-[#343C6A] flex md:justify-end justify-start">See All</h6>
                    <CreditCard
                        balance={cardWhite?.balance}
                        dark={cardWhite?.dark}
                        cardNumber={cardWhite?.cardNumber}
                        cardholder={cardWhite?.name}
                        validThru={cardWhite?.valid}
                    />
                </div>
                <div className="overflow-x-auto md:overflow-visible">
                    <h6 className="text-[#343C6A] font-semibold ">Recent Transactions</h6>
                    <TransCard />
                </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 my-6">

                <div className="col-span-12 md:col-span-8">
                    <h6 className="font-semibold text-[#343C6A] my-2">Weekly Activity</h6>
                    <div className='p-4 rounded-3xl bg-white md:min-h-[370px]'>
                        <BarChart />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                    <h6 className="font-semibold text-[#343C6A] my-2">Expense Statistics</h6>
                    <div className='p-4 rounded-3xl bg-white md:min-h-[370px]'>
                        <PieChart />
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 my-6">

                <div className="col-span-12 md:col-span-5">
                    <h6 className="font-semibold text-[#343C6A] my-2">Quickly Transfer</h6>
                    <div className='p-4 rounded-3xl bg-white '>
                       <PayCard
                         amount={400}
                         images={userImage}
                          onAmountChange={()=>console.log('e')}
                       />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7">
                    <h6 className="font-semibold text-[#343C6A] my-2">Balance History</h6>
                    <div className='p-4 rounded-3xl bg-white  '>
                    <LineChart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard