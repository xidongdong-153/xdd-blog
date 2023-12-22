import clsx from 'clsx';
import { PiArrowFatLineDownBold } from 'react-icons/pi';

import { IconJumpTransition } from '@/components/animate/IconJumpTransition';

export function ProfileButton() {
    return (
        <div
            className={clsx([
                'absolute bottom-0',
                'w-full',
                'flex flex-col items-center justify-center',
            ])}
        >
            <p className="text-xs">这里有好康的</p>
            <div className="flex h-8 items-center">
                <IconJumpTransition>
                    <PiArrowFatLineDownBold color="#78FBF6" />
                </IconJumpTransition>
            </div>
        </div>
    );
}
