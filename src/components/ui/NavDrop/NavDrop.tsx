import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Directory } from '@/data';

const variants = (i: number) => {
    return {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        },
        closed: {
            x: 20,
            opacity: 0,
            transition: {
                delay: i * 0.3,
            },
        },
    };
};

export function NavDrop({ subdirectories }: { subdirectories: Directory[] }) {
    return (
        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={clsx([
                'absolute left-1/2 top-[1.8rem] -translate-x-1/2 transform',
                'h-auto w-28 space-y-2 p-2',
                'overflow-hidden rounded-md',
                'border border-xdd-bg-300 text-center',
                'bg-black/60 backdrop-blur-xl',
            ])}
        >
            {subdirectories.map((sub, index) => (
                <motion.li
                    key={sub.path}
                    initial="closed"
                    animate="open"
                    variants={variants(index)}
                    className={clsx([
                        'h-10 w-full',
                        'flex items-center justify-center',
                        'rounded border border-xdd-bg-200 transition',
                        'hover:bg-black/70 hover:text-xdd-primary-100',
                    ])}
                >
                    <Link key={sub.name} href={sub.routePath}>
                        {sub.chineseName}
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    );
}
