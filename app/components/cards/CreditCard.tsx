import BlackChipCard from '@/app/assets/icons/dashboard/black-chip-card.png'
import WhiteChipCard from '@/app/assets/icons/dashboard/white-chip-card.png'
import WhiteGroup from '@/app/assets/icons/dashboard/white-card-group.png'
import BlackGroup from '@/app/assets/icons/dashboard/black-card-group.png'
import Image from 'next/image';

const CreditCard = ({
  dark = true,
  balance,
  cardholder,
  validThru,
  cardNumber,
}: {
  dark?: boolean;
  balance: string;
  cardholder: string;
  validThru: string;
  cardNumber: string;
}) => {
  const cardIcon = dark ? WhiteChipCard : BlackChipCard;
  const groupIcon = dark ? WhiteGroup : BlackGroup;

  return (
    <div
      className={`max-w-sm mx-auto mt-5 p-6 rounded-3xl shadow-lg ${
        dark
          ? 'bg-gradient-to-br from-[#5B5A6F] to-[#000000]'
          : 'bg-gradient-to-br from-[#F5F5F5] to-[#FFFFFF]'
      }`}
    >

      <div className="flex justify-between items-center">
        
        <div className="text-white">
          <p className={`text-sm font-medium ${!dark? `text-[#718EBF]`: "text-[#FFFFFF]"}`}>Balance</p>
          <p className={`text-sm font-medium ${!dark? `text-[#343C6A]`: "text-[#FFFFFF]"}`}>{balance}</p>
        </div>
        <div className="text-white text-4xl">
          <Image src={cardIcon} alt="chip" width={50} height={50} />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="flex flex-col text-white">
          <p className={`text-sm font-medium ${!dark? `text-[#718EBF]`: "text-[#FFFFFF]"}`}>Cardholder</p>
          <p className={`text-sm font-medium ${!dark? `text-[#343C6A]`: "text-[#FFFFFF]"}`}>{cardholder}</p>
        </div>

        <div className="flex flex-col  text-white">
          <p className={`text-sm font-medium ${!dark? `text-[#718EBF]`: "text-[#FFFFFF]"}`}>Valid Thru</p>
          <p className={`text-sm font-medium ${!dark? `text-[#343C6A]`: "text-[#FFFFFF]"}`}>{validThru}</p>
        </div>
      </div>

      <div
        className={`mt-6 pt-2 flex justify-between items-center px-6 bordert-t-2 ${
          !dark
            ? 'border-gray'
            : ''
        } bg-gradient-to-b ml-[-1.6rem] mr-[-1.6rem]`}
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
          borderTop:`${dark?'':'1px solid'}`
        }}
      >
        
        <p className={`text-lg font-bold ${!dark? `text-[#343C6A]`: "text-[#FFFFFF]"}`}>{cardNumber}</p>
        <div className="text-white text-2xl">
          <Image src={groupIcon} alt="group circle" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
