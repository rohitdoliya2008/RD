import { Clock } from "./Clock";
import { ListenerCount } from "./ListenerCount";
import { SocialLinks } from "./SocialLinks";

export function TopRow() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-10 grid grid-cols-[1fr_auto_1fr] items-start gap-3
                 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]
                 pt-[max(1rem,env(safe-area-inset-top))]"
    >
      <div className="flex justify-start">
        <Clock />
      </div>
      <div className="flex justify-center">
        <ListenerCount />
      </div>
      <div className="flex justify-end">
        <SocialLinks />
      </div>
    </div>
  );
}
