function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "4xl": "40px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        "nunito-sans": ["var(--font-nunito-sans)"],
      },
      backgroundPosition: {
        topper: "center 70px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: withOpacity("--input"),
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: withOpacity("--primary"),
          opacity: "hsla(var(--primary-opacity))",
          opaque: withOpacity("--primary-opacity-sample"),
          black: withOpacity("--primary-black"),
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: withOpacity("--muted-foreground"),
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        header: {
          DEFAULT: "hsl(var(--header))",
          foreground: "hsl(var(--header-foreground))",
          accent: "hsl(var(--header-accent))",
          secondary: "hsl(var(--header-secondary))",
          tertiary: "hsl(var(--header-tertiary))",
        },
      },
      boxShadow: {
        normal: "0px 4px 16px 0px #085C6040",
        small: "0px 2px 6px 0px hsla(0, 0%, 0%, 0.1)",
        large: "0px 0px 20px 0px hsla(0, 0%, 0%, 0.1)",
        smooth: "0px 0px 60px 30px hsla(0, 0%, 0%, 0.03)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
