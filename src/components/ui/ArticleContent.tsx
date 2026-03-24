"use client";

import { useEffect, useRef } from "react";

type ArticleContentProps = {
	html: string;
	className?: string;
};

const ArticleContent = ({ html, className }: ArticleContentProps) => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const article = ref.current;
		if (!article) return;

		const blocks = article.querySelectorAll("pre");

		for (const pre of blocks) {
			if (pre.querySelector(".copy-btn")) continue;

			pre.style.position = "relative";

			const btn = document.createElement("button");
			btn.className = "copy-btn";
			btn.textContent = "copy";
			btn.setAttribute("aria-label", "Copy code");

			btn.addEventListener("click", async () => {
				const code = pre.querySelector("code");
				const text = code?.innerText ?? pre.innerText;
				await navigator.clipboard.writeText(text);
				btn.textContent = "copied!";
				setTimeout(() => {
					btn.textContent = "copy";
				}, 2000);
			});

			pre.appendChild(btn);
		}
	}, [html]);

	return (
		<article
			ref={ref}
			className={className}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Safe compiled MDX content
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};

export { ArticleContent };
