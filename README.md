# MSJ Educational Academy - Website

Professional tuition academy website built with **Next.js**, **Tailwind CSS**, and **TypeScript**, designed to showcase the academy's offerings, achievements, and facilities.

## features

-   **Responsive Modern Design**: Fully responsive layout optimized for all devices (Mobile, Tablet, Desktop).
-   **Interactive UI**: Smooth fade-in animations for all sections using **Framer Motion**.
-   **Dynamic Hero Section**: Engaging landing screen with Lottie animations.
-   **Comprehensive Sections**:
    -   **About**: Academy history and mission.
    -   **Courses**: Detailed cards for Primary, Middle, High, and Higher Secondary classes.
    -   **Methodology**: Step-by-step teaching process.
    -   **Results**: Counting animations for achievements (Students, Years, Pass Percentage).
    -   **Testimonials**: Parents and students feedback with star ratings.
    -   **Admission**: Clear visual timeline of the enrollment process.
    -   **Gallery**: Photo grid of academy events and facilities.
    -   **Contact**: Functional contact form and embedded Google Map.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

-   `src/components`: Contains all UI sections (Navbar, Hero, About, Courses, Results, Testimonials, Admission, Gallery, Contact, Footer).
-   `src/app`: Page layout and global styles.
-   `src/mock.ts`: Mock data for development.
-   `tailwind.config.ts`: Custom configuration for MSJ Academy color palette.

## Technologies

-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Lottie Animation**: @lottiefiles/dotlottie-react