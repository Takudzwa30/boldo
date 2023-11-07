"use client";

import { ThemeProvider } from "@hybris-software/ui-kit";
import theme from "@/Data/theme";

// Components
import Header from "@/Components/Advanced/Header/Header";
import Footer from "@/Components/Advanced/Footer/Footer";
import ContactUs from "@/Components/UIKit/contactUs/ContactUs";

export default function App({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
         </head>
         <body>
            <ThemeProvider theme={theme}>
               {/* <Header /> */}
               {children}
               <ContactUs />
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
