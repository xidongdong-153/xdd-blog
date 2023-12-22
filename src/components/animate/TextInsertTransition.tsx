import { motion } from 'framer-motion';
import { FC } from 'react';

interface TextInsertTransitionProps {
    text?: string;
    children?: string;
    appear?: boolean;
    eachDelay?: number;
    initialDelay?: number;
}

export const TextInsertTransition: FC<TextInsertTransitionProps> = (props) => {
    const { appear = true, eachDelay = 0.1, initialDelay = 0, children, text, ...rest } = props;

    if (!appear) {
        // @ts-ignore
        return <div {...rest}>{text ?? children}</div>;
    }

    return (
        <>
            {Array.from(text ?? (children as string)).map((char, i) => {
                return (
                    <motion.span
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        className="inline-block whitespace-pre"
                        initial={{ transform: 'translate(5px, -10px)', opacity: 0.001 }}
                        animate={{
                            transform: 'translate(0px, 0px)',

                            opacity: 1,
                            transition: {
                                duration: 0.2,
                                delay: i * eachDelay + initialDelay,
                            },
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </>
    );
};
