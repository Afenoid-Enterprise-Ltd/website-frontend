/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "afenoid-green": "#224C1F",
        "afenoid-yellow": "#CCD311",
        "afenoid-lemon": "#76A62E",
        "afenoid-light-lemon": "#F0F7E2",
        "afenoid-dark-green": "#0F261A",
        "afenoid-white":"#F8FAF4",
        "floral-white": "#FFF9F2",
        "afenoid-light-grey": "#EBEEEB",
        "afenoid-dark-grey": "#9FA39B"
      },
      fontFamily: {
        gambetta: ["Gambetta", "serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        mxxl: { max: "1439px" },
        mxl: { max: "1279px" },
        mlg: { max: "1024px" },
        mmlg: { max: "976px" },
        mmd: { max: "768px" },
        msm: { max: "639px" },
        mxs: { max: "480px" },
        mxxs: { max: "400px" },
        mxxss: { max: "375px" },
        mxxssw: { max: "355px" },
        mxxxs: { max: "320px" },
        "ms-height": { raw: "(max-height: 700px)" },
        "mxl-height": { raw: "(max-height: 850px)" },
      },
      fontSize: {
        //Header element styles
        "h1": ["3.25rem", ], //52px
        "h2": ["2.5rem", ], //40px
        "h3": ["2.00rem", ], //32px
        "h4": ["1.75rem", ], //28px
        "h5": ["1.25rem", ], //20px
        "h6": ["1.125rem", ], //18px

        // Body variant styles - [Large, Medium, Regular, Small]
        "body-reg": ["1rem", ], //16px
        "caption-mid": ["0.875rem", ], //14px
        "caption-reg": ["0.875rem", ], //14px
      },
      backgroundImage:{
        "case-study": "url('./src/assets/caseStudyBg.svg')"
      }
    },
  },
  plugins: [],
}

