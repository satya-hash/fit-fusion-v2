import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/logo1.png";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between px-5 md:px-10 py-5  w-full max-w-screen-xl left-1/2 -translate-x-1/2 fixed z-20 md:top-3 top-0 bg-white md:rounded-xl ">
			<Link href="/" className="logo">
				{" "}
				<Image src={Logo} alt="logo" width={100} height={100} />{" "}
			</Link>
			<div className="navkeys">
				<ul className="flex gap-5 items-center">
					<Link
						href="/"
						className={` font-medium text-lg ease-in-out transition`}>
						{" "}
						Home{" "}
					</Link>
					<a className={`font-medium text-lg ease-in-out transition `}>
						{" "}
						Exercises{" "}
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
