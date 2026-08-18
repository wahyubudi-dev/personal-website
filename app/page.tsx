import GithubContribution from "@/components/section/contributions/github/githubContribution";
import Intro from "@/components/section/introduction/intro";
import Service from "@/components/section/services/service";
import { Separator } from "@/components/ui/separator";
import { getGithubData } from "@/services/github";

export default async function Home() {
  const githubData = await getGithubData();

  return (
    <main className="flex flex-col items-center py-16 gap-6 px-8 lg:px-0">
      <div className="max-w-[50rem] w-full">
        <Intro />
        <Separator />
        <Service />
        <Separator />
        <GithubContribution data={githubData} />
      </div>
    </main>
  );
}
