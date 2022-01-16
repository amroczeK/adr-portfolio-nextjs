import { EmojiSadIcon } from "@heroicons/react/solid";

export default function Custom404() {
  return (
    <div className="notfoundpage bg-secondary-dark p-4">
      <EmojiSadIcon className="w-48 h-48 text-primary-dark" />
      <p className="text-2xl text-primary-dark font-bold tracking-widest">
        404 - Page Not Found
      </p>
    </div>
  );
}
