import { createSelector } from 'reselect';

const getCarOfTheWeekState = (state, props) =>
  state.carOfTheWeek

const getIdFromProps = (state, props) =>
  props.params.id

const getMakesState = (state, props) =>
  state.makes

const getModelsState = (state, props) =>
  state.models

export const isCarSearchAvailable = createSelector(
  [getMakesState, getModelsState],
  (makesState, modelsState) => {
    return modelsState.isFinished && makesState.isFinished;
  }
);

export const carSearchMapSelector = createSelector(
  [getMakesState, getModelsState, isCarSearchAvailable],
  (makesState, modelsState, isAvailable) => {
    if (!isAvailable) return null;
    const makes = makesState.makes;
    let result = {};
    for (let mk=0; mk<makes.length; mk++) {
      const models = modelsState.models.filter(md => {
        return md['makeId'] === makes[mk]['id']
      });
      const makeId = makes[mk]['id'];
      const makeName = makes[mk]['name'];
      result[makeId] = {
        name: makeName,
        models: models
      };
    }
    return result;
  }
);


export const isCarOfTheWeekAvailable = createSelector(
  [getMakesState, getModelsState, getCarOfTheWeekState],
  (makesState, modelsState, carOfTheWeekState) => {
    return carOfTheWeekState.isFinished && modelsState.isFinished && makesState.isFinished;
  }
);

export const isCarToDisplayAvailable = createSelector(
  [getMakesState, getModelsState],
  (makesState, modelsState) => {
    return modelsState.isFinished && makesState.isFinished;
  }
);

export const carOfTheWeekSelector = createSelector(
  [getMakesState, getModelsState, getCarOfTheWeekState, isCarOfTheWeekAvailable],
  (makesState, modelsState, carOfTheWeekState, isAvailable) => {
    if (isAvailable){
      const models = modelsState.models;
      const makes = makesState.makes;
      const carOfTheWeek = carOfTheWeekState.details;
      const model = models.filter(md => {
        return md['id'] === carOfTheWeek['modelId']
      })[0];
      if (model) {
        const make = makes.filter(mk => {
          return mk['id'] === model['makeId']
        })[0];
        return {
          ...carOfTheWeek,
          name: model.name,
          price: model.price,
          imageUrl: model.imageUrl,
          makeName: make.name
        }
      }
    }
    return null;
  }
);

export const carToDisplaySelector = createSelector(
  [getMakesState, getModelsState, getIdFromProps, isCarToDisplayAvailable],
  (makesState, modelsState, modelId, isAvailable) => {
    if (isAvailable){
      const models = modelsState.models;
      const makes = makesState.makes;
      const model = models.filter(md => {
        return md['id'].toString() === modelId
      })[0];
      if (model) {
        const make = makes.filter(mk => {
          return mk['id'] === model['makeId']
        })[0];
        return {
          name: model.name,
          price: model.price,
          imageUrl: model.imageUrl,
          makeName: make.name
        }
      }
    }
    return null;
  }
);
