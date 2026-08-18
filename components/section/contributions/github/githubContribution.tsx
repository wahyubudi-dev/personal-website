import { GITHUB_ACCOUNTS } from "@/common/constant/github";
import { githubAccountUrl } from "@/common/constant/socials";
import { Badge } from "@/components/ui/badge";
import { Github, GitPullRequestDraft } from "lucide-react";
import HeaderTitle from "@/components/global/header/header-title";
import Link from "next/link";
import Overview from "./overview";
import Calendar from "./calendar";

interface GithubContributionProps {
  data: any;
}

export default function GithubContribution({ data }: GithubContributionProps) {
  return (
    <section className="py-6 flex flex-col gap-5">
      <HeaderTitle
        name="Contributions"
        descriptions="Github contribution and activities statistics"
        leadingIcon={GitPullRequestDraft}
        prefixChildren={
          <Link href={githubAccountUrl} target="_blank">
            <Badge className="flex gap-1 items-center justify-center py-1.5">
              <Github size={16} strokeWidth={2} /> @{GITHUB_ACCOUNTS.username}
            </Badge>
          </Link>
        }
      />
      {!data && (
        <div className="flex items-center justify-center py-2 text-sm font-medium">
          Data not found!
        </div>
      )}
      {data && (
        <div className="space-y-3">
          <Overview data={data} />
          <Calendar data={data} />
        </div>
      )}
    </section>
  );
}
