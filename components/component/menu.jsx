/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/gNVVM6oqbiE
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Menu() {
  return (
    (<div
      className="grid h-screen text-sm md:text-base items-stretch w-full min-h-screen">
      <div
        className="flex flex-col w-full min-h-screen bg-gray-100 p-0.5 md:p-1 dark:bg-gray-800">
        <div className="grid h-screen w-full grid-cols-1 md:grid-cols-[300px_1fr]">
          <div
            className="hidden bg-white md:flex flex-col border-r border-gray-100 dark:border-gray-800">
            <div className="flex items-center h-16 px-4 border-b md:px-6">
              <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
                <Package2Icon className="w-6 h-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Button className="ml-auto rounded-full" size="icon" variant="ghost">
                <BellIcon className="h-5 w-5" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
              <div className="grid gap-4 px-4">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800"
                  href="#">
                  <HomeIcon className="w-4 h-4" />
                  Home
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                  href="#">
                  <BarChartIcon className="w-4 h-4" />
                  Analytics
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                  href="#">
                  <SettingsIcon className="w-4 h-4" />
                  Settings
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                  href="#">
                  <UserIcon className="w-4 h-4" />
                  Profile
                </Link>
              </div>
            </nav>
          </div>
          <div className="flex flex-col w-full min-h-screen">
            <header className="flex items-center h-16 px-4 border-b md:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="rounded-full md:hidden" size="icon" variant="outline">
                    <MenuIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex items-center h-16 px-4 border-b md:px-6">
                    <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
                      <Package2Icon className="w-6 h-6" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Button className="ml-auto rounded-full" size="icon" variant="ghost">
                      <BellIcon className="h-5 w-5" />
                      <span className="sr-only">Toggle notifications</span>
                    </Button>
                  </div>
                  <nav className="flex-1 overflow-y-auto py-4">
                    <div className="grid gap-4 px-4">
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800"
                        href="#">
                        <HomeIcon className="w-4 h-4" />
                        Home
                      </Link>
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                        href="#">
                        <BarChartIcon className="w-4 h-4" />
                        Analytics
                      </Link>
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                        href="#">
                        <SettingsIcon className="w-4 h-4" />
                        Settings
                      </Link>
                      <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                        href="#">
                        <UserIcon className="w-4 h-4" />
                        Profile
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
              <form className="flex items-center ml-auto gap-2 md:gap-4 lg:gap-6">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </form>
            </header>
            <main className="flex-1 w-full min-h-[calc(100vh_-_theme(spacing.16))]">
              <div className="container grid gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-10">
                <div className="flex flex-col gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                      <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium">Sales</CardTitle>
                      <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                      <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 1-2 2H5a2 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 1 7.24 3h9.52a2 1.8 1.1L21" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 1 12 0c0 7 3 9 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 3.4" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 7v11a2 2 0 1-2 2H5a2 1-2-2z" />
      <polyline points="9 22 12 15" />
    </svg>)
  );
}


function BarChartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0-2 2v.18a2 1-1 1.73l-.43.25a2 1-2 0l-.15-.08a2 0-2.73.73l-.22.38a2 .73 2.73l.15.1a2 1 1.72v.51a2 1.74l-.15.09a2 0-.73 2.73l.22.38a2 2.73.73l.15-.08a2 0l.43.25a2 1.73V20a2 2h.44a2 2-2v-.18a2 1-1.73l.43-.25a2 0l.15.08a2 2.73-.73l.22-.39a2 0-.73-2.73l-.15-.08a2 1-1-1.74v-.5a2 1-1.74l.15-.09a2 .73-2.73l-.22-.38a2 0-2.73-.73l-.15.08a2 0l-.43-.25a2 1-1-1.73V4a2 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0-4-4H9a4 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function DollarSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 7h5a3.5 1 7H6" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0-4-4H6a4 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 1 7.75" />
    </svg>)
  );
}


function CreditCardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>)
  );
}


function ActivityIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>)
  );
}
