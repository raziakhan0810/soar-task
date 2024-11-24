import businessFinance from '@/app/assets/icons/dashboard/business_finance_money.png';
import payPal from '@/app/assets/icons/dashboard/paypal-payment-pay.png';
import dollarCircle from '@/app/assets/icons/dashboard/circle-dollar.png';
import user1 from '@/app/assets/icons/dashboard/user-image1.png';
import user2 from '@/app/assets/icons/dashboard/user-image2.png';
import user3 from '@/app/assets/icons/dashboard/user-image3.png';
import user4 from '@/app/assets/icons/dashboard/user-image4.png';
import user5 from '@/app/assets/icons/dashboard/user-image5.png';

export const cardDark = {
    balance:'$5,400',
    name:'Eddy Cusuma',
    valid:'12/22',
    cardNumber:'3778 **** **** 1234',
    dark:true,
}
export const cardWhite = {
    balance:'$5,400',
    name:'Eddy Cusuma',
    valid:'12/22',
    cardNumber:'3778 **** **** 1234',
    dark:false,
}

export const trans =[
   {
    hText:'Deposit from my Card',
    date:'28 January 2021',
    money:-850,
    icon:businessFinance
   },
   {
    hText:'Deposit Paypal',
    date:'25 January 2021',
    money:4550,
    icon:payPal
   },
   {
    hText:'Jemi Wilson',
    date:'21 January 2021',
    money:5550,
    icon:dollarCircle
   },
]
export const userImage =[
    {
        image: user1,
        name: 'Livia Bator',
        position: 'CEO',
      },
      {
        image: user2,
        name: 'Randy Press',
        position: 'Director',
      },
      {
        image: user3,
        name: 'Workman',
        position: 'Designer',
      },
      {
        image: user4,
        name: 'Workman',
        position: 'Designer',
      },
      {
        image: user5,
        name: 'Workman',
        position: 'Designer',
      },
]