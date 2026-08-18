import { Imessage, useMessage } from "@/common/lib/store/messages";
import { useUser } from "@/common/lib/store/user";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface MessageMenuProps {
  message: Imessage;
}

export default function MessageMenu({ message }: MessageMenuProps) {
  const { user } = useUser((state) => state);
  const { setActionMessage } = useMessage((state) => state);

  if (user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="absolute right-1.5 top-1.5 invisible group-hover:visible"
        >
          <Button
            variant="outline"
            className="p-0 h-6 w-6 rounded-[7px] border-[1.5px]"
          >
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32 border shadow-sm" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem>Reply</DropdownMenuItem>
            {message.users?.id === user?.id && (
              <>
                {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    document.getElementById("trigger-delete")?.click();
                    setActionMessage(message);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return <></>;
}
