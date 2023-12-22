import clsx from 'clsx';

import { Content } from '@/app/(home)/Content';
import { RecentBlogInfo } from '@/app/(home)/RecentBlogInfo';
import { getMarkdownPosts, getRecentPosts } from '@/data';

export async function RecentBlog() {
    const mds = await getMarkdownPosts('data/docs/blog');
    const recentPosts = getRecentPosts(mds);

    return (
        <Content className="h-screen bg-sage" background="bg-black/30">
            <div
                className={clsx([
                    'absolute right-2 top-1/2 -translate-y-1/2',
                    'flex flex-1 flex-col items-center',
                    'rounded-lg',
                    'h-[80vh] w-1/2',
                ])}
            >
                <RecentBlogInfo recentPosts={recentPosts} />
            </div>
        </Content>
    );
}
