import { Shield } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Justin Jacob Saju",
    description: "Privacy Policy for justinsaju.me",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-accent-cyan/10 border border-accent-cyan/20">
                        <Shield className="w-4 h-4 text-accent-cyan" />
                        <span className="text-sm font-medium text-accent-cyan">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-foreground">Privacy </span>
                        <span className="text-gradient">Policy</span>
                    </h1>
                    <p className="text-foreground-muted">
                        Last updated: January 31, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                        <p className="text-foreground-muted leading-relaxed">
                            Welcome to justinsaju.me (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                        <p className="text-foreground-muted leading-relaxed mb-4">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                            <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
                            <li><strong>Device Information:</strong> Browser type, operating system, and device type.</li>
                            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
                            <li><strong>Contact Information:</strong> If you voluntarily provide your email address through our newsletter or contact form.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                        <p className="text-foreground-muted leading-relaxed mb-4">
                            We use the collected information for:
                        </p>
                        <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                            <li>Improving our website and user experience</li>
                            <li>Analyzing website traffic and usage patterns</li>
                            <li>Sending newsletters (if you subscribed)</li>
                            <li>Responding to your inquiries</li>
                            <li>Displaying relevant advertisements through Google AdSense</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                        <p className="text-foreground-muted leading-relaxed mb-4">
                            Our website uses the following third-party services:
                        </p>
                        <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                            <li><strong>Google AdSense:</strong> Displays advertisements. Google may use cookies to serve ads based on your prior visits. You can opt out at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">Google Ad Settings</a>.</li>
                            <li><strong>Google Analytics:</strong> Analyzes website traffic. Data is anonymized and used for statistical purposes.</li>
                            <li><strong>Vercel:</strong> Hosts our website and may collect server logs.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                        <p className="text-foreground-muted leading-relaxed">
                            We use cookies to enhance your experience. These include essential cookies for website functionality and analytics cookies for understanding usage patterns. You can control cookies through your browser settings. Note that disabling cookies may affect your experience on our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                        <p className="text-foreground-muted leading-relaxed mb-4">
                            Depending on your location, you may have the following rights:
                        </p>
                        <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                            <li>Access your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt out of marketing communications</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                        <p className="text-foreground-muted leading-relaxed">
                            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
                        <p className="text-foreground-muted leading-relaxed">
                            Our website is not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                        <p className="text-foreground-muted leading-relaxed">
                            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                        <p className="text-foreground-muted leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-accent-cyan mt-2">
                            <a href="mailto:justinsaju21@gmail.com" className="hover:underline">justinsaju21@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
