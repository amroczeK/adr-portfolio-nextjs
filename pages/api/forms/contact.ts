import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient, gql } from "graphql-request";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const variables: {
    fullName: string;
    subject: string;
    phoneNumber: string;
    emailAddress: string;
    organisationName: string;
    questions: string;
  } = req.body;

  const mutation = gql`
    mutation CreateContactSubmission(
      $fullName: String!
      $subject: String!
      $phoneNumber: String!
      $emailAddress: String!
      $organisationName: String!
      $questions: String!
    ) {
      createContactForm(
        data: {
          name: $fullName
          subject: $subject
          phoneNumber: $phoneNumber
          emailAddress: $emailAddress
          organisation: $organisationName
          questions: $questions
        }
      ) {
        id
      }
    }
  `;

  const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API!, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_MUTATION_TOKEN}`,
    },
  });

  try {
    await client.request(mutation, variables);
    res.status(200).json({ success: true });
  } catch (error) {
    res
      .status(error?.response?.status || 400)
      .json({ success: false, error: error?.response?.errors || error });
  }
};
