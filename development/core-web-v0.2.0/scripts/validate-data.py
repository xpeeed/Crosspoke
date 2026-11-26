from pathlib import Path
import json
import jsonschema
base=Path(__file__).resolve().parents[1]/'data'
validator=jsonschema.Draft202012Validator(json.loads((base/'questions.schema.json').read_text()),format_checker=jsonschema.FormatChecker())
validator.validate(json.loads((base/'crosspoke-fragen-v0.7.json').read_text()))
print('JSON Schema 1.4: PASS')
