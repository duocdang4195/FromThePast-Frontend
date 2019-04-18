/* eslint-disable import/prefer-default-export */

export const genFormData = (data) => {
  const form = new FormData();
  Object.keys(data).forEach((key) => {
    form.append(key, data[key]);
  });
  return form;
};

