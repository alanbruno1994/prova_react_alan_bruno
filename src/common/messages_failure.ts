export default function mensagesFailure(
  failure: { message: string; response?: any },
  openFailure: (value: string) => void
) {
  switch (failure.message) {
    case "Network Error":
      openFailure("Unable to access server data");
      break;
    default:
      if (failure.response && failure.response.status === 400) {
        openFailure(failure.response.data.error.message);
      } else if (failure.response && failure.response.status === 401) {
        openFailure(failure.response.data.message);
      } else {
        openFailure(failure.message);
      }
  }
}
