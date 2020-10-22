const s = require(`../../server/documenting`).shortcuts;
const {
    kw,
    f,
    c,
    v,
} = s;

exports = module.exports = s.illustration(``, s.cpp(...[
    [ c(`VkInstance`), ` `, v(`instance`), `;` ],
    [ `` ],
    [ c(`VkResult`), ` `, v(`result`), ` = `, f(`vkCreateInstance`), `(`, v(`info`), `, `, kw(`nullptr`), `, &`, v(`instance`), `);` ],
    [ `` ],
    [ kw(`if`), ` (`, v(`result`), ` != `, c(`VkResult`), `::`, c(`VK_SUCCESS`), `)` ],
    [ `{` ],
    [ `    `, kw(`throw`), ` `, c(`std`), `::`, c(`exception`), `();` ],
    [ `}` ],
]));
