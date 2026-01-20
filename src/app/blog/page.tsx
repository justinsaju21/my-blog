import { BlogGrid } from "@/components/home/BlogGrid";

export const metadata = {
    title: "Blog | Justin Jacob Saju",
    description: "Read my latest thoughts on Embedded Systems, VLSI, and Tech.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#c084fc] to-[#7c3aed] bg-clip-text text-transparent inline-block filter drop-shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                            Latest Articles
                        </span>
                    </h1>
                    <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
                        Deep dives into engineering, tutorials on embedded systems, and insights into the future of tech.
                    </p>
                </header>

                {/* Reusing the server component that fetches from Sanity */}
                <BlogGrid />
            </div>
        </main>
    );
}
