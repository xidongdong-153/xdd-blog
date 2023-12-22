'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { RootProps } from '@/components/ui/Layout/types';

/**
 * 根节点 内容区组件
 */
export function RootMain({ children }: RootProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <main className={clsx(['relative min-h-fill-content pt-16'])}>{children}</main>
        </motion.div>
    );
}
