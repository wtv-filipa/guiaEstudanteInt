import {
  getTestemunhos,
  getLoadingTestemunhos,
  testemunhosError,
  testemunhosCreateSuccess,
  testemunhosCreateError,
  testemunhosUpdateSuccess,
  testemunhosUpdateError,
  testemunhosDeleteSuccess,
  testemunhosDeleteError,
  getShowMessages,
} from "../reducers";

export const selectGetTestemunhos = (state) =>
  getTestemunhos(state.testemunhos);

export const selectGetLoadingTestemunhos = (state) =>
  getLoadingTestemunhos(state.testemunhos);

export const selectTestemunhosError = (state) =>
  testemunhosError(state.testemunhos);

export const createTestemunhosSuccess = (state) =>
  testemunhosCreateSuccess(state.testemunhos);

export const createTestemunhosError = (state) =>
  testemunhosCreateError(state.testemunhos);

export const updateTestemunhosSuccess = (state) =>
  testemunhosUpdateSuccess(state.testemunhos);

export const updateTestemunhosError = (state) =>
  testemunhosUpdateError(state.testemunhos);

export const deleteTestemunhosSuccess = (state) =>
  testemunhosDeleteSuccess(state.testemunhos);

export const deleteTestemunhosError = (state) =>
  testemunhosDeleteError(state.testemunhos);

export const selectShowMessages = (state) => getShowMessages(state.testemunhos);
