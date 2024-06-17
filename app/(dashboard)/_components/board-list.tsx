import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loading } from "@/components/auth/loading";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export function BoardList({ orgId, query }: BoardListProps) {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorite boards" : "Team board"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
            <NewBoardButton orgId={orgId} disabled/>
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            </div>
      </div>
    );
  }

  // user search for something that doesn't exist
  if (!data?.length && query.search) {
    return (
      <div className="h-full">
        <EmptySearch />
      </div>
    );
  }
  if (!data?.length && query.favorites) {
    return (
      <div className="h-full">
        <EmptyFavorites />
      </div>
    );
  }
  if (!data?.length) {
    return (
      <div className="h-full">
        <EmptyBoards />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite boards" : "Team board"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
}
