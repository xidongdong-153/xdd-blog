import { ReactNode } from 'react';

interface RootMainProps {
    children: ReactNode;
}

/**
 * 根节点 内容区组件
 */
export function RootMain({ children }: RootMainProps) {
    return <div>{children}</div>;
}
