export interface MemoryEntry {
	id: string;
	type: "fact" | "goal" | "context" | "conversation";
	content: string;
	created: number;
}

export class Memory {
	private entries: MemoryEntry[] = [];

	add(entry: MemoryEntry) {
		this.entries.push(entry);
	}

	getAll(): MemoryEntry[] {
		return this.entries;
	}

	search(query: string): MemoryEntry[] {
		const lower = query.toLowerCase();

		return this.entries.filter(entry =>
			entry.content.toLowerCase().includes(lower)
		);
	}

	clear() {
		this.entries = [];
	}
}