import gql from "graphql-tag";
import graphqlClient from ".";

class QueryManager {
  async createPost(title: any, content: any) {
    const { data } = await graphqlClient.mutate({
      mutation: gql`
        mutation CreatePost{
          createPost(title: "${title}", content: "${content}") {
            id
            title
            content
            date
          }
        }
      `,
    });

    return data.createPost;
  }
  async getPosts() {
    const { data } = await graphqlClient.query({
      query: gql`
        query {
          getPosts {
            id
            title
            content
            date
          }
        }
      `,
    });

    return data.getPosts;
  }
}

export default new QueryManager();
