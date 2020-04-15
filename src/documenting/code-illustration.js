const Illustration = require(`./illustration`);
class CodeIllustration extends Illustration {
    constructor({ Title, Description, Code }) {
        super({ Title, Description });
        this.__code = Code;
    }
    get Code() {
        return this.__code;
    }
    toHtml() {
        // @todo: id
        return (html.createElement("div", { id: "", class: "illustration" },
            html.createElement("h3", { class: "title" },
                this.Title.Sentences.map(sentence => sentence.toHtml()),
                html.createElement("a", { class: "link-button", href: "#" }, "#")),
            html.createElement("div", { class: "description" }, this.Description.Sentences.map(sentence => sentence.toHtml())),
            html.createElement("div", { class: "content" }, this.Code.toHtml())));
    }
}
exports = module.exports = CodeIllustration;
const html = require(`../html`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUcvQyxNQUFNLGdCQUFpQixTQUFRLFlBQVk7SUFDdkMsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1FBQ3BDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDRixZQUFZO1FBRVosT0FBTyxDQUNILDRCQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLGNBQWM7WUFDM0IsMkJBQUksS0FBSyxFQUFDLE9BQU87Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4RCwwQkFBRyxLQUFLLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxHQUFHLFFBQU0sQ0FDcEM7WUFDTCw0QkFBSyxLQUFLLEVBQUMsYUFBYSxJQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FDNUQ7WUFDTiw0QkFBSyxLQUFLLEVBQUMsU0FBUyxJQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQ2pCLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBR0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7QUFHNUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=