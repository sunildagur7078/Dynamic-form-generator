import Ajv from 'ajv';
const ajv = new Ajv();

function validateJson(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    return ajv.validateSchema(parsed);
  } catch {
    return false;
  }
}
