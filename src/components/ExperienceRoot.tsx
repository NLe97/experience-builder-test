import React, { useEffect, useRef } from "react";
import {
  useFetchExperience,
  defineComponents,
  ExperienceRoot,
} from "@contentful/experience-builder";

// we surfaced the client as the first step to give you more freedom over data fetching, which we are currently exploring
import { createClient } from "contentful";
import { AnyARecord } from "dns";

const client = createClient({
  space: "4163m42u0lcs",
  environment: "master",
  // needs to be preview token if host = 'preview.contentful.com' and delivery token if 'cdn.contentful.com'
  accessToken: "-u47xvK3VB7gB4FfZQzcaq-Sccs3LWpzpkbBHArpMak",
  // optional. Set it to 'preview.contentful.com' in "preview" mode. Uses cdn.contentful.com by default
  host: "preview.contentful.com",
});

import { Image } from './Image';

import {
  imageComponentDefinition,
} from '../componentDefinitions/image'

defineComponents([
  { component: Image, definition: imageComponentDefinition},
]);


const App = () => {
  // replace with your router;
  const router = {};

  const locale = "en-US";
  const slug = "4Ggd2wOPoGg77Sa44EC6yD";
  const experienceTypeId :any = "benEb";
  // eslint-disable-next-line no-use-before-define
  const { fetchBySlug, fetchById, experience, isFetching } = useFetchExperience(
    {
      client,
      // id of the experience type (content type)
      experienceTypeId: "benEb",
      // can be 'preview' or 'delivery'. By default - 'delivery'
      // use 'preview' mode to see the draft content rendered on the page you've built AND to automatically enable canvas functionality when open from the Contentful web app
      // use 'delivery' mode to see the published content rendered on the page you've built. Delivery mode does not enable canvas functionality.
      mode: "preview", // we use "preview" mode in this example to enable canvas interactions in Contentful web app and be able to build our experience
    }
  );

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const experience = await fetchBySlug({
          slug,
          experienceTypeId,
          locale,
        });
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
  }, [experience, slug, experienceTypeId, locale, fetchBySlug]);

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

export default App;
