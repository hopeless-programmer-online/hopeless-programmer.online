const Host = require(`./hosting/host`);
const Resource = require(`./hosting/resource`);
const FileResource = require(`./hosting/file-resource`);
const SASSResource = require(`./hosting/sass-resource`);
const HtmlResource = require(`./hosting/html-resource`);
const TemplateHtmlResource = require(`./hosting/template-html-resource`);
const DocumentResource = require(`./hosting/document-resource`);
const IndexResource = require(`./hosting/index-resource`);
const NotFoundError = require(`./hosting/not-found-error`);


exports.Host = Host;
exports.Resource = Resource;
exports.FileResource = FileResource;
exports.SASSResource = SASSResource;
exports.HtmlResource = HtmlResource;
exports.TemplateHtmlResource = TemplateHtmlResource;
exports.DocumentResource = DocumentResource;
exports.IndexResource = IndexResource;
exports.NotFoundError = NotFoundError;
