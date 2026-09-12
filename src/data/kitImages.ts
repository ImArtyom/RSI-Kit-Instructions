import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/kits/**/*.png', {
	eager: true,
});

export function getKitStepImage(slug: string, stepNumber: number): ImageMetadata {
	const key = `/src/assets/kits/${slug}/No${stepNumber}.png`;
	const image = images[key];
	if (!image) {
		throw new Error(`Missing kit image: ${key}`);
	}
	return image.default;
}
