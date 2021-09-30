const env = require('dotenv');
const admin = require('firebase-admin');

const seriveAccount = {
    type: 'service_account',
    project_id: 'fake-ig-demo',
    private_key_id: '213185573ca8ff7b6532754104d9e5b774a61e37',
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDzBCbIZhdOU56n\nQ/MNAgr+abP7kIVUB4peOu68VS7TRFZHpSXtc3KDCo4uOpskMbnRLQMth7iwVE1+\na0dj5GJ38cnk1RSQsIn2cKH+WUT/DqOOWOpnyAld1zwsYPNnhEaS3aO4LsQX0XHC\nB6PmLAiw+e7tDuaqx51EXsOC/8AsfK+aIuoHBGZayXX0zc6HO/zDmpsU/13Wogqi\nzJBpJDjwMqRQ/MFEEOCXS8tqP+RqdV/QfY0g+6yKUy+eZ+7O3EbEH5AiprE/1eoQ\nhnAaamjLEeEchqN8t9OPh3ID8wJ1mLGGwKW/+6xoxFQj5lMt+uvfpwMMnZ0xThta\nPobECkAtAgMBAAECggEAD1EnPcYHPb3kXspFwe1rdx1awOrSA15IBDpx07MJEGAk\nJAlTKDr4uXX9ki3KCTmNIbgwcKilJUbkJBb+D+54w4UvK8fkHPDTnv+M+Jk90aCK\nJtJHmbT5k02aEp4BK8HZBOa/q/anxtpB8blF13sfUbBM2aEVhbnTdQ8Fua1PA6xn\nDLs/3Ck8DRI/3RZU1LAiXyZ6FQDts40gtC85l50DiE9qEWlbqAVQAyAMoGb0j85n\nQfeCLKiWhlR2MHirFKsGLbVZhkeAZJaB1DSqiiAs5X1BTctomBlI6HgSZo8WFOAo\nv0OcDTcwkktL6lwt8/bd7ceebA8nwnCVB/P7i3MlbQKBgQD9BO55SNizle8YoQte\nSixb45LF++JO2/KlwwUkVoa8VuqWcP5/o+ozMAQddi+Ul/9v5DHSMeUYNyw0DRdb\nQmOSHCvPqiT3y3bQsWBRWjteu/i14YgWz/PO64pl9Thz5CSao/JvD1OrljrF1UT+\nCo3tWqydc3O4yW9BrcNYm9g2NwKBgQD14Q1gmp4t2X1adJpYiVGXqJ3pecjcqVKn\nt3knLPhS5W8cOn6DaRM95sRhFea6npA8shbmuNbwCy7G63hkVGVDk9t4SMaUu8FA\nCP/340LsR1ysFOybGetqevilZ+ysKLgLxCi2bk0//SzfeJlTyKKS1owWRdn7id+b\n7C54DqeKuwKBgQDWCaXy07z9rohkvVdwnC6KTSmMclgvfcD2mNNwugGgsaYhPdUN\nBQzJ4ISap6/4c9ySOugqeCrlIUczgR+RA8hXgZ1OPxCmzmfkgyiHqV0v9rOeqPsG\n0UPed0LMnXT0FLsiVi5v5PdS3/M4CAIlJaiKcXo0d8YdO8nyNZxbCPsOYQKBgQCW\naHcgczTz4ylVXiLUqhupZFJE8mS25zVSt197YXz+aK9RW07s4CgPI81ZfmZIHpsp\nJd/wf32sFYsl0AEzjpTrg9UrfYlMjpYmr9q1LuZPV1APTDV4o6Bo4JSdyjbzEW2U\ndQhaoJrM2/jJMyLIJ+GbZXcIYO55etu4q/+5HW3L5QKBgC2HjiNMrs9OPpEdGr9W\nmMTe+2wAFPcuwREKxF5PFiOjgUwWOW/y4VVVhU50zkZgS1DGO+Ggmh7NJ4utXK6L\nccYhnlYnunChJyvp3E8PDJUHxvZmVOxMxvln6cb6affFKxedFXKQY7vttnsgbunK\nbFVS4xTJknDC6LvSu+QLk8O9\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-df558@fake-ig-demo.iam.gserviceaccount.com",
    client_id: 100739734330471336257,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-df558%40fake-ig-demo.iam.gserviceaccount.com"
}

admin.initializeApp({
    credential: admin.credential.cert(seriveAccount)
});

module.exports = admin;
