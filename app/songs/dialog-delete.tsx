import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DeleteDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <p>Delete</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete song</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this song?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" type="submit">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
