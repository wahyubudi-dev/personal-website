"use client";

import { redirect } from "next/navigation";
import { createClient } from "./client";

export const handleLogout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();

  return true;
};

export const handleSignInWithGoogle = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: location.origin + "/api/auth/callback",
    },
  });

  if (error) {
    redirect("/error");
  }

  return { data, error };
};

export const handleSignInWithGithub = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: location.origin + "/api/auth/callback",
    },
  });

  if (error) {
    redirect("/error");
  }

  return { data, error };
};
