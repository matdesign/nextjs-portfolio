import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import DevImg from './DevImg';
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo initials='MA' />

            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
            />
            {/* image */}
            <DevImg
              containerStyles='bg-hero1_shape w-[310px] h-[262px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/mat-profile5.png'
            />
          </div>
          <Socials containerStyles='flex gap-x-4 ' iconsStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
