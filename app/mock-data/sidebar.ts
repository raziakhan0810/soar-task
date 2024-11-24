import home from '@/app/assets/icons/home.png'
import homeActive from '@/app/assets/icons/homeactive.png'
import transaction from '@/app/assets/icons/transfer.png'
import user from '@/app/assets/icons/user.png'
import investment from '@/app/assets/icons/investment.png'
import creditCard from '@/app/assets/icons/creditCard.png'
import Loan from "@/app/assets/icons/loan.png"
import Service from "@/app/assets/icons/service.png"
import preveliges from "@/app/assets/icons/econometrics.png"
import setting from "@/app/assets/icons/settings.png"
import settingActive from "@/app/assets/icons/settingActive.png"

export const sidebarItems = [
    { name: 'Dashboard', icon:home, activeIcon: homeActive, url: '/dashboard' },
    { name: 'Transaction', icon: transaction, activeIcon:transaction, url: '/transactions' },
    { name: 'Accounts', icon: user, activeIcon: user, url: '/accounts' },
    { name: 'Investment', icon: investment, activeIcon: investment, url: '/investment' },
    { name: 'Credit Cards', icon: creditCard, activeIcon: creditCard, url: '/credit-cards' },
    { name: 'Loan', icon: Loan, activeIcon: Loan, url: '/loan' },
    { name: 'Services', icon: Service, activeIcon: Service, url: '/services' },
    { name: 'My Privileges', icon: preveliges, activeIcon: preveliges, url: '/privileges' },
    { name: 'Settings', icon: setting, activeIcon: settingActive, url: '/settings' },
  ];