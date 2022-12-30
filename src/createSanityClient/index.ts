import sanityClient, { ClientConfig, SanityClient } from '@sanity/client';

export function createSanityClient(config: ClientConfig): SanityClient {
  return sanityClient(config);
}