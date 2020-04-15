class Code {
    constructor({ Lines = [] } = {}) {
        this.__lines = Lines;
    }
    get Lines() {
        return this.__lines;
    }
    toHtml() {
        return (html.createElement("code", { class: "code" }));
    }
}
exports = module.exports = Code;
const html = require(`../html`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLElBQUk7SUFDTixZQUFZLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sQ0FDSCw2QkFBTSxLQUFLLEVBQUMsTUFBTSxHQUNYLENBQ1YsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQUdELE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUdoQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMifQ==