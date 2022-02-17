import { extend } from 'umi-request';

const request = extend({
  timeout: 5000,
  useCache: false,
  headers: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzQxNDciLCJjaGFubmVsX2lkIjoiQVZHMTAwMDUiLCJsYW5ndWFnZV9pZCI6ImVuLVVTIiwicGxhdGZvcm0iOiJpb3MiLCJ2ZXJzaW9uIjoiIiwiY291bnRyeV9jb2RlIjoiVVMiLCJtYXN0ZXJfY2RuIjoiMiIsIm1jZiI6IjJVUyIsImV4cCI6MTY0MzE3OTgyMSwibmJmIjoxNjQzMDkzNDIxfQ.ZNmRmK7m9dhN9eulcePG_0iejyNA5r-HcIko-VSFJG8',
  },
});

export default request;
