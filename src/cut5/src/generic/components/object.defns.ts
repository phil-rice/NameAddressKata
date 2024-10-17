export type RenderDef = "text" | { type: "dropdown"; options: string[] }
export type ObjectDef = Partial<Record<string, RenderDef>>;
