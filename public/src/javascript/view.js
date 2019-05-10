export default {
  render(what) {
    const templateSource = what.innerHTML;
    const renderFn = Handlebars.compile(templateSource);
    return renderFn(what);
  }
}