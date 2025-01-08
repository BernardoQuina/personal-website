import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useTheme } from 'next-themes';

const Orbiter = ({
  semiMajorAxis,
  semiMinorAxis,
  duration,
  initialPosition,
  children,
  rotate,
  reverse,
}: {
  semiMajorAxis: number;
  semiMinorAxis: number;
  duration: number;
  initialPosition: number; // 0-360
  children?: JSX.Element | JSX.Element[];
  rotate: number;
  reverse?: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const rotationAngleRad = (rotationAngle * Math.PI) / 180;
  const scale = useTransform(y, [semiMinorAxis, -semiMinorAxis], [1.2, 0.8]);
  const zIndex = useTransform(y, [semiMinorAxis, -semiMinorAxis], [1, -1]);

  useEffect(() => {
    const positions = Array.from({ length: 361 }, (_, i) => {
      const angle = ((i + initialPosition) * Math.PI) / 180;

      return {
        x: semiMajorAxis * Math.cos(angle),
        y: semiMinorAxis * Math.sin(angle),
      };
    });

    x.set(positions[0].x);
    y.set(positions[0].y);

    const controlsX = animate(
      x,
      positions.map((p) => p.x),
      { duration, repeat: Infinity, ease: 'linear' },
    );
    const controlsY = animate(
      y,
      positions.map((p) => p.y),
      { duration, repeat: Infinity, ease: 'linear' },
    );
    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, []);

  if (children) {
    return (
      <motion.div
        style={{
          position: 'absolute',
          rotate,
          zIndex,
          rotateY: reverse ? 180 : 0,
        }}
      >
        <motion.div style={{ x, y, scale, zIndex }}>{children}</motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: 'red',
        x,
        y,
        scale,
        zIndex,
      }}
    />
  );
};

const OrbitPath = ({
  semiMajorAxis,
  semiMinorAxis,
  rotate,
}: {
  semiMajorAxis: number;
  semiMinorAxis: number;
  rotate: number;
}) => {
  const cx = semiMajorAxis;
  const cy = semiMajorAxis;

  const { resolvedTheme } = useTheme();

  return (
    <>
      {/* Back half of orbit (z-index: 0) */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
          rotate: `${rotate}deg`,
        }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={`M ${cx - semiMajorAxis} ${cy} A ${semiMajorAxis} ${semiMinorAxis} 0 0 1 ${cx + semiMajorAxis} ${cy}`}
          fill="none"
          strokeWidth="1"
          // stroke="rgba(255, 0, 0, 0.2)"
          style={{
            // filter: `url(#glow)`,
            stroke:
              resolvedTheme === 'light'
                ? 'rgba(0, 0, 0, 0)'
                : 'rgba(255,255,255, 0)',
          }}
        />
      </svg>

      {/* Front half of orbit (z-index: 2) */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
          rotate: `${rotate}deg`,
        }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={`M ${cx - semiMajorAxis} ${cy} A ${semiMajorAxis} ${semiMinorAxis} 0 0 0 ${cx + semiMajorAxis} ${cy}`}
          fill="none"
          // stroke="rgba(255, 0, 0, 0.2)"
          strokeWidth="1"
          style={{
            // filter: `url(#glow)`,
            stroke:
              resolvedTheme === 'light'
                ? 'rgba(0, 0, 0, 0)'
                : 'rgba(255,255,255, 0)',
          }}
        />
      </svg>
    </>
  );
};

export function OrbiterEffect({
  initialPosition = 0,
  className,
  children,
  rotate = 0,
  reverse,
  semiMajorAxis = 150,
  semiMinorAxis = 30,
  duration = 7,
}: {
  initialPosition?: number; // 0-360
  className?: string;
  children?: JSX.Element | JSX.Element[];
  rotate?: number;
  reverse?: boolean;
  semiMajorAxis?: number;
  semiMinorAxis?: number;
  duration?: number;
}) {
  return (
    <div
      className={className}
      style={{
        position: 'static',
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <OrbitPath
        semiMajorAxis={semiMajorAxis}
        semiMinorAxis={semiMinorAxis}
        rotate={rotate}
      />
      <Orbiter
        semiMajorAxis={semiMajorAxis}
        semiMinorAxis={semiMinorAxis}
        duration={duration}
        initialPosition={initialPosition}
        rotate={rotate}
        reverse={reverse}
      >
        {children}
      </Orbiter>
    </div>
  );
}
