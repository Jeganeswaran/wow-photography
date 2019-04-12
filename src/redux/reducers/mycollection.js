import { PRIVATE_COLLECTION, PUBLISHED_COLLECTION } from "../actions/constants";
import { httpResultsReducer } from "./httpreducers";

//private collection
export const private_collection = httpResultsReducer(PRIVATE_COLLECTION);

//published collection
export const public_collection = httpResultsReducer(PUBLISHED_COLLECTION);

