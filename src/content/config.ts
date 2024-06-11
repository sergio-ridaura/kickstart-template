import developsCollection from "@/src/components/astro/develop/developsCollection";
import issuesCollection from "@/src/components/astro//issue/issuesCollection";
import milestonesCollection from "@/src/components/astro//milestone/millestonesCollection";
import postsCollection from "@/src/components/astro//post/postsCollection";

export const collections = {
  developsCollection,
  issuesCollection,
  milestonesCollection,
  documentation: postsCollection,
};
