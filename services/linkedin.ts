import { Client } from "linkedin-private-api";
import { LINKEDIN_ACCOUNTS } from "@/common/constant/linkedin";

export const getLinkedinProfile = async () => {
  try {
    const email = LINKEDIN_ACCOUNTS.email as string;
    const password = LINKEDIN_ACCOUNTS.email as string;

    const client = new Client();
    await client.login.userPass({ username: email, password });

    const profile = await client.profile.getOwnProfile();

    return profile;
  } catch (err) {
    console.error(err);
    return;
  }
};
