import { JSX } from "react";

import { BlurFade } from "@/components/animated/BlurFade";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { BentoCard, BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";

import { ProjectCard } from "@/containers/ProjectCard";
import { TemplateCard } from "@/containers/TemplateCard";

import { getLogo } from "@/components/icons/Icons";

import { DATA } from "@/data/resume";

import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { PROJECT_SLICE_NUMBER } from "@/constants/values";

export const metadata = {
	title: "Projects",
	description: "Here are most of the projects I have worked on and proud of.",
};

const ProjectsPage = (): JSX.Element => {
	// Filter featured projects (including templates)
	const featuredProjects = DATA.projects.filter((project) => project.featured);

	// Filter other projects (not featured and not templates)
	const otherProjects = DATA.projects.filter((project) => !project.featured && !project.isTemplate);

	// Create Bento cards for featured projects
	const ProjectBentoCards: BentoCardProps[] = featuredProjects
		.slice(0, PROJECT_SLICE_NUMBER)
		.map((project, index) => ({
			name: project.title,
			className:
				index % 4 === 0 || index % 4 === 3
					? "col-span-3 lg:col-span-1 grayscale hover:grayscale-0"
					: "col-span-3 lg:col-span-2 grayscale hover:grayscale-0",
			Icon: getLogo(project.technologies[0] as any),
			description: project.description,
			href: project.links[0].href,
			cta: "View Project",
		}));

	// Featured projects that are not displayed in the Bento Grid
	const remainingFeaturedProjects = featuredProjects.slice(PROJECT_SLICE_NUMBER);

	// Add remaining featured projects to other projects, but exclude templates
	const allOtherProjects = [
		...otherProjects,
		...remainingFeaturedProjects.filter((project) => !project.isTemplate),
	];

	// Filter all template projects regardless of featured status
	const templateProjects = DATA.projects.filter((project) => project.isTemplate);

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<h1 className="font-bold text-6xl mb-4 tracking-tighter">{metadata.title}</h1>
				</BoxReveal>
				<BoxReveal duration={BOX_REVEAL_DURATION * 1.2}>
					<h3 className="text-sm text-muted-foreground pb-6">{metadata.description}</h3>
				</BoxReveal>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY}>
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Featured Projects
				</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<BentoGrid className="auto-rows-[14rem]">
					{ProjectBentoCards.map((project) => (
						<BentoCard key={project.name} {...project} />
					))}
				</BentoGrid>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Other Projects
				</h2>
			</BlurFade>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto">
				{allOtherProjects.map((project, id) => (
					<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
						<ProjectCard
							href={project.href}
							key={project.title}
							title={project.title}
							description={project.description}
							purpose={project.purpose}
							tags={project.technologies}
							links={project.links}
						/>
					</BlurFade>
				))}
			</div>

			<BlurFade delay={BLUR_FADE_DELAY * 10}>
				<LineGrow className="my-12" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 10}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter w-fit text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-100 dark:from-white dark:to-white/10">
					Templates
				</h2>
			</BlurFade>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
				{templateProjects.map((project, id) => (
					<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
						<TemplateCard
							href={project.href}
							key={project.title}
							title={project.title}
							description={project.description}
							tags={project.technologies}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
