# Hi there! 😃😃

## Overview

This project implements a modern and visually captivating artist landing page using React, CSS, and Framer Motion. The page is designed to deliver an engaging user experience with animations triggered by scroll and viewport visibility. Key elements include:

- A hero section featuring a video playback and numerous visual elements including text and icons.
- Section titles that feature scrolling animations.
- Scalable and dynamic sections including "Music" and "About" at the moment
- High responsiveness tailored for mobile and desktop devices.
- An Esther (easter) egg if you look through the code 😃

## Folder Structure

```
src/
├── assets/                     # All visual assets (png, jpg, svg, webm)
├── components/
│   ├── About.css               # Styling for About page
│   ├── About.jsx               # About page
│   ├── Cursor.css              # Styling for Cursor
│   ├── Cursor.jsx              # Custom cursor for desktop
│   ├── CustomSongEmbed.css     # Styling for CustomSongEmbed
│   ├── CustomSongEmbed.jsx     # Custom Spotify frames, replacing those horrendous horrible horid spotify iframes
│   ├── DownArrow.jsx           # Appears on the hero section, scrolls the page on click
│   ├── Footer.css              # Styling for Footer
│   ├── Footer.jsx              # Footer
│   ├── HeroSection.css         # Styling for HeroSection
│   ├── HeroSection.jsx         # This is the old hero section, feel free to look around! but it's not in use
│   ├── HomeText.jsx            # Text that appears on the hero section "More Than Birds"
│   ├── Navbar.css              # Styling for Navbar
│   ├── Navbar.jsx              # Not really a "navbar" since there are no routes, but uh this is just the logo at the top
│   ├── PageBuddies.css         # Styling for PageBuddies
│   ├── PageBuddies.jsx         # These were cute little icons that would rotate on the sides of the page, no longer in production 😔
│   ├── Scroller.jsx            # The white scroller at the top of the page
│   ├── SectionTitle.css        # Styling for SectionTitle
│   ├── SectionTitle.jsx        # This is the old section titles, removed because there were tacky 😛
│   ├── SectionTitle2.jsx       # The section titles in production, nice
│   ├── SpotSection.css         # Styling for SpotSection
│   ├── SpotSection.jsx         # The bounding for the CustomSongEmbeds
│   ├── VideoSection.css        # Styling for VideoSection
│   ├── VideoSection.jsx        # The hero section video, it took so long to make this work on mobile omg
├── pages/
│   ├── Homes.css               # Styling for Home
│   ├── Homes.jsx               # Puts all the components together
├── App.css                     # Styling for app, houses globals and such
├── App.jsx                     # Main application file, contains smooth scroll code
├── index.css                   # uhhh, globals are here too...
├── main.jsx                    # React entrypoint
```

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/KingDolphin123/jacube.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

## Customization

### Adjust Animation Timing

You can tweak the animation duration and easing by modifying the `transition` property in the `motion.div` elements. Example:

```jsx
transition={{ duration: 2, ease: "easeOut" }}
```

### Modify Layout

To adjust the layout for specific devices, edit the `isMobile` checks and CSS styles in `About.css`:

```css
.logoAbout {
  padding-top: 2vw;
}
```

## Future Improvements

- Add more interactive animations for other elements.
- Enhance accessibility features for better usability.
- Implement lazy loading for images to improve performance.

## Credits

This page was built using [Vite](https://vite.dev/) for React.js

Parallax motion was built using [FramerMotion](https://motion.dev/)

This site is hosted on [Netlify](https://app.netlify.com/)

This page was built by [Jacob Lee](https://www.linkedin.com/in/jacob-lee-230984218/)

---

Feel free to reach out for any feedback or contributions!
