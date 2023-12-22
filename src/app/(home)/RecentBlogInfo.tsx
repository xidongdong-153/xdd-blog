'use client';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { HiHashtag } from 'react-icons/hi';

import { BlogPost } from '@/data';

interface RecentBlogInfoProps {
    recentPosts: BlogPost[];
}

const PostTag = ({ label, children }: { label: string; children?: ReactNode }) => {
    return (
        <span className={clsx(['flex items-center'])}>
            {children}
            {label}
        </span>
    );
};

export function RecentBlogInfo({ recentPosts }: RecentBlogInfoProps) {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0.0001,
                    x: 50,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ duration: 1, type: 'spring', stiffness: 120, damping: 20 }}
                className="w-2/3 px-4 text-right text-3xl font-medium leading-loose"
            >
                这里是最近的文章噢
            </motion.div>
            <div className={clsx(['h-full w-2/3 space-y-3 px-4 pl-2 pr-1', 'flex flex-col'])}>
                {recentPosts.map((blog, i) => (
                    <motion.div
                        key={blog.path}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        initial={{ opacity: 0.001, x: 50 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + 0.2 * i,
                        }}
                        className={clsx([
                            'mb-2 h-28 w-full p-2',
                            'rounded border border-xdd-accent-100/50 bg-black/40',
                            'cursor-pointer',
                        ])}
                    >
                        <div className="group flex h-full w-full flex-col">
                            <div className={clsx(['flex items-center justify-between'])}>
                                <h3
                                    className={clsx([
                                        'w-2/3',
                                        'text-xl',
                                        'overflow-hidden text-ellipsis whitespace-nowrap',
                                    ])}
                                >
                                    {blog.title}
                                </h3>
                                <button
                                    className={clsx([
                                        'flex items-center',
                                        'text-xdd-primary-100',
                                        'space-x-2 opacity-0 transition duration-200 ease-in-out',
                                        'group-hover:opacity-100',
                                    ])}
                                >
                                    <span>阅读</span>
                                    <FiArrowRightCircle />
                                </button>
                            </div>
                            <div className={clsx(['flex flex-1 items-end', 'space-x-2 pr-4'])}>
                                <div>{`${dayjs(blog.createdAt).format('YYYY/MM/DD')}`}</div>
                                <div className="flex items-center space-x-2">
                                    {blog.tags.map((tag, index) =>
                                        index === 0 ? (
                                            <PostTag label={tag}>
                                                <HiHashtag />
                                            </PostTag>
                                        ) : (
                                            <PostTag label={tag} />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
