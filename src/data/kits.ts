export type KitCategory = 'door' | 'farm' | 'storage' | 'decoration';
export type KitSize = 'small' | 'medium' | 'large';

export type Kit = {
	number: string;
	slug: string;
	name: string;
	color: string;
	summary: string;
	price: number;
	category: KitCategory;
	size: KitSize;
	steps: string[];
};

export const kits: Kit[] = [
	{
		number: '01',
		slug: '2x2-piston-door',
		name: '2x2 Piston Door',
		color: '#3b4cc0',
		summary: 'A flush 2x2 piston door, redstone-only, no observers.',
		price: 30,
		category: 'door',
		size: 'small',
		steps: [
			'Place 4 sticky pistons like this. Use temporary blocks to help.',
			'Now remove the temporary blocks.',
			'Add smooth stone to every piston.',
			'Add another sticky piston with a redstone block on it.',
			'Make an arc shape out of smooth stone like this.',
			'Place redstone dust on the arc and on the side pistons.',
			'Make a bigger arc out of smooth stone in front of the previous arc like this.',
			'Build the same arc on the other side.',
			'Place two smooth stone blocks like this and one redstone dust.',
			'Place another two smooth stone on the other side too.',
			'Place bamboo planks on the inner side of the arc until you can only see the four stone blocks.',
			'Do that on the other side too.',
			'Put a bamboo button on this block.',
			'And on the other side too.',
			'Open the door (you can use a lever) and break eight blocks like this.',
			'Fill it with a layer of bamboo plank slabs.',
			'And now your door is done! (don’t forget to remove the lever if you used it)',
		],
	},
];
