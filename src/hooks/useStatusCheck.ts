import { LoadingStatus } from "constants/general.const";

export const useStatusCheck = (statusSelector: LoadingStatus) => {

  const checkStatusSuccess = (status: LoadingStatus) => status === LoadingStatus.Succeeded;
  const checkStatusLoading = (status: LoadingStatus) => status === LoadingStatus.Loading;
  const checkStatusIdl = (status: LoadingStatus) => status === LoadingStatus.Idle;
  const checkStatusFailed = (status: LoadingStatus) => status === LoadingStatus.Failed;

  const isIdl = checkStatusIdl(statusSelector);
  const isLoading = checkStatusLoading(statusSelector);
  const isSuccess = checkStatusSuccess(statusSelector);
  const isFail = checkStatusFailed(statusSelector);

  return [
    isSuccess,
    isLoading,
    isIdl,
    isFail,
  ]
}
