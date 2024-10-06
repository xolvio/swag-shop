import { ApolloLink } from "@apollo/client";

export const instantMockLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const graphId = "";
    const variantName = "";
    const operationName = operation.operationName;
    const operationMatchArguments = operation.variables;
    const seedResponse = response.data;

    const apiUrl = `http://localhost:3001/api/seeds?variantName=${variantName}&graphId=${graphId}`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seedResponse: seedResponse,
        sequenceId: "test",
        operationName: operationName,
        operationMatchArguments: operationMatchArguments,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Seed registered successfully:", json);
      })
      .catch((err) => {
        console.error("Error creating seed:", err);
      });

    return response;
  });
});

