import type { GrpcMetadata } from './types';

export class GrpcError extends Error {
  constructor(
    public error: string,
    public code?: number,
    public trailers?: GrpcMetadata,
    public headers?: GrpcMetadata
  ) {
    super(error);
  }
}
