import DefaultThemes from '../models/defaults/Themes';
import DefaultContents from '../models/defaults/Contents';
import DefaultQuestions from '../models/defaults/Questions';
import DefaultProducts from '../models/defaults/Products';

// @TODO : Set this in environment
const BaseRemoteApi = 'http://10.0.2.2:5000/api/';

const QuizzRemoteApi = BaseRemoteApi + 'contents';
const BoardingRemoteApi = BaseRemoteApi + 'contents';
const ContentsRemoteApi = BaseRemoteApi + 'contents';
const ProductsRemoteApi = BaseRemoteApi + 'contents';

// @TODO : Set this in environment
const LOCAL_MODE = true;

const RemoteApi = {
  fetch: async targetUrl => {
    try {
      const response = await fetch(targetUrl);
      const jsonParsed = await response.json();

      return jsonParsed;
    } catch (e) {
      throw Error(e);
    }
  },
  fetchProducts: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultProducts;
      } else {
        const contents = await RemoteApi.fetch(ProductsRemoteApi);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchThemes: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultThemes;
      } else {
        const contents = await RemoteApi.fetch(BoardingRemoteApi);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchContents: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultContents;
      } else {
        const contents = await RemoteApi.fetch(ContentsRemoteApi);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchQuestions: async () => {
    try {
      if (LOCAL_MODE) {
        return DefaultQuestions;
      } else {
        const contents = await RemoteApi.fetch(QuizzRemoteApi);

        return contents.contents;
      }
    } catch (e) {
      throw Error(e);
    }
  },
  fetchBoarding: async () => {
    try {
      const contents = await RemoteApi.fetch(BoardingRemoteApi);

      return contents.contents;
    } catch (e) {
      throw Error(e);
    }
  },
};

export default RemoteApi;
