const Host = require(`./hosting/host`);
const Resource = require(`./hosting/resource`);
const HtmlResource = require(`./hosting/html-resource`);
const TemplateHtmlResource = require(`./hosting/template-html-resource`);
const DocumentResource = require(`./hosting/document-resource`);
const NotFoundError = require(`./hosting/not-found-error`);


exports.Host = Host;
exports.Resource = Resource;
exports.HtmlResource = HtmlResource;
exports.TemplateHtmlResource = TemplateHtmlResource;
exports.DocumentResource = DocumentResource;
exports.NotFoundError = NotFoundError;
