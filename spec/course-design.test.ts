import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

const teacherIds = (node: ApiNode): string[] =>
  Array.isArray(node.meta?.teachers) ? (node.meta.teachers as string[]) : [];

describe("course design: authority stays where it's assigned", () => {
  it("has the convenor teach every lecture", () => {
    const lectures = byType("lectures");
    expect(lectures.length).toBeGreaterThan(0);
    for (const lecture of lectures) {
      expect(teacherIds(lecture), `${lecture.id} has no marisol-quaye teacher ref`).toContain(
        "marisol-quaye",
      );
    }
  });

  it("has the tutor run every session", () => {
    const sessions = byType("sessions");
    expect(sessions.length).toBeGreaterThan(0);
    for (const session of sessions) {
      expect(teacherIds(session), `${session.id} has no idris-fenn teacher ref`).toContain(
        "idris-fenn",
      );
    }
  });
});
