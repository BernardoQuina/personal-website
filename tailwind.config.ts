/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        'background-dark': 'hsl(var(--dark-background))',
        foreground: 'hsl(var(--foreground))',
        'foreground-dark': 'hsl(var(--dark-foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          dark: 'hsl(var(--dark-card))',
          foreground: 'hsl(var(--card-foreground))',
          'foreground-dark': 'hsl(var(--dark-card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          dark: 'hsl(var(--dark-popover))',
          foreground: 'hsl(var(--popover-foreground))',
          'foreground-dark': 'hsl(var(--dark-popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: 'hsl(var(--dark-primary))',
          foreground: 'hsl(var(--primary-foreground))',
          'foreground-dark': 'hsl(var(--dark-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          dark: 'hsl(var(--dark-secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          'foreground-dark': 'hsl(var(--dark-secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          dark: 'hsl(var(--dark-muted))',
          foreground: 'hsl(var(--muted-foreground))',
          'foreground-dark': 'hsl(var(--dark-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          dark: 'hsl(var(--dark-accent))',
          foreground: 'hsl(var(--accent-foreground))',
          'foreground-dark': 'hsl(var(--dark-accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          dark: 'hsl(var(--dark-destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          'foreground-dark': 'hsl(var(--dark-destructive-foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          dark: 'hsl(var(--dark-border))',
        },
        input: {
          DEFAULT: 'hsl(var(--input))',
          dark: 'hsl(var(--dark-input))',
        },
        ring: {
          DEFAULT: 'hsl(var(--ring))',
          dark: 'hsl(var(--dark-ring))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
          '1-dark': 'hsl(var(--dark-chart-1))',
          '2-dark': 'hsl(var(--dark-chart-2))',
          '3-dark': 'hsl(var(--dark-chart-3))',
          '4-dark': 'hsl(var(--dark-chart-4))',
          '5-dark': 'hsl(var(--dark-chart-5))',
        },
        'media-brand': 'rgb(var(--media-brand) / <alpha-value>)',
        'media-focus': 'rgb(var(--media-focus) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  variants: {
    extend: {
      scale: ['group-hover', 'peer-hover'],
      transform: ['group-hover', 'peer-hover'],
    },
  },
};
export default config;
