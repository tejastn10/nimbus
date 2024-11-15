import {
	SiNextdotjs,
	SiNestjs,
	SiReact,
	SiNodedotjs,
	SiMedium,
	SiJavascript,
	SiTypescript,
	SiPython,
	SiGo,
	SiDart,
	SiExpress,
	SiFastify,
	SiFlutter,
	SiPostgresql,
	SiMongodb,
	SiRedis,
	SiFirebase,
	SiVercel,
	SiAmazonwebservices,
	SiDocker,
	SiGithubactions,
	SiJest,
} from "react-icons/si";

import {
	RxLayers,
	RxTwitterLogo,
	RxGithubLogo,
	RxLinkedinLogo,
	RxHome,
	RxChatBubble,
	RxCodesandboxLogo,
} from "react-icons/rx";

export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
	// ? Navbar
	home: (props?: IconProps) => <RxHome {...props} />,
	blog: (props?: IconProps) => <RxLayers {...props} />,
	medium: (props?: IconProps) => <SiMedium {...props} />,
	github: (props?: IconProps) => <RxGithubLogo {...props} />,
	twitter: (props?: IconProps) => <RxTwitterLogo {...props} />,
	linkedin: (props?: IconProps) => <RxLinkedinLogo {...props} />,

	// ? Home Page
	projects: (props?: IconProps) => <RxCodesandboxLogo {...props} />,
	contact: (props?: IconProps) => <RxChatBubble {...props} />,

	// ? Tech Stack
	// * Languages
	javascript: (props?: IconProps) => <SiJavascript {...props} />,
	typescript: (props?: IconProps) => <SiTypescript {...props} />,
	python: (props?: IconProps) => <SiPython {...props} />,
	dart: (props?: IconProps) => <SiDart {...props} />,
	go: (props?: IconProps) => <SiGo {...props} />,

	// * Frameworks
	node: (props?: IconProps) => <SiNodedotjs {...props} />,
	react: (props?: IconProps) => <SiReact {...props} />,
	nestjs: (props?: IconProps) => <SiNestjs {...props} />,
	express: (props?: IconProps) => <SiExpress {...props} />,
	fastify: (props?: IconProps) => <SiFastify {...props} />,
	nextjs: (props?: IconProps) => <SiNextdotjs {...props} />,
	flutter: (props?: IconProps) => <SiFlutter {...props} />,
	jest: (props?: IconProps) => <SiJest {...props} />,

	// * Database
	postgres: (props?: IconProps) => <SiPostgresql {...props} />,
	mongo: (props?: IconProps) => <SiMongodb {...props} />,
	redis: (props?: IconProps) => <SiRedis {...props} />,
	firebase: (props?: IconProps) => <SiFirebase {...props} />,

	// * Cloud
	docker: (props?: IconProps) => <SiDocker {...props} />,
	vercel: (props?: IconProps) => <SiVercel {...props} />,
	aws: (props?: IconProps) => <SiAmazonwebservices {...props} />,
	actions: (props?: IconProps) => <SiGithubactions {...props} />,
};