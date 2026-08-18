import {
  handleSignInWithGithub,
  handleSignInWithGoogle,
} from "@/common/lib/supabase/auth-action";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex items-center gap-5">
      <Button
        onClick={handleSignInWithGoogle}
        className="w-full space-x-4 shadow bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-400 dark:border-gray-600 hover:bg-background"
      >
        <FcGoogle size={18} />
        <p className="font-medium text-base">Continue with Google</p>
      </Button>
      {/* <Button
        onClick={handleSignInWithGithub}
        className="w-full space-x-4 shadow bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-400 dark:border-gray-600 hover:bg-background"
      >
        <FaGithub size={18} />
        <p className="font-medium text-base">Continue with Github</p>
      </Button> */}
    </div>
  );
}
