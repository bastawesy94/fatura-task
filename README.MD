## Getting Started

To get started with service

1. Build + start service  

    ```
      docker-compose up
    ```
and you can import postman collection which is attached in the email
hints:
```
nodejs service is rinning on 8000 
postgres DB is rinning on 5432
In dev mode you can use -> npm run dev, to start with nodemon
```

Some points needed much time:
```
as awork around I set create + migrate db inside index.ts file, I should set them indise docker entrypoint.sh file but I faced a cahing docker bug
some vars I get them from env file and others from config.js, this needs to be organized more
it's better to split controller and routes
I tried to obligate with clean arch as much as possible with my time and everything be dockerized 
services needs validation and writing unit tests cases
```
![1](https://github.com/bastawesy94/fatura-task/assets/19712028/d845eaef-aa4f-4697-8744-ce0f7daf18d5)
