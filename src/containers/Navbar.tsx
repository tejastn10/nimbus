import { FC } from "react";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme/ThemeToggle";

import { LineGrow } from "@/components/animated/LineGrow";
import { Dock, DockIcon } from "@/components/animated/Dock";

import { buttonVariants } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

import { DATA } from "@/data/resume";

import { cx } from "@/utils/tailwind";
import { Icons } from "@/components/icons/Icons";

const Navbar: FC = () => {
	return (
		<nav
			className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14"
			aria-label="Main navigation"
		>
			<div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />

			<Dock
				className={cx(
					"relative mx-auto flex min-h-full h-full items-center px-1 pointer-events-auto transform-gpu",
					// Light mode styles
					"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
					// Dark mode styles
					"dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.2)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
				)}
			>
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={"/"}
								className={cx(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
								aria-label="Home"
							>
								<Icons.home className="size-4" aria-hidden="true" />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Home</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>

				<LineGrow className="h-full w-1/2 px-2" direction="vertical" />

				{DATA.navbar.map((item, index) => (
					<DockIcon key={index}>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={item.href}
									className={cx(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
									aria-label={item.label}
								>
									<item.icon className="size-4" aria-hidden="true" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>{item.label}</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				))}

				<LineGrow className="h-full w-1/2 px-2" direction="vertical" />

				{Object.entries(DATA.showcase)
					.filter(([, showcase]) => showcase.navbar)
					.map(([name, showcase]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={showcase.url}
										className={cx(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
										aria-label={`Visit ${name}`}
									>
										<showcase.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p className="capitalize">{name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}

				<LineGrow className="h-full w-1/2 px-2" direction="vertical" />

				{Object.entries(DATA.contact.social)
					.filter(([, social]) => social.navbar)
					.map(([name, social]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										target="_blank"
										href={social.url}
										rel="noopener noreferrer"
										className={cx(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
										aria-label={`Visit ${name}`}
									>
										<social.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p className="capitalize">{name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}

				<LineGrow className="h-full w-1/2 px-2" direction="vertical" />

				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<ThemeToggle />
						</TooltipTrigger>
						<TooltipContent>
							<p>Theme</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
			</Dock>
		</nav>
	);
};

export { Navbar };
