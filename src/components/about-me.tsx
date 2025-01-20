import { motion, MotionValue, useTransform } from 'motion/react';

type Props = {
  scrollYProgress: MotionValue<number>;
};

export function AboutMeTag({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const x = useTransform(scrollYProgress, [0, 0.1], [0, -39]);
  const y = useTransform(scrollYProgress, [0, 0.1], [150, -54]);

  const dashOpacity = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0.1, 0.2], [0, -14]);

  const lineGuideHeight = useTransform(scrollYProgress, [0.1, 0.2], [0, 300]);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ scale, x, y, opacity }}>
        <h3 className="min-w-[8rem] text-2xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          AboutMe
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
        </h3>
        <motion.div
          className="absolute left-1 top-8 bg-gray-300 dark:bg-gray-700"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </div>
  );
}

export function AboutMeClosingTag({ scrollYProgress }: Props) {
  const y = useTransform(scrollYProgress, [0.1, 0.2], [-54, 166]);

  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ x: -45, y, opacity }}>
        <span className="min-w-[8rem] text-2xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          AboutMe
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
