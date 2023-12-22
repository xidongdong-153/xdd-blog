import Link from 'next/link';

import { NavBarItem } from '@/components/ui/Layout/RootHeader/NavBarItem';
import { getDirectoryStructure } from '@/data';

export function Navbar() {
    const data = getDirectoryStructure('data/docs');

    return (
        <div className="flex flex-1 justify-center space-x-4">
            {/* 首页链接 */}
            <Link href="/">首页</Link>

            <NavBarItem directions={data} />
        </div>
    );
}
