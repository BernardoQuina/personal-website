import { motion, MotionValue, useTransform } from 'motion/react';

type Props = {
  scrollYProgress: MotionValue<number>;
};

export function DevTag({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const x = useTransform(scrollYProgress, [0, 0.1], [28, -20]);
  const y = useTransform(scrollYProgress, [0, 0.1], [138, -200]);

  const dashOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0, 0.1], [0, -14]);

  const lineGuideHeight = useTransform(scrollYProgress, [0, 0.1], [0, 370]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-2" style={{ scale, x, y }}>
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
    </div>
  );
}

export function DevClosingTag({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const x = useTransform(scrollYProgress, [0, 0.1], [28, -20]);
  const y = useTransform(scrollYProgress, [0, 0.1], [155, 200]);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-2" style={{ scale, x, y, opacity }}>
        <span className="min-w-[16rem] text-2xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          FullStackDeveloper
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
