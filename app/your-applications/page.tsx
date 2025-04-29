import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Download, Filter, Search } from "lucide-react"
import Link from "next/link"
import { ApplicationsTable } from "@/components/applications-table"
import { Input } from "@/components/ui/input"

export default function YourApplications() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Your Applications</h1>
          <p className="text-muted-foreground">Track and manage all your job applications in one place</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="shrink-0">
            <Download className="h-4 w-4" />
            <span className="sr-only">Export</span>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <Link href="/applications/new">
              <PlusCircle className="h-5 w-5" />
              New Application
            </Link>
          </Button>
        </div>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Applications Spreadsheet</CardTitle>
          <CardDescription>View and edit your applications in a familiar spreadsheet format</CardDescription>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search applications..." className="pl-8 bg-background/50" />
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ApplicationsTable />
        </CardContent>
      </Card>
    </div>
  )
}
