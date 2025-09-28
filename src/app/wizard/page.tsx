import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    console.log("test");
  }

  return (
    <div className="container flex max-w-3xl flex-col items-center justify-between gap-4 px-7">
      <div>
        <h1 className="text-center text-4xl">
          Welcome,
          <span className="ml-2 font-bold"> {user?.firstName}!👋</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          {" "}
          Let &apos;s get started by setting up your currency
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          {" "}
          you can change these setting at any time
        </h3>
      </div>
        <Separator />
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Currency</CardTitle>
            <CardDescription>Set your default currency for transactions</CardDescription>
          </CardHeader>
          <CardContent><CurrencyComboBox/></CardContent>
        </Card>
        <Separator/>
        <Button className="w-full" asChild>
          <Link href="/">I&apos;m done! Take me to the dashboard</Link>
        </Button>
        <div className="mt-8">
          <Logo/>
        </div>
    </div>
  );
}
