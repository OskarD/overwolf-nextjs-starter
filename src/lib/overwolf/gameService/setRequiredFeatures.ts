type SetRequiredFeaturesResult =
  overwolf.games.events.SetRequiredFeaturesResult;

const setOverwolfRequiredFeatures = overwolf.games.events.setRequiredFeatures;

const MAX_RETRY_TIMES = 15;
const RETRY_TIMEOUT = 3_000;

const setRequiredFeatures = async (
  requiredFeatures: string[],
): Promise<boolean> => {
  let tries: number = 1;
  let result: SetRequiredFeaturesResult | undefined = undefined;

  const setRequiredFeaturesWithRetry = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(async () => {
        if (tries >= MAX_RETRY_TIMES) {
          clearInterval(interval);
          reject(new Error("Max retry attempts reached"));
          return;
        }

        result = await new Promise<SetRequiredFeaturesResult>((resolve) => {
          setOverwolfRequiredFeatures(requiredFeatures, resolve);
        });

        if (result!.success) {
          clearInterval(interval);
          console.log(
            "setRequiredFeatures: success: " + JSON.stringify(result, null, 2),
          );

          console.assert(
            result!.supportedFeatures !== undefined,
            "Supported features returned as undefined",
          );
          resolve(result!.supportedFeatures!.length > 0);
          return;
        }

        tries++;
      }, RETRY_TIMEOUT);
    });
  };

  try {
    return await setRequiredFeaturesWithRetry();
  } catch (error) {
    console.warn(
      "setRequiredFeatures: failure after " +
        tries +
        " tries" +
        JSON.stringify(result ?? {}, null, 2),
    );
    return false;
  }
};

export default setRequiredFeatures;
