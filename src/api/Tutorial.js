import http from "../api/index";

const getAll = () => {
  return http.get("/tutorial");
};

const get = id => {
  return http.get(`/tutorial/${id}`);
};

const create = data => {
  return http.post("/tutorial", data);
};

const update = (id, data) => {
  return http.put(`/tutorial/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorial/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorial`);
};

const findByTitle = title => {
  return http.get(`/tutorial?title=${title}`);
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
