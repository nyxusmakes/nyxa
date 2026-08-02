export class ServiceRegistry {
	private services = new Map<string, unknown>();

	register<T>(name: string, service: T): void {
		this.services.set(name, service);
	}

	get<T>(name: string): T | undefined {
		return this.services.get(name) as T | undefined;
	}

	has(name: string): boolean {
		return this.services.has(name);
	}

	clear(): void {
		this.services.clear();
	}
}