// @author madebycm (2025)
// Admin dashboard page with role-based access control
import { redirect } from "next/navigation";
import { auth } from "@/backend/auth";

export default async function AdminPage() {
  const session = await auth();

  // Redirect if not logged in or not admin
  if (!session || session.user?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Users</h3>
          <p className="text-muted-foreground mb-4">Manage user accounts and permissions</p>
          <p className="text-2xl font-bold">--</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-muted-foreground mb-4">View site statistics and metrics</p>
          <p className="text-2xl font-bold">--</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-muted-foreground mb-4">Configure system settings</p>
          <p className="text-2xl font-bold">--</p>
        </div>
      </div>
      
      <div className="mt-8 rounded-lg border bg-muted/50 p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {session.user?.username}</h2>
        <p className="text-muted-foreground">
          You have admin access to this application. Use the navigation above to manage different aspects of the system.
        </p>
      </div>
    </div>
  );
}