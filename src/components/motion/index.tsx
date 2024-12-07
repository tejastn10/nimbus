import { forwardRef } from "react";

import { motion, type MotionProps } from "motion/react";

type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
type MotionSpanProps = MotionProps & React.HTMLAttributes<HTMLSpanElement>;

// Typed motion components with forwardRef
const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>((props, ref) => (
	<motion.div {...props} ref={ref} />
));
MotionDiv.displayName = "MotionDiv";

const MotionSpan = forwardRef<HTMLSpanElement, MotionSpanProps>((props, ref) => (
	<motion.span {...props} ref={ref} />
));
MotionSpan.displayName = "MotionSpan";

export { MotionDiv, MotionSpan };
