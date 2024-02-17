import { HeroForm } from '@/components/form';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <section className="container fixed inset-y-0 mt-20 flex flex-col items-center gap-3 overflow-x-auto text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        next-equities
      </h1>

      <div className="mt-2 flex gap-4">
        <Button asChild>
          <a href="/watchlist">watchlist</a>
        </Button>
        <Button asChild>
          <a href="/next">next</a>
        </Button>
        <Button asChild>
          <a href="/starter">starter</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#">
            <Icons.gitHub className="mr-2 size-4" /> Github
          </a>
        </Button>
      </div>

      <div className="mt-1">
        <HeroForm />
      </div>
    </section>
  );
};

export default Home;
