/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		fontFamily: {
    			sans: [
    				'Inter',
    				'sans-serif'
    			]
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			'background-gradient': 'background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite',
    			'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
    			'scroll': 'scroll 40s linear infinite'
    		},
    		keyframes: {
    			'background-gradient': {
    				'0%, 100%': {
    					transform: 'translate(0, 0)',
    					animationDelay: 'var(--background-gradient-delay, 0s)'
    				},
    				'20%': {
    					transform: 'translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)))'
    				},
    				'40%': {
    					transform: 'translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)))'
    				},
    				'60%': {
    					transform: 'translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)))'
    				},
    				'80%': {
    					transform: 'translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)))'
    				}
    			},
    			'pulse-slow': {
    				'0%, 100%': {
    					transform: 'translateX(-100%)'
    				},
    				'50%': {
    					transform: 'translateX(100%)'
    				}
    			},
    			'scroll': {
    				'0%': {
    					transform: 'translateX(0)'
    				},
    				'100%': {
    					transform: 'translateX(-50%)'
    				}
    			}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}
