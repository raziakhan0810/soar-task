import Link from 'next/link';

export default function SidebarItems({ item , activeUrl, handleClick}: { item: any,activeUrl:any,handleClick:any }) {
  
  return (
    <li>
      <Link
        href={item.url}
        onClick={() => handleClick(item.url)}
        className={`flex items-center space-x-3 ${activeUrl === item.url ? 'text-[#232323]' : 'text-[#B1B1B1]'} mb-6`}
      >
        <img
          src={activeUrl === item.url ? item.activeIcon?.src : item.icon?.src}
          alt={item.name}
          className="w-6 h-6"
        />
        <span className='!ml-5'>{item.name}</span>
      </Link>
    </li>
  );
}
