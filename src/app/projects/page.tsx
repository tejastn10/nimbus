import { BentoCard, BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";
import { BlurFade } from "@/components/animated/BlurFade";
import { getLogo } from "@/components/icons/Icons";
import { BLUR_FADE_DELAY } from "@/constants/ui";
import { PROJECT_SLICE_NUMBER } from "@/constants/values";
import { ProjectCard } from "@/containers/ProjectCard";
import { DATA } from "@/data/resume";
import { JSX } from "react";

export const metadata = {
	title: "Projects",
	description: "Here are most of the projects I have worked on and proud of.",
};

const ProjectsPage = (): JSX.Element => {
	const featuredProjects = DATA.projects.filter((project) => project.featured);

	const ProjectBentoCards: BentoCardProps[] = featuredProjects
		.slice(0, PROJECT_SLICE_NUMBER)
		.map((project, index) => ({
			name: project.title,
			className:
				index % 4 === 0 || index % 4 === 3
					? "col-span-3 lg:col-span-1 grayscale hover:grayscale-0"
					: "col-span-3 lg:col-span-2 grayscale hover:grayscale-0",
			Icon: getLogo(project.technologies[0] as any),
			description: index % 4 === 0 || index % 4 === 3 ? project.dates : project.description,
			href: project.links[0].href,
			cta: "View Project",
		}));

	// Featured projects that are not displayed in the Bento Grid
	const remainingFeaturedProjects = featuredProjects.slice(PROJECT_SLICE_NUMBER);

	// Combine the remaining featured projects with the non-featured ones
	const otherProjects = [
		...DATA.projects.filter((project) => !project.featured),
		...remainingFeaturedProjects,
	];

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="font-bold text-6xl mb-4 tracking-tighter">{metadata.title}</h1>
				<h3 className="text-sm text-muted-foreground pb-6">{metadata.description}</h3>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Featured Projects</h2>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<BentoGrid className="auto-rows-[14rem]">
					{ProjectBentoCards.map((project) => (
						<BentoCard key={project.name} {...project} />
					))}
				</BentoGrid>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<hr className="my-12 border-3 border-t-2 border-neutral-500 dark:border-neutral-700 rounded-md" />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 6}>
				<h2 className="font-bold text-3xl mb-8 tracking-tighter">Other Projects</h2>
			</BlurFade>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
				{otherProjects.map((project, id) => (
					<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
						<ProjectCard
							href={project.href}
							key={project.title}
							title={project.title}
							description={project.description}
							dates={project.dates}
							tags={project.technologies}
							image={project.image}
							video={project.video}
							links={project.links}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
