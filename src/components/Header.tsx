import { Separator } from "@radix-ui/react-separator";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 border-b border-border bg-background">
      <div>
        <h3 className="text-xl font-bold tracking-tight">Tim</h3>
      </div>

      <nav>
        <ul className="flex list-none gap-3 items-center text-sm font-medium">
          <li className="cursor-pointer hover:underline">Projects</li>
          <Separator orientation="vertical" className="h-4 bg-muted" />
          <li className="cursor-pointer hover:underline">Contact me</li>
          <Separator orientation="vertical" className="h-4 bg-muted" />
          <li className="cursor-pointer hover:underline">My resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
