import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton, TableRowSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Customers',
};

interface PageProps {
  searchParams: {
    query: string;
  };
}

export default function Page({ searchParams }: PageProps) {

  const query = searchParams.query || "";

  return (
    <div className="w-full">
      <Suspense fallback={<InvoicesTableSkeleton />}>
       <CustomersTable query={query}/>
      </Suspense> 
    </div>
  )
}