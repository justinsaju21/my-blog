import { BlogGrid } from "@/components/home/BlogGrid";
import { AdBanner } from "@/components/ui/AdBanner";
import { BlogHeader } from "@/components/BlogHeader";

export default function BlogPreviewPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6" style={{ backgroundColor: "var(--background)" }}>
            <div className="max-w-5xl mx-auto">
                <BlogHeader />
                <AdBanner slot="after-hero" />
                <BlogGrid />
            </div>
        </div>
    );
}
