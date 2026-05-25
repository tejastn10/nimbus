import { Icons } from "@/components/icons/Icons";

export const DATA = {
	initials: "TN",
	name: "Tejas Nikhar",
	logoName: "tn10",

	url: "https://www.tejastn10.com",

	location: "Bangalore, INDIA",
	locationLink: "https://www.google.com/maps/place/bengaluru",

	description:
		"Software Engineer with a knack for creating and constantly learning. Obsessed with tech, design systems, and that new framework smell.",
	avatarUrl: "/profile.jpeg",

	about: {
		content: [
			{
				text: "I began my software engineering journey in 2021 and am currently a Technical Lead at ",
				isLink: false,
			},
			{
				text: "HaBuild",
				url: "https://www.habuild.in",
				isLink: true,
			},
			{
				text: " where I'm helping shape product and engineering decisions. You might also find me at ",
				isLink: false,
			},
			{
				text: "BangPypers",
				url: "https://www.meetup.com/bangpypers/",
				isLink: true,
			},
			{
				text: " or ",
				isLink: false,
			},
			{
				text: "GitTogether",
				url: "https://www.meetup.com/gittogether-bengaluru/",
				isLink: true,
			},
			{
				text: " meetups, continuing to level up my Python, AI, and other skills while meeting fellow developers.",
				isLink: false,
			},
		],
	},

	navbar: [
		{ href: "/blog", icon: Icons.blog, label: "Blog" },
		{ href: "/work", icon: Icons.work, label: "Work" },
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
			X: {
				name: "X",
				url: "https://x.com/tejastn10",
				icon: Icons.X,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/tejastn10",
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
						"Led a cross-service member-unification migration consolidating three legacy member tables (paid, free, college) and 35+ downstream tables across 5 microservices into a single UUID-keyed accounts + members model. Designed a 7-phase rollout — NestJS-wrapper porting over the legacy Express app, dual-write, historical backfill of 5M+ records, GrowthBook-gated percentage cutover, legacy archival — and personally monitored the production DB for ~3 weeks post-cutover before disabling dual-write.",
						"Recovered a production outage where ECS tasks across services were dying from Postgres connection exhaustion on a shared primary; routed reads to existing-but-unused replicas overnight, shifting ~60–70% of read traffic and bringing p50 reads to 2–5 ms / p95 to 15–26 ms across major services. Extended the same replica pattern to Redis.",
						"Introduced GrowthBook to the engineering org as the unified feature-flag and experimentation platform; first in the org to adopt it at controller level — gating API rollouts (legacy → v2 cutovers, dual-write toggles, percentage-based read migration) directly inside NestJS request handlers. Pattern is now the standard across the platform.",
						"Designed and shipped a Lambda-based OTP delivery system with isolated senders per channel (WhatsApp via WABA, SMS via gateway) and per environment, including setting up a WhatsApp Business Account (WABA) for global OTP-over-WhatsApp. System-side error rate is 0% in production; overall end-to-end delivery success is 97%, with residual failures attributable entirely to upstream provider/gateway.",
						"Architected a Docker-based Lambda scaffold repository as the org-wide standard for containerized serverless functions; serves as the deployment base for all production Lambdas (OTP senders, file processors, scheduled jobs, and more), each containerized, versioned, and deployed via ECR — with Node.js and Python templates and local SQS/API Gateway emulation for developer testing.",
						"Re-architected the free-member app flow to eliminate a data-exposure risk in the registration API response: split a single endpoint into a frictionless public challenge-registration flow and an OTP-gated, rate-limited dashboard-login flow. Praised by the Product head and founders; directly enabled personalized journeys for repeat-challenge members by surfacing a clean returning-member signal.",
						"Overhauled the authentication layer across the platform and unified registration for all frontends (free and paid) into a single source of truth, replacing separate sign-up paths and eliminating duplicate account creation.",
						"Partnered with Marketing to RCA and rebuild the source-attribution pipeline for free-member registrations and reactivation flows, restoring attribution for previously-untracked returning-user and reactivation events across web, mobile-app, and Truecaller surfaces.",
						"Implemented a Redis-backed rate-limiting layer across all major APIs, securing previously open endpoints that were serving multiple consumers without any throttling.",
						"Spearheaded a production-grade NestJS service template adopted as the standard backend starter across the org; built a centralized file service for uploads/downloads across all microservices, removing duplicated S3 client code and tightening secure file handling.",
						"Centralized GitHub Actions workflows (lint, format, unit tests) into an org-level shared-workflows folder, enforcing consistent CI standards across all major repositories without duplicated pipeline config.",
						"Set up a robust development environment for all microservices, enabling teams to deploy any branch to the dev environment via GitHub Actions, reducing feature validation turnaround time.",
						"Established standardized naming conventions across AWS resources, bringing consistency and clarity to cloud infrastructure management.",
						"Initiated a new Link service in Go, laying the architectural foundation before ownership was transitioned to another team.",
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
						"Built a Brand Safety feature for analyzing GIFs and videos using AWS Step Functions and Lambda, integrating Google Vision for precise frame-by-frame content moderation to ensure ad creatives complied with brand safety guidelines. Also built a rule-based brand safety validation system using json-rules-engine that ran in real-time during editing, enforcing workspace-specific brand guidelines on all creatives.",
						"Designed and implemented a scalable version history system on AWS S3 + Lambda using Google's Brotli compression for storage efficiency; configured S3 lifecycle policies to automatically expire outdated code archives, significantly reducing long-term storage costs.",
						"Led the effort to identify and fix 800+ system vulnerabilities, successfully achieving SOC2 compliance and greatly enhancing the security posture of the platform.",
						"Authored a custom GitHub Action for CI/CD deployment of Docker-based Lambdas to specific aliases/environments with automatic IAM role and permission enforcement.",
						"Migrated 65+ AWS Lambda functions from Node.js 14 → 18 → 20, updating all associated npm packages and dependencies to align with the latest runtime requirements.",
						"Automated the image export process via Puppeteer-in-Lambda with BullMQ queues providing real-time status updates and reliable retry handling for all export operations. Added a dedicated recovery mechanism for failed/stuck projects in the legacy v1 editor, consolidating all export operations into a single scheduled Lambda.",
						"Set up comprehensive monitoring for cost and infrastructure usage across AWS services, integrating alerts with Amazon SNS and Slack to proactively manage budget and resource consumption.",
						"Contributed to Rocketium's core video editor (similar to Adobe After Effects): precise timeline manipulation, keyframe movements, and layer snapping for scalable video production.",
						"Set up CI/CD pipelines using GitHub Actions, streamlining the deployment process and improving overall developer productivity.",
					],
				},
				{
					title: "Software Development Engineer I",
					start: "May 2021",
					end: "July 2022",
					description: [
						"Spearheaded the development of a new animation engine using the Web Animations API (WAAPI), significantly improving the performance and scalability of the video editor’s animation capabilities.",
						"Engineered custom data filter solutions for the Creative Analytics platform, streamlining data analysis for clients including Airtel, ADA, and Rappi; transitioned data-intensive front-end calculations to the back-end to reduce client-side load.",
						"Established CI hygiene across all repositories: Husky, Commitlint, PR templates, and a rigorous code-review process, creating a unified and maintainable codebase across the team.",
						"Implemented a unified logging system that improved system monitoring and diagnostics; addressed and resolved several critical on-call issues, ensuring higher reliability and uptime for the platform.",
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
			title: "Slate",
			href: "https://github.com/Kosha-Nirman/slate",
			purpose: "CLI Presentations",
			featured: true,
			isTemplate: false,
			description:
				"A powerful command-line presentation tool that lets you create, manage, and deliver presentations directly from your terminal",
			technologies: ["Go", "Cobra", "CLI", "Presentations"],
			links: [
				{
					type: "Source",
					href: "https://github.com/Kosha-Nirman/slate",
					icon: Icons.github(),
				},
			],
		},
		{
			title: "Tether",
			href: "https://github.com/Kosha-Nirman/tether",
			purpose: "Short Link Service",
			featured: true,
			isTemplate: false,
			description:
				"A production-ready short URL service demonstrating clean architecture and industry best practices.",
			technologies: ["Go", "Gin", "Github Actions", "Short-Link"],
			links: [
				{
					type: "Source",
					href: "https://github.com/Kosha-Nirman/tether",
					icon: Icons.github(),
				},
			],
		},
		{
			title: "Cortex",
			href: "https://github.com/Kosha-Nirman/cortex",
			purpose: "Subdomain Discovery",
			featured: true,
			isTemplate: false,
			description:
				"A comprehensive, multi-technique subdomain reconnaissance engine built for modern security operations",
			technologies: ["Go", "Cobra", "Github Actions", "Sub-domains"],
			links: [
				{
					type: "Source",
					href: "https://github.com/Kosha-Nirman/cortex",
					icon: Icons.github(),
				},
				{
					type: "Curl",
					href: "curl -sSf https://raw.githubusercontent.com/Kosha-Nirman/cortex/main/scripts/install.sh | bash",
					icon: Icons.bash(),
				},
			],
		},
		{
			title: "Dash",
			href: "https://github.com/tejastn10/dash",
			purpose: "Network Speedtest tool",
			featured: false,
			isTemplate: false,
			description:
				"A sleek Next.js starter template for building performance-focused frontend apps. Dash measures internet speed (download, upload, latency) with a clean, minimal UI.",
			technologies: [
				"Next.js",
				"React",
				"TypeScript",
				"TailwindCSS",
				"BiomeJS",
				"Husky",
				"Commitlint",
				"Vercel",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/dash",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://dash-eight-gamma.vercel.app/",
					icon: Icons.link(),
				},
			],
		},
		{
			title: "Ember",
			href: "https://github.com/tejastn10/ember",
			purpose: "Backend Observability Template",
			featured: false,
			isTemplate: true,
			description:
				"A scalable NestJS starter template with LGTM stack (Loki, Grafana, Tempo, Mimir) integration for full observability. Comes preconfigured with BiomeJS Husky, and Commitlint to ensure clean code and seamless developer experience.",
			technologies: [
				"NestJS",
				"TypeScript",
				"OpenTelemetry",
				"Loki",
				"Tempo",
				"Mimir",
				"Grafana",
				"Fastify",
				"BiomeJS",
				"Husky",
				"Commitlint",
				"Docker",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/ember",
					icon: Icons.github(),
				},
			],
		},
		{
			title: "Papyrus",
			href: "https://github.com/tejastn10/papyrus",
			purpose: "PDF Password Management",
			featured: false,
			isTemplate: false,
			description:
				"A minimalist PDF utility that allows you to remove or add password protection to PDF files. Built using Python and FastAPI with a clean React frontend. Ideal for quick, secure, client-side PDF operations without file storage.",
			technologies: ["Python", "FastAPI", "React", "AntD", "Vite"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/papyrus",
					icon: Icons.github(),
				},
			],
		},
		{
			title: "Hollow",
			href: "https://github.com/tejastn10/hollow",
			purpose: "Network Packet Analysis",
			featured: true,
			isTemplate: false,
			description:
				"A modern, Electron-based network packet analyzer with a sleek UI, built using TypeScript and React. Designed as a Wireshark alternative for real-time packet inspection and analysis.",
			technologies: ["Electron", "TypeScript", "React", "tcpdump", "Ant Design", "Vite"],
			links: [
				{
					type: "Source",
					href: "https://github.com/tejastn10/hollow",
					icon: Icons.github(),
				},
				{
					type: "Download",
					href: "https://github.com/tejastn10/hollow/releases",
					icon: Icons.projects(),
				},
			],
		},
		{
			title: "Srotas",
			href: "https://github.com/tejastn10/srotas",
			purpose: "Event Management",
			featured: false,
			isTemplate: false,
			description:
				"A utility package providing event handler functions like debounce and throttle for efficient function execution. Built with TypeScript and optimized for React projects.",
			technologies: ["React", "TypeScript", "Vite", "BiomeJS", "Vitest"],
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
			featured: false,
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
			featured: false,
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
				"Modern Electron template with React and TypeScript, featuring Vite for fast development and pre-configured tools like BiomeJS and Husky.",
			technologies: ["Electron", "React", "TypeScript", "Vite", "BiomeJS", "Husky", "Commitlint"],
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
			featured: false,
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
			featured: false,
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
				"A Next.js template with custom BiomeJS rules for consistent code quality. It includes Tailwind CSS, Husky, and Commitlint for a seamless developer experience.",
			technologies: ["NextJS", "TypeScript", "Tailwindcss", "BiomeJS", "Husky", "Commitlint"],
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
				"A minimal and scalable NestJS starter template with BiomeJS Husky, and Commitlint preconfigured for clean and efficient backend development.",
			technologies: ["NestJS", "TypeScript", "Docker", "Fastify", "BiomeJS", "Husky", "Commitlint"],
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
				"An AI-driven X bot that delivers daily personalized motivational messages to different audiences. It ensures a dose of positivity and inspiration every day!",
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
			featured: false,
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
				"A lightweight front-end starter template with Vite, React, BiomeJS and Commitlint, ready for quick and clean project setups.",
			technologies: ["TypeScript", "React", "ViteJS", "BiomeJS", "Husky", "Commitlint"],
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
