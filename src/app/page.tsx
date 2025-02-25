import { FC } from "react";

import Link from "next/link";

import { Marquee } from "@/components/animated/Marquee";
import { LineGrow } from "@/components/animated/LineGrow";
import { BoxReveal } from "@/components/animated/BoxReveal";

import { CourseCard } from "@/containers/CourseCard";
import { ResumeCard } from "@/containers/ResumeCard";
import { ProjectCard } from "@/containers/ProjectCard";

import { Icons } from "@/components/icons/Icons";

import { BlurFade } from "@/components/animated/BlurFade";

import { Badge } from "@/components/ui/Badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/constants/ui";

const Home: FC = () => {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 flex justify-between">
						<div className="flex-col flex flex-1 space-y-1.5">
							<BlurFade delay={BLUR_FADE_DELAY}>
								<BoxReveal>
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										{`Hi, I'm ${DATA.name.split(" ")[0]}`}
									</h1>
								</BoxReveal>
								<h2 className="max-w-[600px] md:text-xl">{DATA.description}</h2>
							</BlurFade>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-36 border">
								<AvatarImage
									alt={DATA.name}
									src={DATA.avatarUrl}
									className="cursor-pointer transition-transform duration-200 hover:scale-105 hover:grayscale-0 p-0"
								/>
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>

				<BlurFade delay={BLUR_FADE_DELAY}>
					<LineGrow className="my-0" />
				</BlurFade>
			</section>

			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className="text-xl font-bold">About</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<p className="text-muted-foreground md:text-l/relaxed lg:text-base/relaxed xl:text-l/relaxed">
						I began my software engineering journey in 2021 and am currently building creative-ops
						at{" "}
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.rocketium.com"
							className="font-semibold text-gray-800 dark:text-gray-300 underline-slide"
						>
							Rocketium
						</Link>
						. I’m also enhancing my Python skills through the{" "}
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.meetup.com/bangpypers/"
							className="font-semibold text-gray-800 dark:text-gray-300 underline-slide"
						>
							BangPypers
						</Link>{" "}
						meet-up group.
					</p>
				</BlurFade>
			</section>

			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, index) => (
						<BlurFade key={work.company + index} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
							<ResumeCard
								key={work.company + index}
								logoUrl={work.logoUrl}
								location={work.location}
								altText={work.company}
								company={work.company}
								href={work.href}
								period={`${work.start} - ${work.end ?? "Present"}`}
								roles={work.roles}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			<section id="skills" className="relative overflow-hidden">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>

					{DATA.skills.map((skill, index) => (
						<div key={index} className="relative">
							<Marquee reverse={index % 2 === 0}>
								{skill.map((s, i) => (
									<BlurFade key={i} delay={BLUR_FADE_DELAY * 10 + i * 0.05} yOffset={0}>
										<Badge key={s.name}>
											{s.icon}
											<span className="ml-2">{s.name}</span>{" "}
										</Badge>
									</BlurFade>
								))}
							</Marquee>

							{/* Shadow Effect on the left and right */}
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-l from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-r from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
						</div>
					))}
				</div>
			</section>

			<section id="projects">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<Badge
									noHover
									className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-3 py-1 text-sm"
								>
									{Icons.projects()}
									<span className="ml-2">My Projects</span>
								</Badge>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pt-2">
									Check out my latest work
								</h2>
								<p className="text-muted-foreground md:text-l/relaxed lg:text-base/relaxed xl:text-l/relaxed">
									I&apos;ve worked on a variety of projects, from simple websites to complex web
									applications. Here are a few of my favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
						{DATA.projects
							.filter((project) => project.featured)
							.map((project, id) => (
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
				</div>
			</section>

			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					{DATA.education.map((education, index) => (
						<BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
							<CourseCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			<section id="contact">
				<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-3">
							<Badge
								noHover
								className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-3 py-1 text-sm"
							>
								{Icons.contact()}
								<span className="ml-2">Contact</span>
							</Badge>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
							<p className="text-muted-foreground md:text-l/relaxed lg:text-base/relaxed xl:text-l/relaxed">
								If you’d like to connect, Twitter is an efficient way to reach me. Feel free to send
								me a message{" "}
								<Link
									target="_blank"
									rel="noopener noreferrer"
									href={DATA.contact.social.Twitter.url}
									className="font-semibold text-gray-800 dark:text-gray-300 underline-slide"
								>
									here
								</Link>
								, and I will respond as soon as possible. Please note that unsolicited messages will
								not receive a response.
							</p>
							<p className="text-muted-foreground md:text-l/relaxed lg:text-base/relaxed xl:text-l/relaxed">
								Prefer email communication? You can also reach out to me via{" "}
								<Link
									href={`mailto:${DATA.contact.email}`}
									className="font-semibold text-gray-800 dark:text-gray-300 underline-slide"
								>
									email
								</Link>
								, and I’ll get back to you promptly.
							</p>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	);
};

export default Home;
