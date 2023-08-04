'use client'
import Image from 'next/image';
import logo from '../public/next.svg';
import { exists } from 'fs';
import Link from 'next/link';
import Page2 from '@/app/About/page';

function Header() {
  return (<>
    <header className="flex justify-center w-100 h-50px bg-slate-900 relative shadow-md">
      <nav>
        <ul className="flex gap-10 justify-center font-sans font-medium text-white">
          <li /*onClick={showImage}*/ className="hover:bg-cyan-200 rounded p-2">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-cyan-200 rounded p-2">
            <Link href={'About'}>About</Link>
          </li>
          <li className="hover:bg-cyan-200 rounded p-2">
            <Link href={'Login'}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
    {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert hidden"
              width={100}
              height={24}
              priority
              id='logo'
            /> */}
    </>
  );
}

// function showImage(){
//     let logo = document.querySelector('#logo');
//     if (logo?.classList.contains('hidden')){
//         if (confirm('Tem certeza que deseja mostrar a logo?')){
//             logo?.classList.toggle('hidden');
//         }
//     } else {
//         if (confirm('Tem certeza que deseja esconder a logo?')){
//             logo?.classList.toggle('hidden');
//         }
//     }
// };



export default Header;