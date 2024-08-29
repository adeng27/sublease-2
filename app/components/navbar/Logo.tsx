'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
    return (
        <Image 
            onClick={() => router.push('/')}
            src="/images/logo.png"
            className='hidden md:block cursor-pointer'
            height='50'
            width='50'
            alt='TODO'
        />
    );
}
 
export default Logo;