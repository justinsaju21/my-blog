const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix Card 1
content = content.replace('text-3xl font-bold mb-2 text-[var(--text-primary)]', 'text-3xl font-bold mb-2 text-white');
content = content.replace('text-[var(--text-muted)] text-lg max-w-md', 'text-white/70 text-lg max-w-md');

// Fix Card 2
content = content.replace('text-xl font-bold mb-1 text-[var(--text-primary)]">The Writer', 'text-xl font-bold mb-1 text-white">The Writer');
content = content.replace('text-sm text-[var(--text-muted)] line-clamp-2">\n                        Technical articles', 'text-sm text-white/70 line-clamp-2">\n                        Technical articles');

// Fix Card 3
content = content.replace('text-xl font-bold mb-1 text-[var(--text-primary)]">Projects Hub', 'text-xl font-bold mb-1 text-white">Projects Hub');
content = content.replace('text-sm text-[var(--text-muted)] line-clamp-2">\n                        Showcase of technical projects', 'text-sm text-white/70 line-clamp-2">\n                        Showcase of technical projects');

// Fix Card 4
content = content.replace('text-xl font-bold mb-1 text-[var(--text-primary)] shadow-sm">Photography', 'text-xl font-bold mb-1 text-white shadow-sm">Photography');

// Fix Card 7
content = content.replace('text-xl font-bold mb-1 text-[var(--text-primary)]">Photobooth', 'text-xl font-bold mb-1 text-white">Photobooth');
content = content.replace('text-sm text-[var(--text-muted)] line-clamp-2">\n                        Capture digital photo strips', 'text-sm text-white/70 line-clamp-2">\n                        Capture digital photo strips');

// Fix Card 5
content = content.replace(/className="block h-full w-full p-6 group relative rounded-2xl"[\s\S]*?style={{[\s\S]*?}}[\s\S]*?<div className="relative z-10 flex flex-col h-full justify-between">[\s\S]*?<MailIcon className="w-8 h-8 transition-colors duration-300 group-hover:text-\[#06B6D4\]" style={{ color: "rgba\(255, 255, 255, 0.8\)" }} \/>[\s\S]*?<div>[\s\S]*?<h3 className="text-xl font-bold mb-1" style={{ color: "#ffffff" }}>Get In Touch<\/h3>[\s\S]*?<p className="text-sm" style={{ color: "rgba\(255, 255, 255, 0.7\)" }}>/,
  `className="block h-full w-full p-6 group relative rounded-2xl glass-card">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <MailIcon className="w-8 h-8 transition-colors duration-300 group-hover:text-[#06B6D4] text-[var(--text-primary)]" />
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">Get In Touch</h3>
                      <p className="text-sm text-[var(--text-secondary)]">`);

fs.writeFileSync(file, content);
console.log('Fixed cards!');
