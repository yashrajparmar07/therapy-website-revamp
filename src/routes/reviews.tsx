import { createFileRoute, Link } from '@tanstack/react-router';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/therapy';
import { pageHead } from '@/lib/clinic';
export const Route = createFileRoute('/reviews')({ head: () => pageHead('Reviews', 'Genuine feedback for Dr Swaliha Khanam. Patient reviews will be shared here when available.'), component: Reviews });
function Reviews() { return <><PageIntro eyebrow="REVIEWS" title="Every journey is" accent="personal.">A thoughtful space for genuine experiences, shared with care.</PageIntro><section className="reviews-empty"><MessageCircle size={42} strokeWidth={1} /><h2>Patient reviews are <em>not yet available.</em></h2><p>Genuine feedback will be shared here when provided. In the meantime, you’re welcome to learn about my approach or reach out with your questions.</p><Button asChild variant="therapy"><Link to="/about">Get to know my approach <ArrowUpRight /></Link></Button></section></>; }
