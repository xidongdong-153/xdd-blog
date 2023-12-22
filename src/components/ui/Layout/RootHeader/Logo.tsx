import fade from '@root/public/imgs/fade.jpg';
import clsx from 'clsx';
import Image from 'next/image';

export function RootLogo() {
    return (
        <div className={clsx(['h-12 w-12 overflow-hidden rounded-2xl'])}>
            <Image src={fade} alt="fade" />
        </div>
    );
}
