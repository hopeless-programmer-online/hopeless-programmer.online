const s = require(`../../server/documenting`).shortcuts;
const {
    kw,
} = s;

exports = module.exports = s.illustration(``, s.py(...[
    [ kw(`def`), ` f():` ],
    [ `    return 1, 2, 3` ],
    [ `` ],
    [ `x, y, z = f()` ],
    [ `` ],
    [ `# 1, 2, 3` ],
    [ `print(x, y, z)` ],
]));
