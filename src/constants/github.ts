// Isometric tile dimensions (2:1 ratio)
const TILE_HALF_WIDTH = 8;
const TILE_QUARTER_HEIGHT = 4;

// Cube wall heights per contribution level (0–4)
const WALL_HEIGHTS = [0, 4, 8, 12, 16] as const;

// [top face, right wall, left wall] per level
const DARK_PALETTE: [string, string, string][] = [
	["#1e1e1e", "#181818", "#111111"],
	["#3a3a3a", "#2e2e2e", "#222222"],
	["#5e5e5e", "#4a4a4a", "#363636"],
	["#8a8a8a", "#6d6d6d", "#505050"],
	["#c0c0c0", "#969696", "#6e6e6e"],
];

const LIGHT_PALETTE: [string, string, string][] = [
	["#e8e8e8", "#d2d2d2", "#bcbcbc"],
	["#c0c0c0", "#a8a8a8", "#929292"],
	["#8a8a8a", "#797979", "#686868"],
	["#5e5e5e", "#515151", "#454545"],
	["#2a2a2a", "#232323", "#1c1c1c"],
];

const DARK_STROKE = "rgba(255,255,255,0.08)";
const LIGHT_STROKE = "rgba(0,0,0,0.07)";

export { DARK_PALETTE, DARK_STROKE, LIGHT_PALETTE, LIGHT_STROKE, TILE_HALF_WIDTH, TILE_QUARTER_HEIGHT, WALL_HEIGHTS };
