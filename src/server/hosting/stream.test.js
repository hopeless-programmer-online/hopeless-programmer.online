const Stream = require(`./accumulator`);


it(`Should work`, async () => {
    const stream = new Stream;

    async function fetch() {
        const data = [];

        for await (const x of stream) {
            data.push(x);
        }

        return data;
    }

    const promise1 = fetch();

    stream.Push(1);
    stream.Push(2);

    const promise2 = fetch();

    stream.Push(3);
    stream.End(4);

    const data1 = await promise1;
    const data2 = await promise2;

    console.log(data1);
    console.log(data2);

    expect(data1).toMatchObject([ 1, 2, 3, 4 ]);
    expect(data2).toMatchObject([ 1, 2, 3, 4 ]);
});
