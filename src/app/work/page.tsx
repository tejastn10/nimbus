import { BlurFade } from "@/components/animated/BlurFade";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { LineGrow } from "@/components/animated/LineGrow";
import { BLUR_FADE_DELAY, BOX_REVEAL_DURATION } from "@/constants/ui";
import { ResumeCard } from "@/containers/ResumeCard";
import { DATA } from "@/data/resume";

export const metadata = {
	title: "Work",
	description:
		"A journey through code, coffee, and countless commits. Here's where pixels meet purpose, and where I've spent my days building digital experiences that (hopefully) don't break when you need them most.",
};

export default function WorkPage() {
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

			<BlurFade delay={BLUR_FADE_DELAY}>
				<LineGrow className="my-12" />
			</BlurFade>

			<div className="max-w-5xl mx-auto px-6 lg:px-10 pt-10 pb-16">
				<div className="relative">
					{DATA.work.map((work, index) => {
						const period = `${work.start} - ${work.end ?? "Present"}`;

						return (
							<div key={work.company} className="relative">
								<div className="flex flex-col md:flex-row gap-y-6">
									<div className="flex-1 md:pl-8 relative pb-10">
										<div className="relative z-10">
											<BlurFade delay={BLUR_FADE_DELAY * (4 + index)}>
												<div className="max-w-2xl">
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
		</section>
	);
}
