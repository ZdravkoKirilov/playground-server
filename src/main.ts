import { ApolloServer } from 'apollo-server';

import { environment } from './environment';
import { connectMongoose } from './database';

const startServer = async () => {
    const server = new ApolloServer({
        modules: [
            require('./users')
        ]
    });

    await connectMongoose();

    server.listen(environment.port)
        .then(({ url }) => console.log(`Server ready at ${url}. `));

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.stop());
    }
};

startServer();

