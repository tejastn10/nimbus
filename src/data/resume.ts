import { Icons } from "@/components/icons/Icons";

export const DATA = {
	initials: "TN",
	name: "Tejas Nikhar",

	url: "https://www.tejastn10.com",

	location: "Bangalore, INDIA",
	locationLink: "https://www.google.com/maps/place/bengaluru",

	description:
		"Software Engineer with a knack for creating and constantly learning. Obsessed with tech, design systems, and that new framework smell.",
	summary:
		"I began my software engineering journey in 2021 and am currently building creative-ops at [Rocketium](https://www.rocketium.com). I’m also enhancing my Python skills through the [BangPypers](https://www.meetup.com/bangpypers/) meet-up group.",
	avatarUrl: "/profile.jpeg",

	navbar: [
		{ href: "/", icon: Icons.home, label: "Home" },
		{ href: "/blog", icon: Icons.blog, label: "Blog" },
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
						"Automated image exports in AWS Lambda, ensuring integrity and efficiency. Designed BullMQ-based queues for real-time data updates and reliable processing of the image export",
						"Configured CI/CD with GitHub Actions, improving deployment and productivity.",
						"Developed Rocketium’s core video editor (similar to Adobe After Effects) with advanced features like precise timeline manipulation, keyframe movements, and layer snapping, enabling scalable video production.",
						"Addressed 800 vulnerabilities, achieving SOC2 compliance and system security.",
						"Implemented unified logging and resolved critical on-call issues for reliability.",
					],
				},
				{
					title: "Software Development Engineer I",
					start: "May 2021",
					end: "July 2022",
					description: [
						"Engineered custom data filters, optimizing analysis for Creative Analytics used by Airtel, ADA, Rappi.",
						"Enhanced front-end algorithms, supporting heavy asset processing and large datasets.",
						"Transitioned data calculations to back-end, boosting platform speed and efficiency.",
						"Built a new animation engine with WAAPI and upgraded video editor UI for seamless user interaction.",
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
		],
		[
			{ icon: Icons.node(), name: "Node.js" },
			{ icon: Icons.react(), name: "React" },
			{ icon: Icons.nestjs(), name: "Nest.js" },
			{ icon: Icons.express(), name: "Express" },
			{ icon: Icons.fastify(), name: "Fastify" },
			{ icon: Icons.nextjs(), name: "Next.js" },
			{ icon: Icons.flutter(), name: "Flutter" },
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
			{ icon: Icons.actions(), name: "Github Actions" },
		],
	],

	projects: [
		{
			title: "Verve",
			href: "https://github.com/tejastn10/verve",
			dates: "January 2025",
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
			image: "",
			video: "",
		},
		{
			title: "Halcyon",
			href: "https://github.com/tejastn10/halcyon",
			dates: "December 2024 - January 2025",
			featured: true,
			description:
				"Fast and lightweight Go-based CLI tool to detect and manage duplicate files effortlessly",
			technologies: ["Go", "Cobra", "Github Actions"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/halcyon",
					icon: Icons.github(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "Argus",
			href: "https://github.com/tejastn10/argus",
			dates: "November 2024 - December 2024",
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
			image: "",
			video: "",
		},
		{
			title: "Nimbus",
			href: "https://github.com/tejastn10/nimbus",
			dates: "October 2024 - Present",
			featured: false,
			description:
				"A personal portfolio built with Next.js and shadcn, designed to showcase projects and achievements with a sleek, developer-friendly design.",
			technologies: ["Next.js", "TypeScript", "shadcn", "TailwindCSS", "Vercel"],
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
			image: "",
			video: "",
		},
		{
			title: "ShoeShoppee",
			href: "https://github.com/tejastn10/ShoeShoppee",
			dates: "February 2021 - March 2021",
			featured: false,
			description:
				"An e-commerce website for shoes with a sleek black and white theme, showcasing animated UI components for a visually engaging shopping experience.",
			technologies: [
				"NodeJs",
				"TypeScript",
				"React",
				"Express",
				"Ant Design",
				"MongoDB",
				"Docker",
				"Nginx",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/ShoeShoppee",
					icon: Icons.github(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "Verdant",
			href: "https://github.com/tejastn10/verdant",
			dates: "July 2024 - August 2024",
			featured: true,
			description:
				"A starter template built with Turborepo, NestJS, React, and ViteJS for quickly launching projects. It’s flexible enough to add what you need, but expect it to be a work in progress!",
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
			image: "",
			video: "",
		},
		{
			title: "Eden",
			href: "https://github.com/tejastn10/eden",
			dates: "June 2024 - July 2024",
			featured: true,
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
			image: "",
			video: "",
		},
	],

	education: [
		{
			school: "University of Mumbai",
			href: "https://mu.ac.in/",
			degree: "Bachelor of Technology, Computer Engineering",
			logoUrl: "/mumbai.jpeg",
			start: "August 2017",
			end: "May 2021",
		},
	],
} as const;
