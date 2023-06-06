## Getting Started

To get started with service

1. Build + start service  

    ```
      docker-compose up
    ```
hints:
```
nodejs service is rinning on 8000 
postgres DB is rinning on 5432
In dev mode you can use -> npm run dev, to start with nodemon
as awork around I set create + migrate db inside index.ts file, I should set them indise docker entrypoint.sh file but I faced a cahong docker bug
```