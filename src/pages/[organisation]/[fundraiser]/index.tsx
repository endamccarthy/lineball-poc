import React from "react";
import Head from "next/head";
import ResultsTable from "@/components/Table";
import Search from "@/components/Search";
import { Card } from "@tremor/react";

const Fundraiser = ({ searchParams }: { searchParams?: { q: string } }) => {
  // const pathname = usePathname();
  // const search = searchParams?.q ?? "";

  const entries = [
    {
      id: 1,
      name: "Enda McCarthy",
      points: 0,
    },
  ];

  return (
    <>
      <Head>
        <title>Fundraiser</title>
      </Head>
      <Search />
      <Card className="mt-6">
        <ResultsTable entries={entries} />
      </Card>
    </>
  );
};

export default Fundraiser;
