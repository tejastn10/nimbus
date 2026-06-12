import Link from "next/link";
import type { FC } from "react";
import { BlurFade } from "@/components/animated/BlurFade";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { ResumeCard } from "@/containers/ResumeCard";
import { DATA } from "@/data/resume";

export const metadata = {
	title: "Work",
	description:
		"A journey through code, coffee, and countless commits. Here's where pixels meet purpose, and where I've spent my days building digital experiences that (hopefully) don't break when you need them most.",
};

const Work: FC = () => {
	return (
		<section className="relative">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<BoxReveal duration={BOX_REVEAL_DURATION}>
					<h1 className="font-bold text-6xl mb-4 tracking-tighter">{metadata.title}</h1>
				</BoxReveal>
				<BoxReveal duration={BOX_REVEAL_DURATION * 1.2}>
					<h3 className="text-sm text-muted-foreground pb-6">{metadata.description}</h3>
				</BoxReveal>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<span className="section-label">[ Experience ]</span>
				<h2 className="font-bold text-3xl mb-4 tracking-tighter">Work History</h2>
			</BlurFade>

			<div className="max-w-5xl mx-auto pt-4">
				<div className="relative flex flex-col gap-6">
					{DATA.work.map((work, index) => {
						const period = `${work.start} - ${work.end ?? "Present"}`;

						return (
							<div key={work.company} className="relative">
								<div className="flex flex-col md:flex-row">
									<div className="flex-1 relative">
										<div className="relative z-10">
											<BlurFade delay={BLUR_FADE_DELAY * (4 + index)}>
												<div>
													<ResumeCard
														key={work.company}
														logoUrl={work.logoUrl}
														location={work.location}
														altText={work.company}
														company={work.company}
														href={work.href}
														period={period}
														roles={work.roles}
														expanded={true}
													/>
												</div>
											</BlurFade>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<section className="border-t border-border pt-8 pb-16">
				<BlurFade delay={BLUR_FADE_DELAY * 10}>
					<div className="space-y-4">
						<span className="section-label">[ Resume ]</span>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Want the full picture?
						</h2>
						<p className="text-muted-foreground md:text-base leading-relaxed max-w-lg">
							Everything in one place — roles, impact, and the stack behind it all. Download the PDF
							or open it directly in your browser.
						</p>
						<div className="flex gap-3 pt-2">
							<a href="/resume.pdf" download="Tejas Nikhar - Resume.pdf">
								<Button variant="outline" className="gap-2 cursor-pointer">
									<Icons.file className="size-4" />
									Download PDF
								</Button>
							</a>
							<Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
								<Button variant="ghost" className="gap-2 cursor-pointer">
									<Icons.link className="size-4" />
									View Online
								</Button>
							</Link>
						</div>
					</div>
				</BlurFade>
			</section>
		</section>
	);
};

export default Work;
