import Image from "next/image";

import { cx } from "@/utils/tailwind";

type PixelAvatarProps = {
	src: string;
	alt?: string;
	pixelSize?: number;
	className?: string;
};

// Renders the image at `pixelSize` resolution, then CSS scales it up with
// image-rendering: pixelated — same visual effect as the canvas approach but
// without any JS/useEffect delay. `priority` emits a <link rel="preload"> in
// the <head> so the browser fetches the image before JS even runs.
const PixelAvatar = ({ src, alt = "", pixelSize = 48, className }: PixelAvatarProps) => (
	<Image
		src={src}
		alt={alt}
		width={pixelSize}
		height={pixelSize}
		priority
		sizes={`${pixelSize}px`}
		style={{ imageRendering: "pixelated" }}
		className={cx("aspect-square h-full w-full object-cover object-top grayscale", className)}
	/>
);

export { PixelAvatar };
