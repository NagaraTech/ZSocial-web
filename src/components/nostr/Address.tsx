import { useEvent, useReactions } from "@habla/nostr/hooks";
import {
  LONG_FORM,
  LONG_FORM_DRAFT,
  ZAP,
  HIGHLIGHT,
  REACTION,
} from "@habla/const";
import LongFormNote from "./LongFormNote";
import Feed from "./Feed";

export default function Address({ naddr, kind, identifier, pubkey, relays }) {
  const event = useEvent({
    kinds: [kind],
    "#d": [identifier],
    authors: [pubkey],
  });

  if (event && (kind === LONG_FORM || kind === LONG_FORM_DRAFT)) {
    return <LongFormNote event={event} relays={relays} />;
  }

  return <code>{JSON.stringify(event, null, 2)}</code>;
}
