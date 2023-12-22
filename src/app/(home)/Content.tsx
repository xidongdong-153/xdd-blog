'use client';

import clsx from 'clsx';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { ContentProps } from '@/app/(home)/types';

export function Content(props: ContentProps) {
    const { className = 'h-screen', children, background = 'bg-black/50' } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
            className={clsx([
                className,
                'min-h-[120vh]',
                'relative flex flex-col',
                'bg-cover bg-fixed bg-center',
            ])}
        >
            <div className={clsx(['absolute inset-0', background])} />
            <span className="absolute top-2/3" ref={ref} />
            {isInView && children}
        </div>
    );
}
