import faker from 'faker';

const tweets = new Array(42).fill(null).map(e => {
    return {
        _id: faker.datatype.uuid(),
        createdAt: faker.date.recent(2),
        content: faker.lorem.words(45),
        statistic: {
            likes: faker.datatype.number(1042),
            comments: faker.datatype.number(1042),
            replies: faker.datatype.number(1042)
        },
        user: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatarUrl: faker.image.avatar(),
            _nickname: faker.internet.userName(),
        }
    };
});

export default tweets;