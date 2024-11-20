interface JsonSchema {
    type: string;
    properties: Record<string, { type: string; required?: boolean }>;
    required?: string[];
  }
  