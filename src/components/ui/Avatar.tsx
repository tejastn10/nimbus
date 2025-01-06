"use client";

import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";

import { Root, Image, Fallback } from "@radix-ui/react-avatar";

import { cx } from "@/utils/tailwind";

const Avatar = forwardRef<ComponentRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
	({ className, ...props }, ref) => (
		<Root
			ref={ref}
			className={cx("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md", className)}
			{...props}
		/>
	)
);
Avatar.displayName = Root.displayName;

const AvatarImage = forwardRef<ComponentRef<typeof Image>, ComponentPropsWithoutRef<typeof Image>>(
	({ className, alt = "", ...props }, ref) => (
		<Image
			ref={ref}
			alt={alt}
			className={cx(
				"aspect-square h-full w-full object-contain grayscale transition-all duration-300 p-2",
				className
			)}
			{...props}
		/>
	)
);
AvatarImage.displayName = Image.displayName;

const AvatarFallback = forwardRef<
	ComponentRef<typeof Fallback>,
	ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
	<Fallback
		ref={ref}
		className={cx("flex h-full w-full items-center justify-center rounded-md bg-muted", className)}
		{...props}
	/>
));
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
