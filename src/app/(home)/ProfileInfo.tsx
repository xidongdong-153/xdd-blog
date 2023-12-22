'use client';

// import fade from '@root/public/imgs/fade.jpg';
import clsx from 'clsx';
// import Image from 'next/image';
import { createElement } from 'react';

import { TextInsertTransition } from '@/components/animate';

export function ProfileInfo() {
    const title = {
        template: [
            {
                type: 'h1',
                text: 'Hi,这里是喜东东的个人小站!',
                className: 'h-24 w-full text-4xl',
            },
            {
                type: 'h2',
                text: '前端开发者一枚, 正在向全栈努力.',
                className: 'my-6 h-24 w-full text-2xl',
            },
            {
                type: 'p',
                text: '@瓦罗兰特高手喜东东',
                className: 'h-24 w-full cursor-default',
            },
        ],
    };

    return (
        <div
            className={clsx([
                'absolute left-8 top-1 overflow-hidden',
                'flex flex-1 flex-col  justify-center',
                'rounded-lg',
                'h-[25rem] w-1/2',
            ])}
        >
            {/* <div className="my-6 h-24 w-24">
                <Image className="rounded-full" src={fade} alt="fade" />
            </div> */}
            {title.template.map((t, i) => {
                const { type, className } = t;
                const prevAllTextLength = title.template.slice(0, i).reduce((acc, cur) => {
                    return acc + (cur.text?.length || 0);
                }, 0);
                const key = i + type;

                return createElement(
                    type,
                    { key, className },
                    t.text && (
                        <TextInsertTransition
                            initialDelay={prevAllTextLength * 0.05}
                            eachDelay={0.05}
                        >
                            {t.text}
                        </TextInsertTransition>
                    ),
                );
            })}
        </div>
    );
}
