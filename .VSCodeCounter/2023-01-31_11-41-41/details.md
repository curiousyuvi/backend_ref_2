# Details

Date : 2023-01-31 11:41:41

Directory c:\\Users\\hp\\exhime_backend

Total : 48 files,  8056 codes, 391 comments, 1274 blanks, all 9721 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [README.md](/README.md) | Markdown | 1 | 0 | 1 | 2 |
| [babel.config.js](/babel.config.js) | JavaScript | 27 | 0 | 0 | 27 |
| [jest-mongodb-config.ts](/jest-mongodb-config.ts) | TypeScript | 12 | 0 | 1 | 13 |
| [jest.config.ts](/jest.config.ts) | TypeScript | 10 | 6 | 3 | 19 |
| [package.json](/package.json) | JSON | 74 | 0 | 1 | 75 |
| [src/app.ts](/src/app.ts) | TypeScript | 38 | 4 | 15 | 57 |
| [src/config/database/mongo.interface.ts](/src/config/database/mongo.interface.ts) | TypeScript | 0 | 14 | 2 | 16 |
| [src/config/database/mongo.ts](/src/config/database/mongo.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/config/database/mongoMemory.ts](/src/config/database/mongoMemory.ts) | TypeScript | 22 | 0 | 3 | 25 |
| [src/config/logger.ts](/src/config/logger.ts) | TypeScript | 0 | 33 | 7 | 40 |
| [src/config/swagger/swagger.json](/src/config/swagger/swagger.json) | JSON | 1 | 0 | 0 | 1 |
| [src/config/testSetup/setupMongoMemoryTest.ts](/src/config/testSetup/setupMongoMemoryTest.ts) | TypeScript | 6 | 0 | 2 | 8 |
| [src/controllers/auth/index.ts](/src/controllers/auth/index.ts) | TypeScript | 42 | 0 | 8 | 50 |
| [src/controllers/general/index.ts](/src/controllers/general/index.ts) | TypeScript | 26 | 0 | 5 | 31 |
| [src/controllers/item/index.ts](/src/controllers/item/index.ts) | TypeScript | 84 | 0 | 9 | 93 |
| [src/controllers/quotation/index.ts](/src/controllers/quotation/index.ts) | TypeScript | 98 | 0 | 9 | 107 |
| [src/controllers/service/index.ts](/src/controllers/service/index.ts) | TypeScript | 94 | 0 | 8 | 102 |
| [src/controllers/user/index.ts](/src/controllers/user/index.ts) | TypeScript | 125 | 0 | 13 | 138 |
| [src/helpers/checkUserExists.ts](/src/helpers/checkUserExists.ts) | TypeScript | 13 | 0 | 3 | 16 |
| [src/helpers/sendVerificationEmail.ts](/src/helpers/sendVerificationEmail.ts) | TypeScript | 51 | 1 | 10 | 62 |
| [src/middleware/auth.ts](/src/middleware/auth.ts) | TypeScript | 18 | 1 | 5 | 24 |
| [src/middleware/lightAuth.ts](/src/middleware/lightAuth.ts) | TypeScript | 20 | 1 | 4 | 25 |
| [src/models/Item/index.ts](/src/models/Item/index.ts) | TypeScript | 7 | 0 | 3 | 10 |
| [src/models/Quotation/index.ts](/src/models/Quotation/index.ts) | TypeScript | 17 | 0 | 3 | 20 |
| [src/models/Service/index.ts](/src/models/Service/index.ts) | TypeScript | 9 | 0 | 3 | 12 |
| [src/models/User/index.ts](/src/models/User/index.ts) | TypeScript | 75 | 14 | 15 | 104 |
| [src/router.ts](/src/router.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [src/routes/auth/index.ts](/src/routes/auth/index.ts) | TypeScript | 7 | 1 | 4 | 12 |
| [src/routes/general/index.ts](/src/routes/general/index.ts) | TypeScript | 9 | 12 | 6 | 27 |
| [src/routes/item/index.ts](/src/routes/item/index.ts) | TypeScript | 10 | 83 | 11 | 104 |
| [src/routes/quotation/index.ts](/src/routes/quotation/index.ts) | TypeScript | 10 | 81 | 10 | 101 |
| [src/routes/service/index.ts](/src/routes/service/index.ts) | TypeScript | 10 | 81 | 10 | 101 |
| [src/routes/user/index.ts](/src/routes/user/index.ts) | TypeScript | 12 | 2 | 5 | 19 |
| [src/server.test.ts](/src/server.test.ts) | TypeScript | 12 | 0 | 3 | 15 |
| [src/server.ts](/src/server.ts) | TypeScript | 7 | 1 | 4 | 12 |
| [src/testServer.ts](/src/testServer.ts) | TypeScript | 2 | 10 | 6 | 18 |
| [src/tests/api.test.ts](/src/tests/api.test.ts) | TypeScript | 35 | 0 | 5 | 40 |
| [src/tests/config.ts](/src/tests/config.ts) | TypeScript | 2 | 0 | 1 | 3 |
| [src/tests/fixtures/data.json](/src/tests/fixtures/data.json) | JSON | 22 | 0 | 0 | 22 |
| [src/types/Service.d.ts](/src/types/Service.d.ts) | TypeScript | 6 | 0 | 1 | 7 |
| [src/types/User.d.ts](/src/types/User.d.ts) | TypeScript | 6 | 0 | 1 | 7 |
| [src/util/.s3Methods.ts](/src/util/.s3Methods.ts) | TypeScript | 0 | 38 | 8 | 46 |
| [src/util/anyInterface.ts](/src/util/anyInterface.ts) | TypeScript | 3 | 0 | 1 | 4 |
| [src/util/csvToJson.ts](/src/util/csvToJson.ts) | TypeScript | 11 | 0 | 2 | 13 |
| [src/util/uploadToS3.ts](/src/util/uploadToS3.ts) | TypeScript | 26 | 2 | 2 | 30 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 27 | 6 | 1 | 34 |
| [vercel.json](/vercel.json) | JSON | 16 | 0 | 1 | 17 |
| [yarn-error.log](/yarn-error.log) | Log | 6,932 | 0 | 1,053 | 7,985 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)