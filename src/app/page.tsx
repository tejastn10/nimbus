import Link from "next/link";
import type { FC } from "react";
import { BentoCard, type BentoCardProps, BentoGrid } from "@/components/animated/BentoGrid";
import { BlurFade } from "@/components/animated/BlurFade";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { GlowingText } from "@/components/animated/GlowingText";
import { Marquee } from "@/components/animated/Marquee";
import { getLogo } from "@/components/icons/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { BLUR_FADE_DELAY } from "@/constants/ui";
import { PROJECT_SLICE_NUMBER } from "@/constants/values";
import { CourseCard } from "@/containers/CourseCard";
import { GitHubContributions } from "@/containers/GithubContributions";
import { DATA } from "@/data/resume";

const SectionLabel: FC<{ label: string }> = ({ label }) => (
	<span className="section-label">[ {label} ]</span>
);

const Home: FC = () => {
	const featuredProjects: BentoCardProps[] = DATA.projects
		.filter((project) => project.featured)
		.slice(0, PROJECT_SLICE_NUMBER)
		.map((project, index) => ({
			name: project.title,
			className:
				index % 4 === 0 || index % 4 === 3
					? "col-span-3 lg:col-span-2"
					: "col-span-3 lg:col-span-1",
			Icon: getLogo(project.technologies[0] as Parameters<typeof getLogo>[0]),
			description: project.description,
			href: project.links[0]?.href ?? "#",
			cta: "View Project",
		}));

	return (
		<main className="flex flex-col min-h-[100dvh] space-y-16">
			{/* ── Hero ──────────────────────────────────────────────── */}
			<section className="pt-8">
				<div className="mx-auto w-full space-y-8">
					<div className="flex items-start gap-6">
						{/* Avatar — left side */}
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-32 sm:size-36 border border-border shrink-0">
								<AvatarImage
									alt={DATA.name}
									src={DATA.avatarUrl}
									className="object-cover object-top"
								/>
								<AvatarFallback className="font-mono">{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>

						{/* Text — right side */}
						<div className="flex flex-col flex-1 space-y-1.5 min-w-0">
							<BlurFade delay={BLUR_FADE_DELAY}>
								<BoxReveal>
									<GlowingText
										text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
										className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
									/>
								</BoxReveal>
								<h2 className="max-w-[600px] md:text-xl text-muted-foreground mt-2">
									{DATA.description}
								</h2>
							</BlurFade>
						</div>
					</div>
				</div>
			</section>

			{/* ── About ─────────────────────────────────────────────── */}
			<section className="border-t border-border pt-8">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<SectionLabel label="About" />
					<h2 className="text-xl font-bold tracking-tight mb-4">Who I am</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<p className="text-muted-foreground leading-relaxed md:text-base">
						{DATA.about.content.map((item) =>
							item.isLink ? (
								<Link
									key={item.text}
									target="_blank"
									rel="noopener noreferrer"
									href={item.url}
									className="font-semibold text-foreground underline-slide"
								>
									{item.text}
								</Link>
							) : (
								<span key={item.text}>{item.text}</span>
							)
						)}
					</p>
				</BlurFade>
			</section>

			{/* ── Skills ────────────────────────────────────────────── */}
			<section className="border-t border-border pt-8 relative overflow-hidden">
				<div className="flex min-h-0 flex-col gap-y-4">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<SectionLabel label="Skills" />
						<h2 className="text-xl font-bold tracking-tight mb-2">Tech stack</h2>
					</BlurFade>

					{DATA.skills.map((skill) => {
						const skillKey = skill.map((s) => s.name).join("-");
						return (
							<div key={skillKey} className="relative">
								<Marquee reverse={skillKey.length % 2 === 0}>
									{skill.map((s, i) => (
										<BlurFade key={s.name} delay={BLUR_FADE_DELAY * 7 + i * 0.05} yOffset={0}>
											<Badge key={s.name} variant="outline">
												{s.icon}
												<span className="ml-2">{s.name}</span>
											</Badge>
										</BlurFade>
									))}
								</Marquee>

								<div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-l from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
								<div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-r from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
							</div>
						);
					})}
				</div>
			</section>

			{/* ── Projects ──────────────────────────────────────────── */}
			<section className="border-t border-border pt-8">
				<div className="space-y-10 w-full">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<div className="flex flex-col space-y-2">
							<SectionLabel label="Projects" />
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest work</h2>
							<p className="text-muted-foreground md:text-base max-w-lg">
								A variety of projects — from developer tools to complex web applications.
							</p>
						</div>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 10}>
						<BentoGrid className="auto-rows-[14rem]">
							{featuredProjects.map((card) => (
								<BentoCard key={card.name} {...card} />
							))}
						</BentoGrid>
					</BlurFade>
				</div>
			</section>

			{/* ── GitHub Activity ───────────────────────────────────── */}
			<section className="border-t border-border pt-8">
				<div className="flex min-h-0 flex-col gap-y-4">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<SectionLabel label="Activity" />
						<h2 className="text-xl font-bold tracking-tight">GitHub contributions</h2>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 12}>
						<GitHubContributions />
					</BlurFade>
				</div>
			</section>

			{/* ── Education ─────────────────────────────────────────── */}
			<section className="border-t border-border pt-8">
				<div className="flex min-h-0 flex-col gap-y-4">
					<BlurFade delay={BLUR_FADE_DELAY * 13}>
						<SectionLabel label="Education" />
						<h2 className="text-xl font-bold tracking-tight mb-2">Academic background</h2>
					</BlurFade>
					{DATA.education.map((education, index) => (
						<BlurFade key={education.school} delay={BLUR_FADE_DELAY * 16 + index * 0.05}>
							<CourseCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								location={education.location}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			{/* ── Contact ───────────────────────────────────────────── */}
			<section className="border-t border-border pt-8 pb-16">
				<div className="w-full">
					<BlurFade delay={BLUR_FADE_DELAY * 15}>
						<div className="space-y-4 max-w-lg">
							<SectionLabel label="Contact" />
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in touch</h2>
							<p className="text-muted-foreground md:text-base leading-relaxed">
								X is the fastest way to reach me. Feel free to send a message{" "}
								<Link
									target="_blank"
									rel="noopener noreferrer"
									href={DATA.contact.social.X.url}
									className="font-semibold text-foreground underline-slide"
								>
									on X
								</Link>
								, and I'll respond as soon as possible. Prefer email? Reach out{" "}
								<Link
									href={`mailto:${DATA.contact.email}`}
									className="font-semibold text-foreground underline-slide"
								>
									via email
								</Link>{" "}
								instead.
							</p>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	);
};

export default Home;
