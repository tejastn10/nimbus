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
		{ href: "/blog", icon: Icons.blog, label: "Blog" },
		{ href: "/books", icon: Icons.books, label: "Books" },
		{ href: "/projects", icon: Icons.projects, label: "Projects" },
	],

	showcase: {
		GitHub: {
			name: "GitHub",
			url: "https://github.com/tejastn10",
			icon: Icons.github,

			navbar: true,
		},
	},

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
			company: "Habuild",
			href: "https://habuild.in",
			location: "Bangalore, India",
			logoUrl: "/habuild.png",
			start: "May 2025",
			end: "Present",
			roles: [
				{
					title: "Technical Lead",
					start: "May 2025",
					end: "Present",
					description: [
						"Spearheaded the creation of a production-grade NestJS service template to standardize and accelerate backend development across teams.",
						"Defined and documented best practices for scalable microservice architecture, enabling seamless migration of legacy services and ensuring consistent development standards.",
						"Built a centralized file service for managing uploads and downloads across all microservices, ensuring secure file handling and reducing duplication across codebases.",
						"Developed an internal campaign-launching tool that allows teams to trigger targeted campaigns via CSV uploads or user selection queries, integrating with both WATI and Cheerio servers for omnichannel delivery.",
					],
				},
			],
		},
		{
			company: "Rocketium",
			href: "https://rocketium.com",
			location: "Bangalore, India",
			logoUrl: "/rocketium.png",
			start: "May 2021",
			end: "April 2025",
			roles: [
				{
					title: "Software Development Engineer II",
					start: "July 2022",
					end: "April 2025",
					description: [
						"Built a rule-based brand safety validation system using the json-rules-engine library to ensure that all creatives and ads generated within the editor complied with workspace-specific brand guidelines. This system ran validations during the editing process, helping maintain brand integrity in real time.",
						"Developed a Brand Safety feature for analyzing GIFs and videos using AWS Step Functions and Lambda. This feature enabled precise frame-by-frame content moderation by integrating Google Vision for in-depth analysis, improving brand safety and compliance.",
						"Designed and implemented a scalable version history system to handle large datasets efficiently by leveraging AWS S3 for storage and AWS Lambda for processing. Enhanced performance and storage efficiency by utilizing Google's Brotli compression.",
						"Configured lifecycle policies for AWS S3 buckets to automatically expire and delete outdated code archives, significantly reducing long-term storage costs and helping manage S3 billing effectively.",
						"Optimized AWS CloudWatch log retention for Lambda functions by setting a two-week retention policy, minimizing unnecessary storage and reducing operational costs.",
						"Created a custom GitHub Action to streamline the deployment of Docker-based AWS Lambdas as the team transitioned to containerized functions. This action enabled seamless deployment to specific aliases/environments while ensuring correct IAM roles and permissions were consistently applied.",
						"Automated the image export process using AWS Lambda, ensuring high-quality output, integrity of images, and efficient processing. Designed and implemented BullMQ-based queues that provided real-time data updates and reliable processing for image exports, significantly improving operational speed.",
						"Added a dedicated mechanism for automatic export of failed or stuck projects from the legacy (v1) editor, consolidating all export operations into a single API and scheduling it using AWS Lambda for reliable recovery.",
						"Set up comprehensive monitoring for both cost and infrastructure usage across AWS services, integrating alerts with Amazon SNS and Slack to proactively manage budget and resource consumption.",
						"Led the effort to address and fix over 800 vulnerabilities across the system, successfully achieving SOC2 compliance and greatly enhancing the security posture of the platform.",
						"Migrated over 65 AWS Lambda functions from Node.js 14 to 18 and then to 20, ensuring compatibility and long-term support. Also updated all associated npm packages and dependencies to align with the latest runtime requirements.",
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
						"Set up Husky and Commitlint across all repositories to enforce consistent commit message formats and code formatting standards, ensuring a unified and maintainable codebase across all developers.",
						"Enhanced the front-end algorithms for handling large asset processing, which allowed the system to efficiently manage large datasets and improve the user experience.",
						"Established PR templates and enforced a rigorous code review process, which improved code quality, consistency, and team collaboration.",
						"Transitioned data-intensive calculations from the front-end to the back-end, boosting platform speed and efficiency by reducing client-side load and enhancing data processing capabilities.",
						"Enhanced the video editor’s property and styling system to support all relevant features previously available in the image editor, ensuring consistency and extending full styling capabilities to video elements.",
						"Built a modular context menu system within the editor, allowing seamless integration of new menu options and dynamic handling of positioning and height, improving usability and developer experience.",
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
			title: "Srotas",
			href: "https://github.com/tejastn10/srotas",
			purpose: "Event Management",
			featured: false,
			isTemplate: false,
			description:
				"A utility package providing event handler functions like debounce and throttle for efficient function execution. Built with TypeScript and optimized for React projects.",
			technologies: ["React", "TypeScript", "Vite", "ESLint", "Prettier", "Vitest"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/srotas",
					icon: Icons.github(),
				},
				{
					type: "NPM",
					href: "https://www.npmjs.com/package/srotas",
					icon: Icons.npm(),
				},
				{
					type: "Yarn",
					href: "https://classic.yarnpkg.com/en/package/srotas",
					icon: Icons.yarn(),
				},
			],
		},
		{
			title: "AWS-Lambda-Radar",
			href: "https://github.com/tejastn10/aws-lambda-radar",
			purpose: "Serverless Monitoring",
			featured: true,
			isTemplate: false,
			description:
				"Streamlined middleware for enhanced Lambda logging and error handling with automatic context capture for better traceability.",
			technologies: ["NodeJS", "AWS Lambda", "TypeScript", "CloudWatch"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/aws-lambda-radar",
					icon: Icons.github(),
				},
				{
					type: "NPM",
					href: "https://www.npmjs.com/package/aws-lambda-radar",
					icon: Icons.npm(),
				},
				{
					type: "Yarn",
					href: "https://classic.yarnpkg.com/en/package/aws-lambda-radar",
					icon: Icons.yarn(),
				},
			],
		},
		{
			title: "Quill",
			href: "https://github.com/tejastn10/quill",
			purpose: "Version Control",
			featured: true,
			isTemplate: false,
			description:
				"A lightweight Git clone in Go that explores versioning, file diffs, and object storage to understand distributed version control systems.",
			technologies: ["Go", "Cobra", "Github Actions"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/quill",
					icon: Icons.github(),
				},
				{
					type: "Curl",
					href: "curl -sSf https://raw.githubusercontent.com/tejastn10/quill/main/scripts/install.sh | bash",
					icon: Icons.bash(),
				},
			],
		},
		{
			title: "Brimstone",
			href: "https://github.com/tejastn10/brimstone",
			purpose: "Desktop Application Template",
			featured: false,
			isTemplate: true,
			description:
				"Modern Electron template with React and TypeScript, featuring Vite for fast development and pre-configured tools like ESLint, Prettier, and Husky.",
			technologies: [
				"Electron",
				"React",
				"TypeScript",
				"Vite",
				"ESLint",
				"Prettier",
				"Husky",
				"Commitlint",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/brimstone",
					icon: Icons.github(),
				},
			],
		},
		{
			title: "Celestria",
			href: "https://github.com/tejastn10/celestria",
			purpose: "Code Snippet Generator",
			featured: false,
			isTemplate: false,
			description:
				"An elegant Next.js application for generating, customizing, and sharing beautiful code snippets with support for multiple languages, themes, and export options.",
			technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/celestria",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://celestria.vercel.app",
					icon: Icons.link(),
				},
			],
		},
		{
			title: "Nest Pingbot",
			href: "https://github.com/tejastn10/nest-pingbot",
			purpose: "Notifications",
			featured: true,
			isTemplate: false,
			description:
				"A NestJS messaging module for Slack and Discord notifications, built with a focus on simplicity and ease of use.",
			technologies: ["NestJS", "TypeScript", "Slack API", "Discord API"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/nest-pingbot",
					icon: Icons.github(),
				},
				{
					type: "NPM",
					href: "https://www.npmjs.com/package/nest-pingbot",
					icon: Icons.npm(),
				},
				{
					type: "Yarn",
					href: "https://classic.yarnpkg.com/en/package/nest-pingbot",
					icon: Icons.yarn(),
				},
			],
		},
		{
			title: "Gaia",
			href: "https://github.com/tejastn10/gaia",
			purpose: "Git Tools",
			featured: true,
			isTemplate: false,
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
			isTemplate: false,
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
			isTemplate: false,
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
			isTemplate: true,
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
			],
		},
		{
			title: "Hearth",
			href: "https://github.com/tejastn10/hearth",
			purpose: "Backend Template",
			featured: false,
			isTemplate: true,
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
			],
		},
		{
			title: "Verve",
			href: "https://github.com/tejastn10/verve",
			purpose: "AI Automation",
			featured: false,
			isTemplate: false,
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
			featured: false,
			isTemplate: false,
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
			isTemplate: false,
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
			isTemplate: false,
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
			featured: false,
			isTemplate: true,
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
			],
		},
		{
			title: "Eden",
			href: "https://github.com/tejastn10/eden",
			purpose: "React Starter",
			featured: false,
			isTemplate: true,
			description:
				"A lightweight front-end starter template with Vite, React, ESLint, Prettier, and Commitlint, ready for quick and clean project setups.",
			technologies: ["TypeScript", "React", "ViteJS", "ESLint", "Prettier", "Husky", "Commitlint"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/eden",
					icon: Icons.github(),
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
