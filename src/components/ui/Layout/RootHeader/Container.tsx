import clsx from 'clsx';

import { RootLogo } from '@/components/ui/Layout/RootHeader/Logo';
import { Navbar } from '@/components/ui/Layout/RootHeader/NavBar';

export function Container() {
    return (
        <div className={clsx(['mx-12 h-full pl-4 pr-14', 'flex items-center'])}>
            <RootLogo />
            <Navbar />
        </div>
    );
}
