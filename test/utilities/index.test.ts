import { cn } from "../../src/utilities";
import { describe, expect, test } from "vitest";

describe("cn", () => {
	test("should return a string", () => {
		expect(cn("test")).toBe("test");
	});

	test("should return a string with multiple classes", () => {
		expect(cn("test", "test2")).toBe("test test2");
	});

	test("should replace two tailwind classes that override each other", () => {
		expect(cn("text-white", "text-black")).toBe("text-black");
	});

	test("should replace undefined classes", () => {
		expect(cn("text-white", undefined)).toBe("text-white");
	});

	test("custom font sizes", () => {
		expect(cn("text-text-md", "text-display-xs")).toBe("text-display-xs");
	});
});
