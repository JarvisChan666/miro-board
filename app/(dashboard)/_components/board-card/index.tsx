"use client"
import { Link } from 'lucide-react';
import { create } from '../../../../convex/board';
import Image from 'next/image';
import { Overlay } from './overlay';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { Footer } from './footer';
import { BoardList } from '../board-list';
import { Skeleton } from '@/components/ui/skeleton';


interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
};

export function BoardCard({
    id,
    title,
    authorName,
    authorId,
    createAt,
    imageUrl,
    orgId, 
    isFavorite,
} : BoardCardProps) {
    const {userId} = useAuth();

    const authorLabel = userId == authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createAt, {
        addSuffix: true,
    })
    return (
        <Link href={`/board/${id}`}>
            {/* we use group to group overlay and overlay has "group" too */}
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image 
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-fit"    
                    />
                    <Overlay />
                </div>
                <Footer 
                isFavorite={isFavorite}
                title={title}
                authorLabel={authorLabel}
                createdAtLabel={createdAtLabel}
                onClick={() => {}}
                disabled={false}
                />
            </div>
        </Link>
    );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full"/>
        </div>
    )
}