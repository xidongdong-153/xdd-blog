import clsx from 'clsx';

import { Container } from '@/components/ui/Layout/RootHeader/Container';

/**
 * 根节点 头部组件
 */
export function RootHeader() {
    return (
        <header
            className={clsx([
                'fixed left-0 right-0 top-0 z-50 h-16',
                'border-b border-b-xdd-bg-300',
                'backdrop-blur-xl',
            ])}
        >
            <Container />
        </header>
    );
}
