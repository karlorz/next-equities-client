export interface WatchlistDto {
  id?: string;
  issue: string;

  createdAt?: string;
  createdBy?: string;
  lastModified?: string;
  lastModifiedBy?: string;
}

export interface Watchlist {
  id?: string;
  issue: string;

  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  lastModifiedBy?: string;
}
