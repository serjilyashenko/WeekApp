# 🗓️ Week App

Simple habit tracker for myself.

#### Stack:

- Vite.js
- React
- Typescript
- Jest
- ts-jest

While I created my own date functions from scratch for fun, I highly recommend using third-party libraries such as
`date-fns` or `luxon` for production code. These libraries have been thoroughly tested, optimized for performance, and
offer a wide range of useful features. By using them, you can avoid common errors and edge cases that may arise when
working with dates.

**Note:** There is no RTL. First I want to test my date functions. RTL may be added later.

**Notes:**

- Icons size is calculated as 1.2em from inherited font-size
- A trick to customize date-picker button (see `date-picker.module.css`)
- I used css custom properties at some point to share calendar content min height (--calendar-content file calendar-template.module.css)
- As a color schema I use `hsl`. I would like to try `oklch`. But since I prefer to use pure css in that project, the browsers support of `oklch` is not enough today(2023-09-23).
- includes @supports to make `:user-invalid` progressive enhancement for chrome (edge and a bit older chrome doesn't support them (on `2023-09-23`))
