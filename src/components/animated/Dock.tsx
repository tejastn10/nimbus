"use client";

import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	PropsWithChildren,
	useRef,
} from "react";

import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cva, type VariantProps } from "class-variance-authority";

import { combineClasses } from "@/utils/tailwind";

import { DEFAULT_DISTANCE, DEFAULT_MAGNIFICATION } from "@/constants/ui";

type DockIconProps = {
	size?: number;
	distance?: number;
	className?: string;
	magnification?: number;
	props?: PropsWithChildren;
	children?: React.ReactNode;
	mousex?: MotionValue<number>;
};

type DockProps = VariantProps<typeof dockVariants> & {
	distance?: number;
	className?: string;
	magnification?: number;
	children: React.ReactNode;
};

const dockVariants = cva("mx-auto w-max h-full p-2 flex items-end rounded-md border");

const Dock = forwardRef<HTMLDivElement, DockProps>(
	(
		{
			children,
			className,
			distance = DEFAULT_DISTANCE,
			magnification = DEFAULT_MAGNIFICATION,
			...props
		},
		ref
	) => {
		const mousex = useMotionValue(Infinity);

		const renderChildren = () => {
			return Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, {
						mousex,
						magnification,
						distance,
					} as DockIconProps);
				}
				return child;
			});
		};

		return (
			<motion.div
				ref={ref}
				onMouseMove={(e) => mousex.set(e.pageX)}
				onMouseLeave={() => mousex.set(Infinity)}
				{...props}
				className={combineClasses(dockVariants({ className }))}
			>
				{renderChildren()}
			</motion.div>
		);
	}
);
Dock.displayName = "Dock";

const DockIcon = ({
	mousex,
	children,
	className,
	distance = DEFAULT_DISTANCE,
	magnification = DEFAULT_MAGNIFICATION,
	...props
}: DockIconProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const distanceCal = useTransform(mousex!, (val: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(distanceCal, [-distance, 0, distance], [40, magnification, 40]);

	const width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className={combineClasses(
				"flex aspect-square cursor-pointer items-center justify-center rounded-md",
				className
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
};
DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
