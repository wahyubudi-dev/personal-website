import GithubContribution from "@/components/section/contributions/github/githubContribution";
import Intro from "@/components/section/introduction/intro";
import Service from "@/components/section/services/service";
import { Separator } from "@/components/ui/separator";
import { getGithubData } from "@/services/github";

export default async function Home() {
  const githubData = await getGithubData();

  return (
    <main className="page-shell">
      <div className="page-container">
        <Intro />
        <Separator />
        <Service />
        <Separator />
        <GithubContribution data={githubData} />
      </div>
    </main>
  );
}
