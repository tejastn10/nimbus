"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Root } from "@radix-ui/react-separator";

import { combineClasses } from "@/utils/tailwind";

const Separator = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
	({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
		<Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={combineClasses(
				"shrink-0 bg-border",
				orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
				className
			)}
			{...props}
		/>
	)
);
Separator.displayName = Root.displayName;

export { Separator };
