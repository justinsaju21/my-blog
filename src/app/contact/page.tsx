import { Mail, MapPin, Clock, Send } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact | Justin Jacob Saju",
    description: "Get in touch with Justin Jacob Saju",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-accent-cyan/10 border border-accent-cyan/20">
                        <Mail className="w-4 h-4 text-accent-cyan" />
                        <span className="text-sm font-medium text-accent-cyan">Get In Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-foreground">Contact </span>
                        <span className="text-gradient">Me</span>
                    </h1>
                    <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
                        Have a question, project idea, or just want to say hello? I&apos;d love to hear from you!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Email Card */}
                    <a
                        href="mailto:justinsaju21@gmail.com"
                        className="glass rounded-2xl p-8 hover:glow transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-accent-cyan/10 group-hover:bg-accent-cyan/20 transition-colors">
                                <Mail className="w-6 h-6 text-accent-cyan" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                                    Email
                                </h3>
                                <p className="text-foreground-muted">
                                    justinsaju21@gmail.com
                                </p>
                                <p className="text-sm text-foreground-dim mt-2">
                                    Best for detailed inquiries
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Location Card */}
                    <div className="glass rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-accent-purple/10">
                                <MapPin className="w-6 h-6 text-accent-purple" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    Location
                                </h3>
                                <p className="text-foreground-muted">
                                    Chennai, India
                                </p>
                                <p className="text-sm text-foreground-dim mt-2">
                                    Available for remote collaborations
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Response Time Card */}
                    <div className="glass rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-accent-blue/10">
                                <Clock className="w-6 h-6 text-accent-blue" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    Response Time
                                </h3>
                                <p className="text-foreground-muted">
                                    Within 24-48 hours
                                </p>
                                <p className="text-sm text-foreground-dim mt-2">
                                    Usually much faster!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Card */}
                    <div className="glass rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-accent-pink/10">
                                <Send className="w-6 h-6 text-accent-pink" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    Quick Connect
                                </h3>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    <a
                                        href="https://www.linkedin.com/in/justin-jacob-saju-742b28270/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-foreground-muted hover:text-accent-cyan hover:bg-white/10 transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/justinsaju21"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-foreground-muted hover:text-accent-cyan hover:bg-white/10 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://instagram.com/justinnnn_21"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-foreground-muted hover:text-accent-cyan hover:bg-white/10 transition-colors"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Let&apos;s Build Something Amazing
                    </h2>
                    <p className="text-foreground-muted mb-6 max-w-xl mx-auto">
                        Whether you have a project in mind, need technical consultation, or want to discuss collaboration opportunities, feel free to reach out.
                    </p>
                    <a
                        href="mailto:justinsaju21@gmail.com?subject=Hello from your website!"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-midnight font-semibold hover:opacity-90 transition-opacity"
                    >
                        <Mail className="w-5 h-5" />
                        Send an Email
                    </a>
                </div>

                {/* Back Home Link */}
                <div className="text-center mt-8">
                    <Link
                        href="/"
                        className="text-foreground-muted hover:text-accent-cyan transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
