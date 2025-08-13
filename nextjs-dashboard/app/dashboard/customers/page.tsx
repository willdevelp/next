import { fetchFilteredCustomers } from "@/app/lib/data";
import Table from "@/app/ui/customers/table";

export default async function Page() {
  try {
    const customers = await fetchFilteredCustomers('');

    if (!customers || customers.length === 0) {
      return (
        <main>
          <h1 className="text-2xl font-bold">Customers</h1>
          <div className="mt-4">
            <p>No customers found.</p>
          </div>
        </main>
      );
    }

    return (
      <main>
        <h1 className="text-2xl font-bold">Customers</h1>
        <div className="mt-4">
          <Table customers={customers} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching customers:', error);
    return (
      <main>
        <h1 className="text-2xl font-bold">Error</h1>
        <div className="mt-4">
          <p>Failed to load customers. Please try again later.</p>
        </div>
      </main>
    );
  }
}