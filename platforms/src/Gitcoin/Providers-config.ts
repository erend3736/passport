import { PlatformSpec, PlatformGroupSpec } from "../types";

export const gitcoinPlatformDetails: PlatformSpec = {
  icon: "./assets/gitcoinStampIcon.svg",
  platform: "Gitcoin",
  name: "Gitcoin",
  description: "Connect with Github to verify with your Gitcoin account.",
  connectMessage: "Connect Account",
};

export const GitcoinProviderConfig: PlatformGroupSpec[] = [
  {
    platformGroup: "Contributed to...",
    providers: [
      { title: "more than 1 Grant", name: "GitcoinContributorStatistics#numGrantsContributeToGte#1" },
      { title: "more than 10 Grants", name: "GitcoinContributorStatistics#numGrantsContributeToGte#10" },
      { title: "more than 25 Grants", name: "GitcoinContributorStatistics#numGrantsContributeToGte#25" },
      { title: "more than 100 Grants", name: "GitcoinContributorStatistics#numGrantsContributeToGte#100" },
    ],
  },
  {
    platformGroup: "Contributed ($)...",
    providers: [
      { title: "more than $10", name: "GitcoinContributorStatistics#totalContributionAmountGte#10" },
      { title: "more than $100", name: "GitcoinContributorStatistics#totalContributionAmountGte#100" },
      { title: "more than $1000", name: "GitcoinContributorStatistics#totalContributionAmountGte#1000" },
    ],
  },
  {
    platformGroup: "Contributed in...",
    providers: [
      { title: "GR14", name: "GitcoinContributorStatistics#numGr14ContributionsGte#1" },
      { title: "more than 1 Round", name: "GitcoinContributorStatistics#numRoundsContributedToGte#1" },
    ],
  },
  {
    platformGroup: "Owner of...",
    providers: [{ title: " more than 1 Grant", name: "GitcoinGranteeStatistics#numOwnedGrants#1" }],
  },
  {
    platformGroup: "Grants have more than...",
    providers: [
      { title: "10 Contributors", name: "GitcoinGranteeStatistics#numGrantContributors#10" },
      { title: "25 Contributors", name: "GitcoinGranteeStatistics#numGrantContributors#25" },
      { title: "100 Contributors", name: "GitcoinGranteeStatistics#numGrantContributors#100" },
    ],
  },
  {
    platformGroup: "Grants have received...",
    providers: [
      { title: "more than $100", name: "GitcoinGranteeStatistics#totalContributionAmount#100" },
      { title: "more than $1000", name: "GitcoinGranteeStatistics#totalContributionAmount#1000" },
      { title: "more than $10000", name: "GitcoinGranteeStatistics#totalContributionAmount#10000" },
    ],
  },
  {
    platformGroup: "Eco/Cause Rounds",
    providers: [
      {
        title: "owner of more than 1 Grant in Eco/Cause Rounds",
        name: "GitcoinGranteeStatistics#numGrantsInEcoAndCauseRound#1",
      },
    ],
  },
];
