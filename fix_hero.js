const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace Hero section styles

content = content.replace(
  'border: "1px solid rgba(124, 58, 237, 0.3)",\n              backgroundColor: "rgba(30, 0, 40, 0.3)",',
  'border: "1px solid color-mix(in srgb, var(--accent-purple) 30%, transparent)",\n              backgroundColor: "color-mix(in srgb, var(--accent-purple) 10%, transparent)",'
);

content = content.replace(
  'backgroundColor: "#06B6D4"',
  'backgroundColor: "var(--accent-cyan)"'
);

content = content.replace(
  'background: "linear-gradient(135deg, #C084FC 0%, #22D3EE 100%)",\n                WebkitBackgroundClip: "text",\n                WebkitTextFillColor: "transparent",\n                backgroundClip: "text",\n                filter: "drop-shadow(0 0 30px rgba(192, 132, 252, 0.4))"',
  'background: "linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-cyan) 100%)",\n                WebkitBackgroundClip: "text",\n                WebkitTextFillColor: "transparent",\n                backgroundClip: "text",\n                filter: "drop-shadow(0 0 30px color-mix(in srgb, var(--accent-purple) 40%, transparent))"'
);

content = content.replace(
  '<span style={{ color: "#22D3EE", fontWeight: 500 }}>portfolio</span>,{" "}\n            <span style={{ color: "#C084FC", fontWeight: 500 }}>blog</span>, and{" "}\n            <span style={{ color: "rgba(192, 132, 252, 0.8)", fontWeight: 500 }}>projects</span>',
  '<span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>portfolio</span>,{" "}\n            <span style={{ color: "var(--accent-purple)", fontWeight: 600 }}>blog</span>, and{" "}\n            <span style={{ color: "var(--accent-pink)", fontWeight: 600 }}>projects</span>'
);

content = content.replace(
  'backgroundColor: "#7C3AED",\n                color: "#ffffff",\n                boxShadow: "0 0 30px -5px rgba(124, 58, 237, 0.6)"',
  'backgroundColor: "var(--accent-purple)",\n                color: "#ffffff",\n                boxShadow: "0 0 30px -5px color-mix(in srgb, var(--accent-purple) 60%, transparent)"'
);

content = content.replace(
  'className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all pointer-events-auto"',
  'className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold hover:bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] transition-all pointer-events-auto"'
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed hero!');
