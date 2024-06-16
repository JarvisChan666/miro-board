import { Button } from "@/components/ui/button"
import Image from "next/image"


export function EmptyBoards() {
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
                <Button size='lg'>
                    Create board
                </Button>
            </div>
        </div>
    )
}