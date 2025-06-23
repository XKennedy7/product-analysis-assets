# Enhanced Product Analysis Processing Guide v2.0

## Quick Reference Processing Instructions

### RESOURCES
- Base CDN: https://yourusername.github.io/product-analysis-assets/
- Taxonomy: data/taxonomy.json (Complete 5-tier enterprise system)
- Validation: data/validation-rules.json
- Defaults: data/defaults.json
- Components: components/*.html
- Templates: templates/*.html

### PROCESSING WORKFLOW
1. **ANALYZE**: Image → Visual analysis (category, color, construction, quality, fabric)
2. **EXTRACT**: JSON → Product data, specifications, variants, pricing
3. **VALIDATE**: Cross-reference image vs JSON, gap identification, consistency checks
4. **TAG**: Apply enterprise taxonomy (min 9, optimal 12-15, max 20 tags)
5. **DESCRIBE**: Formula-driven descriptions (hook+benefits+lifestyle+value)
6. **TEMPLATE**: Component-based HTML generation
7. **OUTPUT**: Complete HTML artifact

### TAGGING SYSTEM
- **Tier 1 (Required)**: category + subcategory + color + formality + season (5 minimum)
- **Tier 2 (Commercial)**: price_segment + demographics + quality (4 recommended)
- **Tier 3 (Design)**: fabric + construction + fit details (3-5 as applicable)
- **Tier 4 (Positioning)**: aesthetic + occasions + wardrobe_role (2-4 as applicable)
- **Tier 5 (Specialized)**: performance + sustainability + specialized categories (as applicable)

### DESCRIPTION FORMULA
- **Opening Hook** (25-30 words): Emotional trigger + hero benefit + quality indicator
- **Technical Benefits** (40-50 words): Fabric story + construction + fit + functional features
- **Lifestyle Integration** (35-45 words): Occasion versatility + styling + confidence boost
- **Value Proposition** (20-25 words): Investment justification + brand promise + call to action

### VALIDATION REQUIREMENTS
- All sections populated with real data (no placeholders)
- Cross-reference consistency (image ↔ JSON)
- Tag validation per enterprise rules
- Mobile-responsive design
- Professional presentation standards

### OUTPUT FORMAT
Complete HTML artifact using component system with external CSS styling from CDN.
