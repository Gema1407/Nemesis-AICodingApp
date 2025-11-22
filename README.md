This project is just a product of AI Coding that I tried

# Nemesis | Next-Gen Cybersecurity Platform

Nemesis is a cutting-edge cybersecurity dashboard designed for real-time threat monitoring and system analytics. Built with modern web technologies, it features a stunning cyberpunk aesthetic with glassmorphism effects, interactive 3D visualizations, and responsive data feeds.

## 🚀 Features

- **Real-time Threat Monitoring**: Live feed of detected threats with severity levels and status tracking.
- **Interactive 3D Globe**: Visual representation of global threat origins and targets.
- **System Health Analytics**: Dashboard metrics for active threats, mitigated attacks, and system vulnerabilities.
- **Cyberpunk Aesthetic**: Immersive dark mode UI with neon accents, glassmorphism, and smooth animations.
- **Responsive Design**: Fully responsive layout that works seamlessly across different device sizes.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v18) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visualizations**: [React Globe GL](https://github.com/vasturiano/react-globe.gl) & [Recharts](https://recharts.org/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Gema1407/Nemesis-AICodingApp.git
    cd nemesis
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── atoms/        # Basic building blocks (Button, Badge, Input)
│   ├── molecules/    # Composite components (NavItem, ThreatItem)
│   └── organisms/    # Complex sections (Sidebar, Header, ThreatFeed)
├── lib/              # Utilities and helper functions
├── pages/            # Main application pages (Dashboard, Threats, Scanner)
├── store/            # Global state management (Zustand)
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx          # Entry point
```

## 🎨 Design System

Nemesis uses a custom Tailwind configuration to achieve its unique look:

- **Colors**: Custom palette including `nemesis-bg`, `nemesis-accent-cyan`, `nemesis-accent-violet`, etc.
- **Fonts**: `Orbitron` for headers, `JetBrains Mono` for data, and `Inter` for UI text.
- **Effects**: Custom `glass-card` utility for frosted glass effects and neon glow shadows.
