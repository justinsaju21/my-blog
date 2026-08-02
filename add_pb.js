const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const photoboothCard = `
            {/* Card 7: Photobooth (2x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="md:col-span-2 md:row-span-1"
            >
              <TiltCard>
                <Link
                  href="https://photobooth.justinsaju.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full p-6 group relative rounded-2xl glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start">
                      <Camera className="w-8 h-8 transition-colors duration-300 text-[var(--text-primary)] group-hover:text-[#F472B6]" />
                      <ChevronRight
                        className="w-6 h-6 text-[var(--text-secondary)] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Photobooth</h3>
                      <p className="text-sm text-white/70 line-clamp-2">
                        Capture digital photo strips with real-time filters and themes.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </Link>
              </TiltCard>
            </motion.div>

            {/* Native Ad 1`;

content = content.replace('            {/* Native Ad 1', photoboothCard);
fs.writeFileSync('src/app/page.tsx', content);
console.log('Added photobooth!');
