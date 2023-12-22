import { Profile } from '@/app/(home)/Profile';
import { RecentBlog } from '@/app/(home)/RecentBlog';

export default function Home() {
    return (
        <div>
            <Profile />

            <RecentBlog />
        </div>
    );
}
