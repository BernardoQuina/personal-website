import { motion, MotionValue, useTransform } from 'motion/react';

type Props = {
  scrollYProgress: MotionValue<number>;
  aboutMeContentSize: { width: number; height: number };
};

export function DevTag({ scrollYProgress, aboutMeContentSize }: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2], [0.7, 1, 0.7]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [30, 0, 55 + -aboutMeContentSize.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [138, -90, -70 - aboutMeContentSize.height / 2],
  );
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0.5]);

  const dashOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0, 0.1], [0, -14]);

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [0, 156, 120 + aboutMeContentSize.height],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [80, 0, 85 + -aboutMeContentSize.width / 2],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#index" style={{ scale, x, y, opacity }}>
        <h1 className="min-w-[12rem] whitespace-nowrap text-xl font-medium">
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
      </motion.a>
      <motion.div
        className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
        style={{ width: 1, height: lineGuideHeight, y, x: lineGuideX }}
      />
    </div>
  );
}

export function DevClosingTag({ scrollYProgress, aboutMeContentSize }: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2], [0.7, 1, 0.7]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [30, -3, 52 + -aboutMeContentSize.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [170, 90, 72 + aboutMeContentSize.height / 2],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0.5]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#index" style={{ scale, x, y, opacity }}>
        <span className="min-w-[12rem] whitespace-nowrap text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          FullStackDeveloper
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
