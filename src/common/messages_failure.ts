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
        if (failure.response.data.message)
          openFailure(failure.response.data.message);
        else if (
          failure.response.data.errors[0].message ===
          "E_UNAUTHORIZED_ACCESS: Unauthorized access"
        )
          openFailure(
            "You are not authorizing to do this, check if you are correctly logged in to perform this operation."
          );
      } else {
        openFailure(failure.message);
      }
  }
}
