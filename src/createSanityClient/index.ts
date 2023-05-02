import { createClient, ClientConfig, SanityClient } from '@sanity/client';

export function createSanityClient(config: ClientConfig): SanityClient {
  return createClient(config);
}