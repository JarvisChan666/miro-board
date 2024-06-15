import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "../hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export function Item({ id, name, imageUrl }: ItemProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
    {/* Use hint component to show hint */}
      <Hint 
      label={name}
      side="right"
      align="start"
      sideOffset={18}
      >
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={onClick}
          // cn library: You put first className as defalut and then implement logic
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
}
