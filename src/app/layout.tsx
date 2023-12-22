import clsx from 'clsx';
import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import { ReactNode } from 'react';

import '@/app/globals.css';
import { RootFooter, RootHeader, RootMain } from '@/components/ui';

export const metadata: Metadata = {
    title: '喜东东的小站',
    description: '喜东东的博客 GitHub@xidongdong-153',
};

const FiraMono = Fira_Mono({ weight: '400', subsets: ['latin'] });

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="zh-CN">
            <body
                className={clsx([
                    FiraMono.className,
                    'bg-xdd-bg-100 text-xdd-text-100',
                    'overflow-y-auto',
                ])}
            >
                <RootHeader />
                <RootMain>{children}</RootMain>
                <RootFooter />
            </body>
        </html>
    );
}
