import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export function Footer() {
  return (
    <footer className="flex justify-between items-start p-8 border-t border-zinc-800 bg-gradient-footer">
      <div>
        <p>Data Inside Lab</p>
        <p className="text-xs text-neutral-400 mt-4">
          @2023 Data Inside Lab. All rights reserved
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 cursor-pointer">
          <AiFillLinkedin
            name="linkedin-square"
            className="h-6 w-6 text-neutral-200 hover:text-white"
          />
          <AiFillInstagram
            name="instagram"
            className="h-6 w-6 text-neutral-200 hover:text-white"
          />
          <AiFillYoutube
            name="youtube"
            className="h-6 w-6 text-neutral-200 hover:text-white"
          />
        </div>
      </div>
    </footer>
  );
}
