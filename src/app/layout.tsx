import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
    title: 'MSJ Educational Academy - Learn! Try! Succeed!',
    description: 'Complete Academic Support for Classes 1–12 in Coimbatore. CBSE & Tamil Nadu State Board.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-msj-text bg-msj-white`}>
                {children}
            </body>
        </html>
    );
}
