class Env {

 static APP_URL:string =  process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
 static BACKEND_URL:string = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
}

export default Env;