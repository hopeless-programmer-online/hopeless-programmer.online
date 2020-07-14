const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Реалізація фабрики.`),
    s.js(
        [ `class ProductA:` ],
        [ `    public Product` ],
        [ `{` ],
        [ `};` ],
        [ `` ],
        [ `class FactoryA:` ],
        [ `    public Factory` ],
        [ `{` ],
        [ `public:` ],
        [ `    Product* Create() override` ],
        [ `    {` ],
        [ `        return new ProductA();` ],
        [ `    }` ],
        [ `};` ],
        [ `` ],
        [ `// не залежить від ProductA та FactoryA` ],
        [ `void useProduct(Factory* factory)` ],
        [ `{` ],
        [ `    auto product = factory->Create();` ],
        [ `};` ],
    ),
]);
