import http from "../api/index";

const login = () => {
  return http.post("/login");
};

const signin = () => {
  return http.post(`/signin/`);
};

const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default TutorialService;
