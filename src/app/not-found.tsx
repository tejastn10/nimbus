import { FC } from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/Badge";

import { Icons } from "@/components/icons/Icons";

const NotFound: FC = () => {
	return (
		<div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
			<h1 className="text-6xl font-bold mb-4">404</h1>
			<p className="text-lg text-muted-foreground mb-8">
				Page Not Found. The page you're looking for doesn't exist.
			</p>
			<Link href="/">
				<Badge className="flex gap-2 px-2 py-1 text-[10px]">
					{Icons.home()}
					Go Home
				</Badge>
			</Link>
		</div>
	);
};

export default NotFound;
