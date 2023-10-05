# 🗓️ Week App

Find the week number for any date and vice versa.
You can also select a year and week number to see the dates within that week

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/serjilyashenko/WeekApp/master/images/preview_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/serjilyashenko/WeekApp/master/images/preview_light.png">
  <img alt="Application preview" width="500px" src="https://raw.githubusercontent.com/serjilyashenko/WeekApp/master/images/WinError_light.png">
</picture>

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

**Notes:**

- There is no RTL. First I want to test my date functions. RTL may be added later.
- Icons size is calculated as 1.2em from inherited font-size
- A trick to customize date-picker button (see `date-picker.module.css`)
- I used css custom properties at some point to share calendar content min height (--calendar-content file calendar-template.module.css)
- As a color schema I use `hsl`. I would like to try `oklch`. But since I prefer to use pure css in that project, the browsers support of `oklch` is not enough today(2023-09-23).
- includes @supports to make `:user-invalid` progressive enhancement for chrome (edge and a bit older chrome doesn't support them (on `2023-09-23`))
- I like styling of the form for day and night modes. + box-shadow animation for `:focus-visible`
- There are related fields in WeekForm.tsx. Week input allowed values depends on Year input value. For instance 2023 includes 52 weeks, otherwise 2027 includes 53 weeks. So, the week input's validity may change during Year input change.
- Week input validation using regex generated by `getWeekRegexPattern` method.
- Date methods can trow error during component rendering. They are intercepted by ErrorBoundary.
- I created fun win fallback `ErrorFallback.tsx` (using html + css) for rendering errors:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/serjilyashenko/WeekApp/master/images/WinError_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/serjilyashenko/WeekApp/master/images/WinError_light.png">
  <img alt="Shows error example" width="500px" src="https://raw.githubusercontent.com/serjilyashenko/WeekApp/master/images/WinError_light.png">
</picture>
