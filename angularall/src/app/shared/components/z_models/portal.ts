export let portalId = 0;
export function nextPortalId(): string {
  let portal = `portalId-${portalId++}`;
  return portal;
}
