Crie um arquivo .env na pasta raiz 'server' e adicione a variável de ambiente: DATABASE_URL="file:../prisma/aplicacao.sqlite"

Abra um terminal na pasta raiz 'server' e execute:
npm install
npx prisma generate
npm start
