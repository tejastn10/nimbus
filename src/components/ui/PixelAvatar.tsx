"use client";

import { useEffect, useRef } from "react";

import { cx } from "@/utils/tailwind";

type PixelAvatarProps = {
	src: string;
	alt?: string;
	pixelSize?: number;
	className?: string;
};

const PixelAvatar = ({ src, alt = "", pixelSize = 16, className }: PixelAvatarProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const img = new Image();
		img.onload = () => {
			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			// Crop to square from the top (same as object-top)
			const srcSize = Math.min(img.naturalWidth, img.naturalHeight);
			ctx.imageSmoothingEnabled = false;
			ctx.drawImage(img, 0, 0, srcSize, srcSize, 0, 0, pixelSize, pixelSize);
		};
		img.src = src;
	}, [src, pixelSize]);

	return (
		<canvas
			ref={canvasRef}
			width={pixelSize}
			height={pixelSize}
			aria-label={alt}
			role="img"
			style={{ imageRendering: "pixelated" }}
			className={cx("aspect-square h-full w-full grayscale", className)}
		/>
	);
};

export { PixelAvatar };
