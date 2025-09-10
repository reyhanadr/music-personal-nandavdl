"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DeleteDialog } from "./dialog-delete"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Songs = {
    id: string
    playlist_id: string
    title: string
    link: string
    artist: string
    created_at: string
}

export const columns: ColumnDef<Songs>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "playlist_id",
    header: "Playlist ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const song = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(song.id)}
            >
              Copy song ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update song </DropdownMenuItem>
            <DropdownMenuItem><DeleteDialog /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]