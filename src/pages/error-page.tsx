import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { useTranslation } from 'react-i18next'


export default function ErrorPage() {
  const { t } = useTranslation("homepage");
  const error: any = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>{t("errors.title")}</h1>
        <p>{t("errors.text")}</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}