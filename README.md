# Lansah UX Portfolio

A modern, responsive UX portfolio website built with React, TypeScript, and Styled Components. This portfolio replicates the design and functionality of Arsen Kolyba's portfolio with a clean, minimalist aesthetic.

## Features

- **Modern Design**: Clean, minimalist black and white design
- **Responsive Layout**: Mobile-first responsive design
- **Interactive Elements**: Smooth animations and hover effects using Framer Motion
- **Project Showcase**: Grid layout displaying 13 selected projects
- **Interactive Email**: Press 'R' key to reveal contact email
- **Social Links**: Integration with Twitter, Figma, and email
- **Ukraine Support Banner**: Shows solidarity with Ukraine

## Technologies Used

- React 18
- TypeScript
- Styled Components
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lansah-ux-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Custom styles
├── index.tsx        # Application entry point
└── index.css        # Global styles
```

## Customization

### Changing the Name
Update the `Name` component in `App.tsx` to change the displayed name.

### Adding Projects
Modify the `projects` array in `App.tsx` to add, remove, or edit projects.

### Styling
The portfolio uses Styled Components for styling. Modify the styled components in `App.tsx` to change colors, fonts, and layout.

### Email
Update the email address in the `Email` component and the `handleKeyPress` function.

## Features to Add

- [ ] About page
- [ ] Lab/experiments section
- [ ] Contact form
- [ ] Blog section
- [ ] Dark/light theme toggle
- [ ] Project detail pages
- [ ] Image galleries for projects

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspiration from [Arsen Kolyba's portfolio](https://arsenkolyba.com/)
- Built with Create React App
- Icons from React Icons
- Animations powered by Framer Motion
