import type { JSX } from "react";
import { BentoCard, type BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";
import { BlurFade } from "@/components/animated/BlurFade";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { getLogo } from "@/components/icons/Icons";
import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { PROJECT_SLICE_NUMBER } from "@/constants/values";

import { DATA } from "@/data/resume";
import { OtherSection } from "./other-section";
import { TemplatesSection } from "./templates-section";

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
					? "col-span-3 lg:col-span-2"
					: "col-span-3 lg:col-span-1",
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
	].map((project) => ({
		...project,
		tags: project.technologies,
	}));

	// Filter all template projects regardless of featured status
	const templateProjects = DATA.projects
		.filter((project) => project.isTemplate)
		.map((project) => ({
			...project,
			tags: project.technologies,
		}));

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

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<span className="section-label">[ Featured ]</span>
				<h2 className="font-bold text-3xl mb-4 tracking-tighter">Featured Projects</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<BentoGrid className="auto-rows-[14rem]">
					{ProjectBentoCards.map((project) => (
						<BentoCard key={project.name} {...project} />
					))}
				</BentoGrid>
			</BlurFade>

			<OtherSection projects={allOtherProjects} />

			<TemplatesSection templates={templateProjects} />
		</section>
	);
};

export default ProjectsPage;
