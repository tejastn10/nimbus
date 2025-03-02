import { Icons } from "@/components/icons/Icons";

export const DATA = {
	initials: "TN",
	name: "Tejas Nikhar",

	url: "https://www.tejastn10.com",

	location: "Bangalore, INDIA",
	locationLink: "https://www.google.com/maps/place/bengaluru",

	description:
		"Software Engineer with a knack for creating and constantly learning. Obsessed with tech, design systems, and that new framework smell.",
	avatarUrl: "/profile.jpeg",

	navbar: [
		{ href: "/", icon: Icons.home, label: "Home" },
		{ href: "/blog", icon: Icons.blog, label: "Blog" },
		{ href: "/projects", icon: Icons.projects, label: "Projects" },
	],

	contact: {
		email: "tejastn10@gmail.com",
		tel: "+91 89280 88153",
		social: {
			medium: {
				name: "Medium",
				url: "https://tejastn10.medium.com/",
				icon: Icons.medium,

				navbar: true,
			},
			GitHub: {
				name: "GitHub",
				url: "https://github.com/tejastn10",
				icon: Icons.github,

				navbar: true,
			},
			Twitter: {
				name: "Twitter",
				url: "https://x.com/tejastn10",
				icon: Icons.twitter,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/tn10/",
				icon: Icons.linkedin,

				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Rocketium",
			href: "https://rocketium.com",
			location: "Bangalore, India",
			logoUrl: "/rocketium.png",
			start: "May 2021",
			end: undefined,
			roles: [
				{
					title: "Software Development Engineer II",
					start: "July 2022",
					end: undefined,
					description: [
						"Developed a Brand Safety feature for analyzing GIFs and videos using AWS Step Functions and Lambda. This feature enabled precise frame-by-frame content moderation by integrating Google Vision for in-depth analysis, improving brand safety and compliance.",
						"Designed and implemented a scalable version history system to handle large datasets efficiently by leveraging AWS S3 for storage and AWS Lambda for processing. Enhanced performance and storage efficiency by utilizing Google's Brotli compression.",
						"Automated the image export process using AWS Lambda, ensuring high-quality output, integrity of images, and efficient processing. Designed and implemented BullMQ-based queues that provided real-time data updates and reliable processing for image exports, significantly improving operational speed.",
						"Led the effort to address and fix over 800 vulnerabilities across the system, successfully achieving SOC2 compliance and greatly enhancing the security posture of the platform.",
						"Set up CI/CD pipelines using GitHub Actions, which streamlined the deployment process, significantly reducing downtime and improving overall developer productivity.",
						"Contributed to the development of Rocketium's core video editor, which is similar to Adobe After Effects, by adding advanced features such as precise timeline manipulation, keyframe movements, and layer snapping, allowing for scalable and high-quality video production.",
					],
				},
				{
					title: "Software Development Engineer I",
					start: "May 2021",
					end: "July 2022",
					description: [
						"Spearheaded the development of a new animation engine using the Web Animations API (WAAPI), which was integrated into Rocketium's video editor. This new engine significantly improved the performance and user experience by providing smooth and scalable animation capabilities.",
						"Implemented a unified logging system that improved system monitoring and diagnostics. Addressed and resolved several critical on-call issues, ensuring higher reliability and uptime for the platform.",
						"Enhanced the front-end algorithms for handling large asset processing, which allowed the system to efficiently manage large datasets and improve the user experience.",
						"Transitioned data-intensive calculations from the front-end to the back-end, boosting platform speed and efficiency by reducing client-side load and enhancing data processing capabilities.",
					],
				},
			],
		},
	],

	skills: [
		[
			{ icon: Icons.javascript(), name: "JavaScript" },
			{ icon: Icons.typescript(), name: "TypeScript" },
			{ icon: Icons.python(), name: "Python" },
			{ icon: Icons.dart(), name: "Dart" },
			{ icon: Icons.go(), name: "Go" },
			{ icon: Icons.git(), name: "Git" },
		],
		[
			{ icon: Icons.react(), name: "React" },
			{ icon: Icons.redux(), name: "Redux" },
			{ icon: Icons.reduxsaga(), name: "Redux Saga" },
			{ icon: Icons.nextjs(), name: "Next.js" },
			{ icon: Icons.tailwind(), name: "Tailwind CSS" },
			{ icon: Icons.flutter(), name: "Flutter" },
		],
		[
			{ icon: Icons.rest(), name: "Rest" },
			{ icon: Icons.websockets(), name: "WebSockets" },
			{ icon: Icons.node(), name: "Node.js" },
			{ icon: Icons.nestjs(), name: "Nest.js" },
			{ icon: Icons.express(), name: "Express" },
			{ icon: Icons.fastify(), name: "Fastify" },
			{ icon: Icons.jest(), name: "Jest" },
		],
		[
			{ icon: Icons.postgres(), name: "Postgres" },
			{ icon: Icons.mongo(), name: "MongoDB" },
			{ icon: Icons.redis(), name: "Redis" },
			{ icon: Icons.firebase(), name: "Firebase" },
		],
		[
			{ icon: Icons.docker(), name: "Docker" },
			{ icon: Icons.vercel(), name: "Vercel" },
			{ icon: Icons.aws(), name: "AWS" },
			{ icon: Icons.nginx(), name: "Nginx" },
			{ icon: Icons.actions(), name: "Github Actions" },
		],
	],

	projects: [
		{
			title: "Gaia",
			href: "https://github.com/tejastn10/gaia",
			purpose: "Git Tools",
			featured: true,
			description:
				"CLI tool to seamlessly update the first commit message in a Git repository without manual intervention.",
			technologies: ["Go", "Cobra", "Github Actions"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/gaia",
					icon: Icons.github(),
				},
				{
					type: "Curl",
					href: "curl -sSf https://raw.githubusercontent.com/tejastn10/gaia/main/scripts/install.sh | bash",
					icon: Icons.bash(),
				},
			],
		},
		{
			title: "Nyx",
			href: "https://github.com/tejastn10/nyx",
			purpose: "Visual Effects",
			featured: false,
			description:
				"A Next.js project that recreates the iconic Matrix digital rain effect using the Canvas API. It delivers a smooth, visually striking animation optimized for performance.",
			technologies: ["NextJS", "React", "TypeScript", "Canvas", "TailwindCSS", "Vercel"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/nyx",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://nyx-puce.vercel.app",
					icon: Icons.link(),
				},
			],
		},
		{
			title: "Acre",
			href: "https://github.com/tejastn10/acre",
			purpose: "Financial Tools",
			featured: false,
			description:
				"A sleek and interactive return calculator that visualizes investment growth over time using an Area Chart with Indian currency formatting.",
			technologies: ["NextJS", "React", "TypeScript", "Recharts", "TailwindCSS", "Vercel"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/acre",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://acre-red.vercel.app",
					icon: Icons.link(),
				},
			],
		},
		{
			title: "Arbor",
			href: "https://github.com/tejastn10/arbor",
			purpose: "Frontend Template",
			featured: false,
			description:
				"A Next.js template with custom ESLint and Prettier rules for consistent code quality. It includes Tailwind CSS, Husky, and Commitlint for a seamless developer experience.",
			technologies: [
				"NextJS",
				"TypeScript",
				"Tailwindcss",
				"ESLint",
				"Prettier",
				"Husky",
				"Commitlint",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/arbor",
					icon: Icons.github(),
				},
				{
					type: "Template",
					href: "",
					icon: Icons.template(),
				},
			],
		},
		{
			title: "Hearth",
			href: "https://github.com/tejastn10/hearth",
			purpose: "Backend Template",
			featured: true,
			description:
				"A minimal and scalable NestJS starter template with ESLint, Prettier, Husky, and Commitlint preconfigured for clean and efficient backend development.",
			technologies: [
				"NestJS",
				"TypeScript",
				"Docker",
				"Fastify",
				"ESLint",
				"Prettier",
				"Husky",
				"Commitlint",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/hearth",
					icon: Icons.github(),
				},
				{
					type: "Template",
					href: "",
					icon: Icons.template(),
				},
			],
		},
		{
			title: "Verve",
			href: "https://github.com/tejastn10/verve",
			purpose: "AI Automation",
			featured: false,
			description:
				"An AI-driven Twitter bot that delivers daily personalized motivational messages to different audiences. It ensures a dose of positivity and inspiration every day!",
			technologies: ["Python", "Tweepy", "Hugging Face", "GPT-2", "Poetry"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/verve",
					icon: Icons.github(),
				},
			],
		},
		{
			title: "Halcyon",
			href: "https://github.com/tejastn10/halcyon",
			purpose: "File Management",
			featured: true,
			description:
				"Fast and lightweight Go-based CLI tool to detect and manage duplicate files effortlessly.",
			technologies: ["Go", "Cobra", "Github Actions"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/halcyon",
					icon: Icons.github(),
				},
				{
					type: "Curl",
					href: "curl -sSf https://raw.githubusercontent.com/tejastn10/halcyon/main/scripts/install.sh | bash",
					icon: Icons.bash(),
				},
			],
		},
		{
			title: "Argus",
			href: "https://github.com/tejastn10/argus",
			purpose: "Monitoring",
			featured: true,
			description:
				"An uptime monitoring service built with Go, containerized with Docker for ease of use. The Docker image is published on Docker Hub, making it accessible and ready for deployment.",
			technologies: ["Go", "Github Actions", "Docker"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/argus",
					icon: Icons.github(),
				},
				{
					type: "Registry",
					href: "https://hub.docker.com/r/tejastn10/argus",
					icon: Icons.docker(),
				},
				{
					type: "Registry",
					href: "https://github.com/tejastn10/argus/pkgs/container/argus",
					icon: Icons.container(),
				},
			],
		},
		{
			title: "Nimbus",
			href: "https://github.com/tejastn10/nimbus",
			purpose: "Portfolio",
			featured: false,
			description:
				"A personal portfolio built with Next.js and shadcn, designed to showcase projects and achievements with a sleek, developer-friendly design.",
			technologies: ["NextJS", "TypeScript", "shadcn", "TailwindCSS", "Vercel"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/nimbus",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://nimbus-ten.vercel.app",
					icon: Icons.link(),
				},
			],
		},
		{
			title: "Verdant",
			href: "https://github.com/tejastn10/verdant",
			purpose: "Monorepo Setup",
			featured: true,
			description:
				"A starter template built with Turborepo, NestJS, React, and ViteJS for quickly launching projects. It's flexible enough to add what you need, but expect it to be a work in progress!",
			technologies: [
				"Turborepo",
				"NodeJs",
				"TypeScript",
				"React",
				"NestJS",
				"ViteJS",
				"ESLint",
				"Prettier",
				"Husky",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/verdant",
					icon: Icons.github(),
				},
				{
					type: "Template",
					href: "",
					icon: Icons.template(),
				},
			],
		},
		{
			title: "Eden",
			href: "https://github.com/tejastn10/eden",
			purpose: "React Starter",
			featured: false,
			description:
				"A lightweight front-end starter template with Vite, React, ESLint, Prettier, and Commitlint, ready for quick and clean project setups.",
			technologies: ["TypeScript", "React", "ViteJS", "ESLint", "Prettier", "Husky", "Commitlint"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/eden",
					icon: Icons.github(),
				},
				{
					type: "Template",
					href: "",
					icon: Icons.template(),
				},
			],
		},
	],

	education: [
		{
			school: "University of Mumbai",
			href: "https://mu.ac.in/",
			degree: "Bachelor of Technology, Computer Engineering",
			location: "Mumbai, India",
			logoUrl: "/mumbai.jpeg",
			start: "August 2017",
			end: "May 2021",
		},
	],
} as const;
