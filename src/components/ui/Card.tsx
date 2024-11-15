import { forwardRef, HTMLAttributes } from "react";

import { combineClasses } from "@/utils/tailwind";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={combineClasses("rounded-lg bg-card text-card-foreground", className)}
			{...props}
		/>
	)
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={combineClasses("flex flex-col", className)} {...props} />
	)
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={combineClasses("text-2xl font-semibold leading-none tracking-tight", className)}
			{...props}
		/>
	)
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p
			ref={ref}
			className={combineClasses("text-sm text-muted-foreground", className)}
			{...props}
		/>
	)
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={combineClasses("text-pretty font-sans text-sm text-muted-foreground", className)}
			{...props}
		/>
	)
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={combineClasses("flex items-center pt-2", className)} {...props} />
	)
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };