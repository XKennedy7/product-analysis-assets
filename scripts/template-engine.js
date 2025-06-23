// Template Engine Helper Functions
// For reference - not executable in current environment

const TemplateEngine = {
    // Component loading
    loadComponent: async (componentName) => {
        const url = `https://yourusername.github.io/product-analysis-assets/components/${componentName}.html`;
        return await fetch(url).then(r => r.text());
    },
    
    // Data population
    populateTemplate: (template, data) => {
        return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return data[key] || match;
        });
    },
    
    // Section generation
    generateSection: (title, content) => {
        return `
        <div class="section">
            <h2>${title}</h2>
            ${content}
        </div>`;
    },
    
    // Data grid generation
    generateDataGrid: (items) => {
        const gridItems = items.map(item => `
            <div class="data-item">
                <div class="data-label">${item.label}</div>
                <div class="data-value">${item.value}</div>
            </div>
        `).join('');
        
        return `<div class="data-grid">${gridItems}</div>`;
    },
    
    // Tag output generation
    generateTagOutput: (tagString, tierBreakdown) => {
        const tierHtml = tierBreakdown.map(tier => `
            <div class="tag-tier">
                <div class="data-label">${tier.name} (${tier.tags.length} tags)</div>
                <div class="tier-tags">
                    ${tier.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
        
        return `
            <div class="tag-output">
                <div class="data-label">Generated Tags</div>
                <div class="tag-string">${tagString}</div>
            </div>
            <div class="tag-breakdown">${tierHtml}</div>
        `;
    }
};

// Usage patterns for AI reference
const UsagePatterns = {
    basicSection: "{{>section title='Section Title' content=data}}",
    dataGrid: "{{>data-grid items=dataArray}}",
    tagOutput: "{{>tag-output tag_string=tags tiers=breakdown}}",
    highlights: "{{>highlights title='Key Points' items=highlightsList}}",
    productDescription: "{{>product-description opening_hook=hook technical_benefits=benefits}}"
};
