"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Imofoed. Welcome to{" "}
        <span className="underline">NotionClone</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        NotionClone is connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Spinner size="icon" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal" afterSignInUrl="/documents">
            <Button>
              Enther NotionClone
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button asChild>
            <Link href="/documents">
              Endter NotionClone
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </>
      )}
    </div>
  );
};
