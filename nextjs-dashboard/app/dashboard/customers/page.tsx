import { fetchFilteredCustomers } from "@/app/lib/data";
import Table from "@/app/ui/customers/table";

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <main>
      <h1 className="text-2xl font-bold">Customers</h1>
      <div className="mt-4">
        <Table customers={customers} />
      </div>
    </main>
  );
}