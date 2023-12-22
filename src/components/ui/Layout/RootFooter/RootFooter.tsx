import clsx from 'clsx';
import { FaRegCopyright } from 'react-icons/fa6';

/**
 * 根节点 底部组件
 */
export function RootFooter() {
    return (
        <footer className={clsx(['h-16 px-4', 'border-t border-t-xdd-bg-300', 'backdrop-blur-xl'])}>
            <div className={clsx(['h-full w-full', 'text-xs', 'flex items-center justify-center'])}>
                <p className="flex items-center space-x-2">
                    <span>Copyright</span>
                    <FaRegCopyright />
                    <span>2020-2023</span>
                    <a
                        className={clsx([
                            'border-b border-b-transparent transition hover:border-b-xdd-primary-200',
                        ])}
                        href="http://www.xdd.ink"
                    >
                        www.xdd.ink
                    </a>
                    <span>All Rights Reserved.</span>
                </p>
            </div>
        </footer>
    );
}
