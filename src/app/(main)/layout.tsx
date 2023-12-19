import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import '@/app/(main)/globals.css';
import { RootFooter, RootHeader, RootMain } from '@/app/lib/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'XDD Blog',
    description: '喜东东的博客 @xidongdong-153',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="zh-CN">
            <body className={clsx([inter.className, 'bg-bg-100 text-text-100'])}>
                <RootHeader />
                <RootMain>{children}</RootMain>
                <RootFooter />
            </body>
        </html>
    );
}
