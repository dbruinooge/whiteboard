import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const client = createClient({
  publicApiKey: 'pk_dev_TiVRGfX4oG2pTwUMDC9HqDqpXJrgehFrS9fA_77jmqFGnvodpkak6SUSAdjFLoCd',
});

export const { RoomProvider, useMap } = createRoomContext(client);