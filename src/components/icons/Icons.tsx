import { JSX } from "react";

import {
	SiAmazonwebservices,
	SiDart,
	SiDocker,
	SiExpress,
	SiFastify,
	SiFirebase,
	SiFlutter,
	SiGo,
	SiGithubactions,
	SiJest,
	SiJavascript,
	SiMedium,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiTypescript,
	SiVercel,
	SiFig,
	SiGnubash,
	SiTurborepo,
	SiRedux,
	SiReduxsaga,
	SiNginx,
	SiAndroid,
	SiAngular,
	SiAnsible,
	SiApple,
	SiBurpsuite,
	SiCapacitor,
	SiChai,
	SiCircleci,
	SiCivicrm,
	SiClickhouse,
	SiCloudflare,
	SiCypress,
	SiDatadog,
	SiDjango,
	SiFastapi,
	SiFlask,
	SiGitlab,
	SiGooglecloud,
	SiGraphql,
	SiJsonwebtokens,
	SiKotlin,
	SiKubernetes,
	SiMocha,
	SiMysql,
	SiOkta,
	SiOpencollective,
	SiRust,
	SiSass,
	SiSecurityscorecard,
	SiSocketdotio,
	SiSqlite,
	SiSupabase,
	SiSvelte,
	SiSwagger,
	SiSwift,
	SiTailwindcss,
	SiTerraform,
	SiVitest,
	SiVuedotjs,
	SiAuth0,
} from "react-icons/si";

import {
	RxChatBubble,
	RxChevronRight,
	RxCodesandboxLogo,
	RxGithubLogo,
	RxHome,
	RxLayers,
	RxLink2,
	RxLinkedinLogo,
	RxMoon,
	RxSun,
	RxGear,
	RxCalendar,
	RxReader,
	RxGlobe,
	RxCode,
	RxCheck,
} from "react-icons/rx";

import { RiTwitterXLine, RiDatabase2Line, RiMapPin3Line, RiTimer2Line } from "react-icons/ri";

import { GoContainer } from "react-icons/go";

import { VscAzure } from "react-icons/vsc";

import { TECH } from "@/constants/data";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icons = {
	// * UI Elements
	sun: (props?: IconProps) => <RxSun {...props} />,
	moon: (props?: IconProps) => <RxMoon {...props} />,
	link: (props?: IconProps) => <RxLink2 {...props} />,
	check: (props?: IconProps) => <RxCheck {...props} />,
	template: (props?: IconProps) => <SiFig {...props} />,
	reader: (props?: IconProps) => <RxReader {...props} />,
	calendar: (props?: IconProps) => <RxCalendar {...props} />,
	duration: (props?: IconProps) => <RiTimer2Line {...props} />,
	chevron: (props?: IconProps) => <RxChevronRight {...props} />,
	location: (props?: IconProps) => <RiMapPin3Line {...props} />,

	// * Navbar
	home: (props?: IconProps) => <RxHome {...props} />,
	blog: (props?: IconProps) => <RxLayers {...props} />,
	medium: (props?: IconProps) => <SiMedium {...props} />,
	github: (props?: IconProps) => <RxGithubLogo {...props} />,
	twitter: (props?: IconProps) => <RiTwitterXLine {...props} />,
	linkedin: (props?: IconProps) => <RxLinkedinLogo {...props} />,

	// * Home Page
	projects: (props?: IconProps) => <RxCodesandboxLogo {...props} />,
	contact: (props?: IconProps) => <RxChatBubble {...props} />,

	// * Languages
	javascript: (props?: IconProps) => <SiJavascript {...props} />,
	typescript: (props?: IconProps) => <SiTypescript {...props} />,
	python: (props?: IconProps) => <SiPython {...props} />,
	dart: (props?: IconProps) => <SiDart {...props} />,
	go: (props?: IconProps) => <SiGo {...props} />,
	rust: (props?: IconProps) => <SiRust {...props} />,
	bash: (props?: IconProps) => <SiGnubash {...props} />,

	// * Frontend Frameworks & Libraries
	react: (props?: IconProps) => <SiReact {...props} />,
	vue: (props?: IconProps) => <SiVuedotjs {...props} />,
	svelte: (props?: IconProps) => <SiSvelte {...props} />,
	angular: (props?: IconProps) => <SiAngular {...props} />,
	tailwind: (props?: IconProps) => <SiTailwindcss {...props} />,
	scss: (props?: IconProps) => <SiSass {...props} />,
	nextjs: (props?: IconProps) => <SiNextdotjs {...props} />,
	flutter: (props?: IconProps) => <SiFlutter {...props} />,
	redux: (props?: IconProps) => <SiRedux {...props} />,
	reduxsaga: (props?: IconProps) => <SiReduxsaga {...props} />,
	turborepo: (props?: IconProps) => <SiTurborepo {...props} />,

	// * Backend Frameworks & Technologies
	node: (props?: IconProps) => <SiNodedotjs {...props} />,
	nestjs: (props?: IconProps) => <SiNestjs {...props} />,
	express: (props?: IconProps) => <SiExpress {...props} />,
	fastify: (props?: IconProps) => <SiFastify {...props} />,
	fastapi: (props?: IconProps) => <SiFastapi {...props} />,
	django: (props?: IconProps) => <SiDjango {...props} />,
	flask: (props?: IconProps) => <SiFlask {...props} />,
	graphql: (props?: IconProps) => <SiGraphql {...props} />,
	rest: (props?: IconProps) => <SiSwagger {...props} />,
	websockets: (props?: IconProps) => <SiSocketdotio {...props} />,

	// * Databases
	database: (props?: IconProps) => <RiDatabase2Line {...props} />,
	postgres: (props?: IconProps) => <SiPostgresql {...props} />,
	mysql: (props?: IconProps) => <SiMysql {...props} />,
	mongo: (props?: IconProps) => <SiMongodb {...props} />,
	redis: (props?: IconProps) => <SiRedis {...props} />,
	sqlite: (props?: IconProps) => <SiSqlite {...props} />,
	firebase: (props?: IconProps) => <SiFirebase {...props} />,
	clickhouse: (props?: IconProps) => <SiClickhouse {...props} />,
	supabase: (props?: IconProps) => <SiSupabase {...props} />,

	// * Testing
	jest: (props?: IconProps) => <SiJest {...props} />,
	mocha: (props?: IconProps) => <SiMocha {...props} />,
	chai: (props?: IconProps) => <SiChai {...props} />,
	vitest: (props?: IconProps) => <SiVitest {...props} />,
	cypress: (props?: IconProps) => <SiCypress {...props} />,

	// * Cloud & DevOps
	aws: (props?: IconProps) => <SiAmazonwebservices {...props} />,
	azure: (props?: IconProps) => <VscAzure {...props} />,
	gcp: (props?: IconProps) => <SiGooglecloud {...props} />,
	docker: (props?: IconProps) => <SiDocker {...props} />,
	kubernetes: (props?: IconProps) => <SiKubernetes {...props} />,
	terraform: (props?: IconProps) => <SiTerraform {...props} />,
	ansible: (props?: IconProps) => <SiAnsible {...props} />,
	cloudflare: (props?: IconProps) => <SiCloudflare {...props} />,
	nginx: (props?: IconProps) => <SiNginx {...props} />,
	network: (props?: IconProps) => <RxGlobe {...props} />,
	vercel: (props?: IconProps) => <SiVercel {...props} />,
	container: (props?: IconProps) => <GoContainer {...props} />,

	// * CI/CD
	actions: (props?: IconProps) => <SiGithubactions {...props} />,
	gitlabci: (props?: IconProps) => <SiGitlab {...props} />,
	circleci: (props?: IconProps) => <SiCircleci {...props} />,

	// * Broader Concepts
	architecture: (props?: IconProps) => <RxLayers {...props} />,
	systemdesign: (props?: IconProps) => <SiOpencollective {...props} />,

	// * Mobile Development
	reactnative: (props?: IconProps) => <SiReact {...props} />,
	kotlin: (props?: IconProps) => <SiKotlin {...props} />,
	swift: (props?: IconProps) => <SiSwift {...props} />,
	android: (props?: IconProps) => <SiAndroid {...props} />,
	ios: (props?: IconProps) => <SiApple {...props} />,
	capacitor: (props?: IconProps) => <SiCapacitor {...props} />,

	// * Security
	oauth: (props?: IconProps) => <SiAuth0 {...props} />,
	jwt: (props?: IconProps) => <SiJsonwebtokens {...props} />,
	sso: (props?: IconProps) => <SiOkta {...props} />,
	encryption: (props?: IconProps) => <SiSecurityscorecard {...props} />,
	soc2: (props?: IconProps) => <SiCivicrm {...props} />,
	pentesting: (props?: IconProps) => <SiBurpsuite {...props} />,
	csp: (props?: IconProps) => <SiDatadog {...props} />,

	// * Misc
	code: (props?: IconProps) => <RxCode {...props} />,
	gear: (props?: IconProps) => <RxGear {...props} />,
};

const logos: Record<TECH, (props?: IconProps) => JSX.Element> = {
	// * General
	General: Icons.code,

	// * Frontend
	React: Icons.react,
	JavaScript: Icons.javascript,
	TypeScript: Icons.typescript,
	Dart: Icons.dart,
	Flutter: Icons.flutter,
	NextJS: Icons.nextjs,
	Redux: Icons.redux,
	ReduxSaga: Icons.reduxsaga,
	Vue: Icons.vue,
	Svelte: Icons.svelte,
	Angular: Icons.angular,
	TailwindCSS: Icons.tailwind,
	SCSS: Icons.scss,

	// * Backend
	NodeJS: Icons.node,
	NestJS: Icons.nestjs,
	Express: Icons.express,
	Python: Icons.python,
	FastAPI: Icons.fastapi,
	Django: Icons.django,
	Flask: Icons.flask,
	Go: Icons.go,
	Rust: Icons.rust,
	Turborepo: Icons.turborepo,
	GraphQL: Icons.graphql,
	REST: Icons.rest,
	WebSockets: Icons.websockets,

	// * Databases
	MongoDB: Icons.mongo,
	PostgreSQL: Icons.postgres,
	MySQL: Icons.mysql,
	Redis: Icons.redis,
	SQLite: Icons.sqlite,
	Firebase: Icons.firebase,
	ClickHouse: Icons.clickhouse,
	Supabase: Icons.supabase,

	// * Testing
	Jest: Icons.jest,
	Mocha: Icons.mocha,
	Chai: Icons.chai,
	Vitest: Icons.vitest,
	Cypress: Icons.cypress,

	// * Cloud & DevOps
	AWS: Icons.aws,
	Azure: Icons.azure,
	GCP: Icons.gcp,
	Docker: Icons.docker,
	Kubernetes: Icons.kubernetes,
	Bash: Icons.bash,
	Network: Icons.network,
	Terraform: Icons.terraform,
	Ansible: Icons.ansible,
	Cloudflare: Icons.cloudflare,
	NGINX: Icons.nginx,

	// * CI/CD
	GithubActions: Icons.actions,
	GitLabCI: Icons.gitlabci,
	CircleCI: Icons.circleci,

	// * Broader Concepts
	Architecture: Icons.gear,
	SystemDesign: Icons.architecture,

	// * Mobile Development
	ReactNative: Icons.reactnative,
	Kotlin: Icons.kotlin,
	Swift: Icons.swift,
	Android: Icons.android,
	iOS: Icons.ios,
	Capacitor: Icons.capacitor,

	// * Security
	OAuth: Icons.oauth,
	JWT: Icons.jwt,
	SSO: Icons.sso,
	Encryption: Icons.encryption,
	SOC2: Icons.soc2,
	PenTesting: Icons.pentesting,
	CSP: Icons.csp,
};

const getLogo = (language: keyof typeof logos): React.ElementType => {
	return logos[language] || null;
};

export { Icons, getLogo };
