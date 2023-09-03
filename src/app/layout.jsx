import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ContextProvider from "@/context/ContextProvider";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
	title: "FitFusion - Elevate Your Fitness Journey",
	description:
		"ransform your fitness journey with FitFusion, your all-in-one fitness app. Discover a diverse fusion of workouts, tailored to every fitness level. From energizing cardio to muscle-building strength training and the calming embrace of yoga, FitFusion has it all. Elevate your health and wellness with our seamless blend of exercise styles. Join us today and embark on a journey towards a stronger, happier you.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ContextProvider>
					<Navbar />
					{children}
					<ToastContainer />

					<Footer />
				</ContextProvider>
				<ScrollToTop />
			</body>
		</html>
	);
}
