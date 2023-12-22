'use client';

import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';

interface IconJumpTransitionProps {
    children: ReactElement;
    jumpHeight?: number;
    duration?: number;
}

export const IconJumpTransition: FC<IconJumpTransitionProps> = ({
    children,
    jumpHeight = 10,
    duration = 2,
}) => {
    const jumpAnimation = {
        y: [0, -jumpHeight, 0],
        transition: {
            duration,
            repeat: Infinity,
            ease: ['easeIn', 'easeOut', 'easeInOut'],
        },
    };

    return <motion.div animate={jumpAnimation}>{children}</motion.div>;
};
