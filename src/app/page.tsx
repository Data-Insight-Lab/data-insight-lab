import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Home } from '@/components/Home';
import { Services } from '@/components/Services';

export default function App() {
  return (
    <div className="mx-auto max-w-5xl">
      <Home />
      <Blog />
      <Services />
      <Contact />
    </div>
  );
}
