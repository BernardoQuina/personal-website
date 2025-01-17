import { motion, MotionValue, useTransform } from 'motion/react';

const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

type Props = {
  scrollYProgress: MotionValue<number>;
};

export function DevTag({ scrollYProgress }: Props) {
  const width = 256; // 16rem
  const initialOffset = 30;
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.1],
    [
      windowWidth / 2 - width / 2 + initialOffset,
      windowWidth / 2 - width / 2 - 20,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1],
    [windowHeight / 2 + 105, windowHeight / 2 - 200],
  );

  const dashOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0, 0.1], [0, -14]);

  const lineGuideHeight = useTransform(scrollYProgress, [0, 0.1], [0, 370]);

  return (
    <>
      <motion.a href="#snap-2" className="fixed" style={{ scale, x, y }}>
        <h1 className="min-w-[16rem] text-2xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          FullStackDeveloper
          <motion.span
            className="text-orange-400"
            style={{ opacity: dashOpacity }}
          >
            {' '}
            /
          </motion.span>
          <motion.span
            className="inline-block text-orange-400"
            style={{ x: closingBracketX }}
          >
            {'>'}
          </motion.span>
        </h1>
        <motion.div
          className="absolute left-1 top-8 bg-gray-300 dark:bg-gray-700"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </>
  );
}

export function DevClosingTag({ scrollYProgress }: Props) {
  const width = 256; // 16rem
  const initialOffset = 30;
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.1],
    [
      windowWidth / 2 - width / 2 + initialOffset,
      windowWidth / 2 - width / 2 - 20,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1],
    [windowHeight / 2 + 105, windowHeight / 2 + 200],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.a href="#snap-2" className="fixed" style={{ scale, x, y, opacity }}>
      <span className="min-w-[16rem] text-2xl font-medium">
        <span className="text-orange-400">{'</'}</span>
        FullStackDeveloper
        <span className="text-orange-400">{'>'}</span>
      </span>
    </motion.a>
  );
}
