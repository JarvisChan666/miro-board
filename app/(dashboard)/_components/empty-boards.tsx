"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Organization } from "@clerk/nextjs/server"
import { useOrganization } from "@clerk/nextjs"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"

export function EmptyBoards() {
    const {mutate, pending} = useApiMutation(api.board.create)
    const {organization} = useOrganization();
    const onClick = () => {
        if (!organization) return;
        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created")
        })
        .catch(() => toast.error("Failed to create board"))
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/board.svg"
            height={180}
            width={180}
            alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No borads found!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try to create a board for your organization!!
            </p>
            <div className="mt-6">
                <Button disabled={pending}onClick={onClick} size='lg'>
                    Create board
                </Button>
            </div>
        </div>
    )
}