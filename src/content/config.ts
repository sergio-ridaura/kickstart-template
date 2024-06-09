import developsCollection from "@cmp/develop/developsCollection";
import { issuesCollection } from "@cmp/issue/issuesCollection";
import { milestonesCollection } from "@cmp/milestone/millestonesCollection";
import postsCollection from "@cmp/post/postsCollection";

export const collections = {
  developsCollection,
  issuesCollection,
  milestonesCollection,
  documentation: postsCollection,
};
