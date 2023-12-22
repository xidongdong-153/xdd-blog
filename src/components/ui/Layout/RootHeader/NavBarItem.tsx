'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { NavDrop } from '@/components/ui/NavDrop';
import { Directory } from '@/data';

export function NavBarItem({ directions }: { directions: Directory[] }) {
    const [hoveredDirectory, setHoveredDirectory] = useState(null);

    const leaveTimer = useRef(null);

    const handleMouseEnter = (directory: Directory) => {
        if (leaveTimer.current) {
            clearTimeout(leaveTimer.current);
        }
        setHoveredDirectory(directory);
    };

    const handleMouseLeave = () => {
        leaveTimer.current = setTimeout(() => {
            setHoveredDirectory(null);
        }, 300); // 这里的 300 是延迟时间，单位为毫秒
    };

    return (
        <>
            {/* 动态生成一级目录链接 */}
            {directions.map((directory) => (
                <div
                    key={directory.name}
                    onMouseEnter={() => handleMouseEnter(directory)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                >
                    <Link href={directory.routePath}>{directory.chineseName}</Link>
                    <AnimatePresence>
                        {/* 如果有二级目录且当前目录被hover，则显示下拉菜单 */}
                        {hoveredDirectory === directory &&
                            directory.subdirectories &&
                            directory.subdirectories.length !== 0 && (
                                <NavDrop subdirectories={directory.subdirectories} />
                            )}
                    </AnimatePresence>
                </div>
            ))}
        </>
    );
}
