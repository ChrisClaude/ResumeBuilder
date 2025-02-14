/**
 * This method provides a wrapper around the error logging mechanism, so that later when an external logging provider is introduced we can do the switch in one place
 * @param message
 * @param name
 * @param cause
 * @param stack
 * @returns
 */
export const logError = (message: string, name: string, cause: string | undefined | unknown = undefined, stack: string | undefined = undefined): void => {
	const hasExternalLoggingService = false; // hardcode for now
	if (!hasExternalLoggingService) {
		console.error(message, name, cause, stack);
		return;
	}
};
