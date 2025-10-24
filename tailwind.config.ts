import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        DEFAULT: '#00d3ef', // cyan
        hover: '#00bfd9',
        secondary: {
          DEFAULT: '#0063f2', // blue
          hover: '#0057d9',
        },
        accent: {
          DEFAULT: '#0043f2', // darker blue
          hover: '#003ad9',
        },
        background: {
          light: '#48bfde',
          dark: '#3153a0',
        },
        sidebar: {
          background: 'hsl(0 0% 98%)',
          foreground: 'hsl(240 5.3% 26.1%)',
          primary: 'hsl(240 5.9% 10%)',
          'primary-foreground': 'hsl(0 0% 98%)',
          accent: 'hsl(240 4.8% 95.9%)',
          'accent-foreground': 'hsl(240 5.9% 10%)',
          border: 'hsl(220 13% 91%)',
          ring: 'hsl(217.2 91.2% 59.8%)',
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        mono: 'var(--font-roboto-mono)'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75'
          }
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    require("lightswind/plugin")
  ],
}
};

export default config;
