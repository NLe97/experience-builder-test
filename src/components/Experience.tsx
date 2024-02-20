import React, { useEffect, useRef } from "react";
import {
  useFetchExperience,
  defineComponents,
  ExperienceRoot,
} from "@contentful/experience-builder";
import { Image } from "./Image";
import { imageComponentDefinition } from "../componentDefinitions/image";
import BasicList from "./BasicLists";
import { basiclistsComponentDefinition } from "../componentDefinitions/BasicLists";
import FormExample from "./Form";

import { environment } from "../env";

// we surfaced the client as the first step to give you more freedom over data fetching, which we are currently exploring
import { createClient } from "contentful";
import formComponentDefinition from "../componentDefinitions/Form";

const client = createClient({
  space: environment.CTFL_SPACE_ID,
  environment: environment.CTFL_ENV_ID,
  // needs to be preview token if host = 'preview.contentful.com' and delivery token if 'cdn.contentful.com'
  accessToken: environment.CTFL_TOKEN,
  // optional. Set it to 'preview.contentful.com' in "preview" mode. Uses cdn.contentful.com by default
  host: "preview.contentful.com",
});

defineComponents([{ component: Image, definition: imageComponentDefinition }]);
defineComponents([
  { component: BasicList, definition: basiclistsComponentDefinition },
]);
defineComponents([
  { component: FormExample, definition: formComponentDefinition },
]);

const Experience = () => {
  // replace with your router;
  const localeCode = "en-US";
  const slug = "form";
  const experienceTypeId: any = "benEb";
  // eslint-disable-next-line no-use-before-define

  const { fetchBySlug, fetchById, experience, isFetching } = useFetchExperience(
    {
      client,
      // id of the experience type (content type)
      // can be 'preview' or 'delivery'. By default - 'delivery'
      // use 'preview' mode to see the draft content rendered on the page you've built AND to automatically enable canvas functionality when open from the Contentful web app
      // use 'delivery' mode to see the published content rendered on the page you've built. Delivery mode does not enable canvas functionality.
      mode: "preview", // we use "preview" mode in this example to enable canvas interactions in Contentful web app and be able to build our experience
    }
  );

  const isFirstAttempt = { current: true };
  // const locale = "en-US";

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const experience = await fetchBySlug({
          slug,
          experienceTypeId,
          localeCode,
        });
        await console.log(experience, 58);
        if (!experience) {
          // handle 404 case
        }
      } catch (e) {
        // handle the errors
      }
    };

    if (!experience && isFirstAttempt.current) {
      asyncFetch();
      isFirstAttempt.current = true;
    }
  }, [experience, slug, experienceTypeId, localeCode, fetchBySlug]);

  if (!experience) {
    return null;
  }

  return (
    <ExperienceRoot
      experience={experience}
      // The locale that appears on the website first
      // You could nicely tie it to the useParam() from router or intenral state or locale manager
      // this value - en-US here is provided as an example reference
      locale="en-US"
    />
  );
};

export default Experience;
