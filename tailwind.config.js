/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sectionBg: 'var(--section_bg)',
        navBody: 'var(--nav_body)',
        navTittle: 'var(--nav_tittle)',
        navItm: 'var(--nav_item)',
        nameColor: 'var(--name_color)',
        devAbout: 'var(--dev_about)',
        aboutLight: 'var(--about_light)',
        eduTitle: 'var(--edu_title)',
        des: 'var(--description)',
        servBox: 'var(--service_box)',
      },
    },
  },
  plugins: [],
}