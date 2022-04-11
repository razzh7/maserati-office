module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': {'min': '50px', 'max': '1023px'}, // 70
        // 'md': {'min': '375px', 'max': '1023px'}, // 70
        'md': {'min': '1024px', 'max': '1679px'}, // 75
        'lg': {'min': '1670px', 'max': '1920px'}, // 90
      },
      colors: {
        blue: {
          450: '#0c2340'
        }
      },
      width: {
        276: '276px',
        244: '244px',
        220: '220px',
        144: '144px',
        124: '124px',
        104: '104px',
        '2/9': '22.22%'
      },
      height: {
        70: '70px',
        75: '75px',
        90: '90px',
      },
      padding: {
        20: '20px',
        45: '45px',
        60:'60px',
      },
      backgroundColor: {
        navright: '#F0EFEE',
        navtry: '#102037'
      },
      textColor: {
        white: '#fff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
