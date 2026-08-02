import type AIPlugin from "../main";
import { ServiceRegistry } from "./ServiceRegistry";
import { Memory } from "./Memory";

export class Brain {
	private plugin: AIPlugin;

	public services: ServiceRegistry;

	public memory: Memory;

	private initialized = false;

	constructor(plugin: AIPlugin) {
		this.plugin = plugin;
		this.services = new ServiceRegistry();
		this.memory = new Memory();
	}

	async initialize() {
		if (this.initialized) return;

		console.log("[Nyxa] Initializing Brain...");

		this.initializeServices();

		this.initialized = true;

		console.log("[Nyxa] Brain ready.");
	}

	private initializeServices() {
		// Existing Nyxa systems will be registered here.
		// Example:
		// this.services.register("vaultSearch", this.plugin.vaultSearchAgent);
	}

	async shutdown() {
		this.services.clear();

		console.log("[Nyxa] Brain shutdown.");
	}
}