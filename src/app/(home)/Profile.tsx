import { Content } from '@/app/(home)/Content';
import { ProfileButton } from '@/app/(home)/ProfileButton';
import { ProfileInfo } from '@/app/(home)/ProfileInfo';

export function Profile() {
    return (
        <Content className="h-screen bg-jett">
            <ProfileInfo />
            <ProfileButton />
        </Content>
    );
}
