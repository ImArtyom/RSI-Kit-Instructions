const COMPLETED_KEY = 'rsi-completed-kits';

export function getCompletedKits(): string[] {
	try {
		const raw = localStorage.getItem(COMPLETED_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

export function markKitCompleted(slug: string): void {
	const completed = getCompletedKits();
	if (!completed.includes(slug)) {
		completed.push(slug);
		localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed));
	}
}
