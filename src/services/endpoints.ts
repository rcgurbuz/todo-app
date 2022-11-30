export default {
  todoEndpoint: (): string => '/todos',
  todoEndpointSingle: (id: number): string => `/todos/${id}`,
};
