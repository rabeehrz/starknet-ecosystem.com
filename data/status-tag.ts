import {Tag} from "./tag";

export enum Status{
  ALL="all", LIVE="live", TESTNET="testnet"
}

// Return status for a given value
export function getStatus(value: string): Status {
  // Wrap value
  switch (value) {
    case Status.LIVE:
      return Status.LIVE;
    case Status.TESTNET:
      return Status.TESTNET;
  }
  return Status.ALL;
}

export const allStatusTags: Tag[] = [
  {
    value: Status.ALL,
    label: "All",
  },
  {
    value: Status.LIVE,
    label: "Live",
  },
  {
    value: Status.TESTNET,
    label: "Testnet",
  }
];
