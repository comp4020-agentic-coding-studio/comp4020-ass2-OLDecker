import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

// The repo arrived with SLOP1795: the last three digits are assigned per-repo
// and reserved so no other course in the cohort collides with them.
const RESERVED_SUFFIX = "795";

describe("assignment 2 spec", () => {
  it("keeps the SLOP course code's reserved three-digit suffix", () => {
    expect(api.course.code).toMatch(/^SLOP(1|2|3|4|6|8)\d{3}$/);
    expect(api.course.code.slice(-3)).toBe(RESERVED_SUFFIX);
  });

  it("runs across twelve dated teaching weeks", () => {
    const weeks = byType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("has assessments that add up to 100%", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("links at least one lecture to a real, built deck", () => {
    const decked = byType("lectures").filter(
      (node) => typeof node.meta?.slides === "string",
    );
    expect(decked.length, "no lecture has a `slides` link").toBeGreaterThan(0);

    for (const node of decked) {
      const slides = node.meta?.slides as string;
      const deckPage = resolve("dist", slides.replace(/^\//, ""), "index.html");
      expect(existsSync(deckPage), `${node.id} links to ${slides}, which wasn't built`).toBe(
        true,
      );
    }
  });
});
