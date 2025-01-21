import { motion, MotionValue, useTransform } from 'motion/react';

type Props = {
  scrollYProgress: MotionValue<number>;
  aboutMeContentHeight: number;
};

export function CertificatesTag({
  scrollYProgress,
  aboutMeContentHeight,
}: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2], [0.7, 1, 0.7]);
  const x = useTransform(scrollYProgress, [0, 0.1], [17, -21]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [165, 54, 51.5 + aboutMeContentHeight / 2],
  );

  const dashOpacity = useTransform(scrollYProgress, [0.4, 0.45], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0.4, 0.5], [0, -14]);

  const lineGuideHeight = useTransform(scrollYProgress, [0.4, 0.5], [0, 300]);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ scale, x, y, opacity }}>
        <h3 className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          Certificates
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

export function CertificatesClosingTag({ scrollYProgress }: Props) {
  const y = useTransform(scrollYProgress, [0.4, 0.5], [-165, 166]);

  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ x: -44, y, opacity }}>
        <span className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Certificates
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
